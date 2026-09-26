package com.aot.service;

import com.aot.dto.AiChatRequest;
import com.aot.service.RagRetrievalService.RetrievedChunk;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
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

  private static final String SYSTEM_PROMPT =
      "You are an AI study helper for Academy of Testers, a free platform for AP and SAT exam"
          + " preparation. Help students understand concepts, solve practice problems, and prepare"
          + " for their exams. Be concise, clear, and encouraging. When explaining math or science"
          + " formulas, use LaTeX notation wrapped in \\( \\) for inline math and \\[ \\] for"
          + " display math.";

  private static final int MAX_MESSAGE_LENGTH = 1000;
  private static final int MAX_CONTEXT_MESSAGES = 20;

  // How many curriculum chunks to retrieve as grounding for a single answer.
  private static final int RETRIEVAL_TOP_K = 4;

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
    // (or subject). Empty when nothing is ingested, in which case chat behaves as it always did.
    List<RetrievedChunk> grounding =
        ragRetrievalService.retrieveForChat(
            userId, req.getSubject(), req.getSkillIds(), latestUserMessage, RETRIEVAL_TOP_K);

    // Build messages array with system prompt + last N context messages
    List<Map<String, String>> apiMessages = new ArrayList<>();
    apiMessages.add(
        Map.of("role", "system", "content", buildSystemPrompt(grounding, req.getMasteryLevel())));

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
   * Builds the system prompt. With no retrieved grounding it is the original open-ended helper
   * (backward compatible). With grounding it becomes a RAG prompt: answer only from the retrieved
   * course content, say plainly when something isn't covered rather than filling the gap from
   * general knowledge, and adjust depth to the student's mastery level.
   */
  private String buildSystemPrompt(List<RetrievedChunk> grounding, String masteryLevel) {
    if (grounding.isEmpty()) {
      return SYSTEM_PROMPT;
    }

    StringBuilder sb = new StringBuilder(SYSTEM_PROMPT);
    sb.append("\n\nAnswer the student's question using ONLY the COURSE CONTENT below. If the"
        + " content does not cover what they asked, say so plainly — e.g. \"That isn't covered in"
        + " your course material yet\" — and do not fill the gap from general knowledge. Prefer the"
        + " wording and methods in the course content over your own.");

    if (masteryLevel != null && !masteryLevel.isBlank()) {
      sb.append("\n\nThe student's current mastery of this skill is \"")
          .append(masteryLevel)
          .append("\". Adjust the depth and pace of your explanation to match: more foundational and"
              + " step-by-step for lower mastery, more concise and advanced for higher mastery.");
    }

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
