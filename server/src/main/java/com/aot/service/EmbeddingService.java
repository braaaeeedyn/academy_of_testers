package com.aot.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * Turns text into embedding vectors via OpenAI, and (de)serializes them to the JSON-array-of-floats
 * form stored in {@code rag_chunks.embedding}. The API key never leaves the server, mirroring {@link
 * FrqGradingService} and {@link AiChatService}. This is the one component the RAG layer cannot run
 * without a key, both at ingest time (embedding the corpus) and query time (embedding the query).
 */
@Service
public class EmbeddingService {

  private static final Logger logger = LoggerFactory.getLogger(EmbeddingService.class);

  private final WebClient webClient;
  private final ObjectMapper objectMapper;
  private final String apiKey;
  private final String model;

  public EmbeddingService(
      @Value("${openai.api-key}") String apiKey,
      @Value("${openai.embedding-model}") String model,
      ObjectMapper objectMapper) {
    this.apiKey = apiKey;
    this.model = model;
    this.objectMapper = objectMapper;
    this.webClient =
        WebClient.builder()
            .baseUrl("https://api.openai.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            // A batch embeddings response is large: each input returns a 1536-float vector, so a
            // batch of ~7+ chunks exceeds WebClient's default 256 KB in-memory buffer and fails.
            // Raise the limit to 32 MB so batch ingestion doesn't have to fall back to one-by-one.
            .codecs(c -> c.defaultCodecs().maxInMemorySize(32 * 1024 * 1024))
            .build();
  }

  public boolean isConfigured() {
    return apiKey != null && !apiKey.isBlank();
  }

  public String getModel() {
    return model;
  }

  /** Embeds a single string. Throws if the key is missing or the API call fails. */
  public float[] embed(String text) {
    return embedBatch(List.of(text)).get(0);
  }

  /**
   * Embeds a batch of strings in one API call, preserving order. OpenAI accepts an array input and
   * returns one embedding per element; batching keeps ingestion cheap.
   */
  @SuppressWarnings("unchecked")
  public List<float[]> embedBatch(List<String> texts) {
    if (!isConfigured()) {
      throw new IllegalStateException("OpenAI API key not configured");
    }
    Map<String, Object> body = Map.of("model", model, "input", texts);
    try {
      Map<String, Object> response =
          webClient
              .post()
              .uri("/v1/embeddings")
              .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
              .bodyValue(body)
              .retrieve()
              .bodyToMono(Map.class)
              .block();

      if (response == null) {
        throw new RuntimeException("Empty embeddings response");
      }
      List<Map<String, Object>> data = (List<Map<String, Object>>) response.get("data");
      if (data == null || data.size() != texts.size()) {
        throw new RuntimeException("Embeddings response did not match the input count");
      }
      // OpenAI returns items with an "index" field; sort by it to be safe about ordering.
      data.sort(
          (x, y) ->
              Integer.compare(
                  ((Number) x.get("index")).intValue(), ((Number) y.get("index")).intValue()));

      List<float[]> out = new java.util.ArrayList<>(data.size());
      for (Map<String, Object> item : data) {
        List<Number> vec = (List<Number>) item.get("embedding");
        float[] arr = new float[vec.size()];
        for (int i = 0; i < vec.size(); i++) {
          arr[i] = vec.get(i).floatValue();
        }
        out.add(arr);
      }
      return out;
    } catch (Exception e) {
      logger.error("OpenAI embeddings request failed", e);
      throw new RuntimeException("Failed to generate embeddings");
    }
  }

  /** Serializes a vector to the JSON-array-of-floats text stored in the DB. */
  public String serialize(float[] embedding) {
    try {
      return objectMapper.writeValueAsString(embedding);
    } catch (Exception e) {
      throw new RuntimeException("Could not serialize embedding", e);
    }
  }

  /** Parses the stored JSON-array text back into a vector. Returns null on malformed input. */
  public float[] deserialize(String json) {
    if (json == null || json.isBlank()) {
      return null;
    }
    try {
      JsonNode node = objectMapper.readTree(json);
      if (!node.isArray()) {
        return null;
      }
      float[] arr = new float[node.size()];
      for (int i = 0; i < node.size(); i++) {
        arr[i] = (float) node.get(i).asDouble();
      }
      return arr;
    } catch (Exception e) {
      logger.warn("Could not parse stored embedding", e);
      return null;
    }
  }
}
