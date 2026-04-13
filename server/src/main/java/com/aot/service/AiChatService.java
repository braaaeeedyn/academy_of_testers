package com.aot.service;

import com.aot.dto.AiChatRequest;
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

  private final WebClient webClient;
  private final String apiKey;

  public AiChatService(@Value("${openai.api-key}") String apiKey) {
    this.apiKey = apiKey;
    this.webClient =
        WebClient.builder()
            .baseUrl("https://api.openai.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
  }

  public String chat(List<AiChatRequest.ChatMessage> messages) {
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("OpenAI API key not configured");
    }

    // Validate last message length
    if (!messages.isEmpty()) {
      AiChatRequest.ChatMessage lastMsg = messages.get(messages.size() - 1);
      if ("user".equals(lastMsg.getRole()) && lastMsg.getContent().length() > MAX_MESSAGE_LENGTH) {
        throw new IllegalArgumentException(
            "Message exceeds the " + MAX_MESSAGE_LENGTH + " character limit");
      }
    }

    // Build messages array with system prompt + last N context messages
    List<Map<String, String>> apiMessages = new ArrayList<>();
    apiMessages.add(Map.of("role", "system", "content", SYSTEM_PROMPT));

    int start = Math.max(0, messages.size() - MAX_CONTEXT_MESSAGES);
    for (int i = start; i < messages.size(); i++) {
      AiChatRequest.ChatMessage msg = messages.get(i);
      apiMessages.add(Map.of("role", msg.getRole(), "content", msg.getContent()));
    }

    Map<String, Object> requestBody =
        Map.of(
            "model", "gpt-4o-mini",
            "messages", apiMessages,
            "max_tokens", 1024,
            "temperature", 0.7);

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
}
