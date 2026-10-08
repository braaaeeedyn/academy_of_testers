package com.aot.service;

import com.aot.dto.AiChatRequest;
import com.aot.service.RagRetrievalService.RetrievedChunk;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AiChatService {

  private static final Logger logger = LoggerFactory.getLogger(AiChatService.class);

  // Scope is deliberately broad. A narrow "AP and SAT prep" framing made the model refuse
  // legitimate coursework (a regular-class homework problem, a topic adjacent to the selected
  // subject, study-skills questions), so the prompt names what to help with and leaves refusals
  // only for requests that aren't schoolwork at all.
  private static final String SYSTEM_PROMPT =
      "You are Testy, the study helper for Academy of Testers, a free platform for AP and SAT"
          + " preparation. Help students understand concepts, work through problems, check their"
          + " reasoning, write and revise essays, and plan their studying. Treat any academic"
          + " question as in scope: every school subject at any level (including regular, honors,"
          + " and college courses, not only AP and SAT), test-taking strategy, study habits, and"
          + " college-admissions testing. Questions that are short, vague, or loosely phrased are"
          + " still welcome; answer the most likely academic reading, and ask a brief clarifying"
          + " question only if you truly can't tell what they mean. Only decline requests that have"
          + " nothing to do with learning, and do so in one friendly sentence that steers back to"
          + " studying. Be concise, clear, and encouraging. When explaining math or science"
          + " formulas, use LaTeX notation wrapped in \\( \\) for inline math and \\[ \\] for"
          + " display math.";

  private static final int MAX_MESSAGE_LENGTH = 1000;
  private static final int MAX_CONTEXT_MESSAGES = 20;

  // How many curriculum chunks to retrieve as grounding for a single answer.
  private static final int RETRIEVAL_TOP_K = 4;

  // Conversation grounding cache: a follow-up ("why?", "show another example") usually embeds too
  // vaguely to retrieve anything itself, but it's about the same material as the turn before. So
  // each user's last relevant chunks are kept briefly and carried into their next turn.
  private static final long RECENT_GROUNDING_TTL_MS = 30 * 60 * 1000L;
  private static final int MAX_CARRIED_CHUNKS = 2;
  private static final int MAX_TRACKED_CONVERSATIONS = 10_000;

  private record RecentGrounding(String subject, List<RetrievedChunk> chunks, long at) {}

  private final Map<Long, RecentGrounding> recentGrounding = new ConcurrentHashMap<>();

  private final WebClient webClient;
  private final RagRetrievalService ragRetrievalService;
  private final String apiKey;

  public AiChatService(
      @Value("${openai.api-key}") String apiKey, RagRetrievalService ragRetrievalService) {
    this.apiKey = apiKey;
    this.ragRetrievalService = ragRetrievalService;
    this.webClient =
        WebClient.builder()
            .baseUrl("https://api.openai.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
  }

  public String chat(AiChatRequest req, Long userId) {
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("OpenAI API key not configured");
    }

    List<AiChatRequest.ChatMessage> messages = req.getMessages();

    // Validate last message length
    String latestUserMessage = "";
    if (!messages.isEmpty()) {
      AiChatRequest.ChatMessage lastMsg = messages.get(messages.size() - 1);
      if ("user".equals(lastMsg.getRole())) {
        if (lastMsg.getContent().length() > MAX_MESSAGE_LENGTH) {
          throw new IllegalArgumentException(
              "Message exceeds the " + MAX_MESSAGE_LENGTH + " character limit");
        }
        latestUserMessage = lastMsg.getContent();
      }
    }

    // Retrieve curriculum grounding for the student's latest question, scoped to their skill focus
    // (or subject). Only chunks that are actually relevant come back, so this is often empty —
    // the model then answers from general knowledge.
    List<RetrievedChunk> fresh =
        ragRetrievalService.retrieveForChat(
            userId, req.getSubject(), req.getSkillIds(), latestUserMessage, RETRIEVAL_TOP_K);
    List<RetrievedChunk> grounding = withRecentGrounding(userId, req, fresh);

    // Build messages array with system prompt + last N context messages
    List<Map<String, String>> apiMessages = new ArrayList<>();
    apiMessages.add(
        Map.of(
            "role",
            "system",
            "content",
            buildSystemPrompt(grounding, req.getSubject(), req.getMasteryLevel())));

    int start = Math.max(0, messages.size() - MAX_CONTEXT_MESSAGES);
    for (int i = start; i < messages.size(); i++) {
      AiChatRequest.ChatMessage msg = messages.get(i);
      apiMessages.add(Map.of("role", msg.getRole(), "content", msg.getContent()));
    }

    Map<String, Object> requestBody =
        Map.of(
            "model",
            "gpt-4o-mini",
            "messages",
            apiMessages,
            "max_tokens",
            1024,
            "temperature",
            0.7);

    try {
      Map response =
          webClient
              .post()
              .uri("/v1/chat/completions")
              .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
              .bodyValue(requestBody)
              .retrieve()
              .bodyToMono(Map.class)
              .block();

      if (response == null) {
        return "Sorry, I could not generate a response.";
      }

      List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
      if (choices != null && !choices.isEmpty()) {
        Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
        if (message != null && message.get("content") != null) {
          return (String) message.get("content");
        }
      }

      return "Sorry, I could not generate a response.";
    } catch (Exception e) {
      logger.error("OpenAI API error", e);
      throw new RuntimeException("Failed to get a response from AI");
    }
  }

  /**
   * Combines this turn's fresh retrieval with up to {@link #MAX_CARRIED_CHUNKS} chunks from the
   * user's previous turn, then remembers the result for the next one. A first message starts a new
   * conversation and carries nothing; a subject switch carries nothing either.
   */
  private List<RetrievedChunk> withRecentGrounding(
      Long userId, AiChatRequest req, List<RetrievedChunk> fresh) {
    if (userId == null) {
      return fresh;
    }
    long now = System.currentTimeMillis();
    boolean newConversation = req.getMessages().size() <= 1;
    RecentGrounding prev = newConversation ? null : recentGrounding.get(userId);
    if (prev != null
        && (now - prev.at() > RECENT_GROUNDING_TTL_MS
            || !Objects.equals(prev.subject(), req.getSubject()))) {
      prev = null;
    }

    List<RetrievedChunk> merged = new ArrayList<>(fresh);
    if (prev != null) {
      Set<String> seen = new HashSet<>();
      fresh.forEach(c -> seen.add(c.refId()));
      // With nothing fresh, the follow-up leans entirely on the previous turn's material.
      int budget = fresh.isEmpty() ? RETRIEVAL_TOP_K : MAX_CARRIED_CHUNKS;
      for (RetrievedChunk c : prev.chunks()) {
        if (budget == 0) {
          break;
        }
        if (seen.add(c.refId())) {
          merged.add(c);
          budget--;
        }
      }
    }

    if (merged.isEmpty()) {
      recentGrounding.remove(userId);
    } else {
      if (recentGrounding.size() >= MAX_TRACKED_CONVERSATIONS) {
        recentGrounding.values().removeIf(g -> now - g.at() > RECENT_GROUNDING_TTL_MS);
      }
      // Remember what this turn was actually about: the fresh hits when there were any.
      List<RetrievedChunk> remembered = fresh.isEmpty() ? merged : fresh;
      recentGrounding.put(userId, new RecentGrounding(req.getSubject(), remembered, now));
    }
    return merged;
  }

  /**
   * Builds the system prompt. Retrieved course content is reference material, not a fence: the
   * model leans on it when it's relevant and answers from general knowledge when it isn't, rather
   * than refusing. Depth is adjusted to the student's mastery level either way.
   */
  private String buildSystemPrompt(
      List<RetrievedChunk> grounding, String subject, String masteryLevel) {
    StringBuilder sb = new StringBuilder(SYSTEM_PROMPT);

    if (subject != null && !subject.isBlank()) {
      sb.append("\n\nThe student has selected \"")
          .append(subject)
          .append(
              "\" as their focus. Use it as context for ambiguous questions, but it is not a"
                  + " limit: if they ask about another subject, answer that question normally.");
    }

    if (masteryLevel != null && !masteryLevel.isBlank()) {
      sb.append("\n\nThe student's current mastery of this skill is \"")
          .append(masteryLevel)
          .append(
              "\". Adjust the depth and pace of your explanation to match: more foundational and"
                  + " step-by-step for lower mastery, more concise and advanced for higher mastery.");
    }

    if (grounding.isEmpty()) {
      return sb.toString();
    }

    sb.append(
        "\n\nBelow is COURSE CONTENT from the student's study material that may relate to"
            + " their question. Where it is relevant, build your answer on it: prefer its wording,"
            + " terminology, and methods, and don't contradict it. Where it doesn't cover the question,"
            + " or only covers part of it, answer the rest fully from your own knowledge. Never refuse"
            + " or tell the student something isn't in their material — just help them. Ignore any"
            + " content below that is unrelated to the question.");

    sb.append("\n\nCOURSE CONTENT:\n");
    for (RetrievedChunk chunk : grounding) {
      sb.append("- ");
      if (chunk.title() != null && !chunk.title().isBlank()) {
        sb.append(chunk.title()).append(": ");
      }
      sb.append(chunk.content()).append('\n');
    }
    return sb.toString();
  }
}
