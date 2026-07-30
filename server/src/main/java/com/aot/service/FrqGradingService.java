package com.aot.service;

import com.aot.dto.FrqGradeRequest;
import com.aot.dto.FrqGradeResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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

/**
 * Grades a student's AP free-response essay strictly against the official-style rubric supplied by
 * the client. Deliberately calibrated harsher than a typical reader so students are over-prepared;
 * the grade is formative, never trusted for anything with stakes. The OpenAI key never leaves the
 * server.
 */
@Service
public class FrqGradingService {

  private static final Logger logger = LoggerFactory.getLogger(FrqGradingService.class);

  // A stronger model than the chat helper: rubric grading rewards better reasoning.
  private static final String MODEL = "gpt-4o";

  private static final String STRICTNESS_NOTE =
      "This response was graded strictly — harder than a typical AP reader. On borderline points"
          + " the AI withholds credit on purpose, so a lower score here does not mean you would earn"
          + " that same score on exam day. Treat it as a demanding coach, not a prediction.";

  private final WebClient webClient;
  private final ObjectMapper objectMapper;
  private final String apiKey;

  public FrqGradingService(
      @Value("${openai.api-key}") String apiKey, ObjectMapper objectMapper) {
    this.apiKey = apiKey;
    this.objectMapper = objectMapper;
    this.webClient =
        WebClient.builder()
            .baseUrl("https://api.openai.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
  }

  public FrqGradeResponse grade(FrqGradeRequest req) {
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("OpenAI API key not configured");
    }

    int possible = req.getRubric().stream().mapToInt(FrqGradeRequest.RubricRow::getMaxPoints).sum();

    List<Map<String, String>> messages =
        List.of(
            Map.of("role", "system", "content", buildSystemPrompt()),
            Map.of("role", "user", "content", buildUserPrompt(req)));

    Map<String, Object> body =
        Map.of(
            "model", MODEL,
            "messages", messages,
            "max_tokens", 1800,
            "temperature", 0.2,
            "response_format", Map.of("type", "json_object"));

    String rawJson;
    try {
      Map<?, ?> response =
          webClient
              .post()
              .uri("/v1/chat/completions")
              .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
              .bodyValue(body)
              .retrieve()
              .bodyToMono(Map.class)
              .block();

      rawJson = extractContent(response);
    } catch (Exception e) {
      logger.error("OpenAI grading request failed", e);
      throw new RuntimeException("Failed to grade the response");
    }

    return parseGrade(rawJson, req, possible);
  }

  private String buildSystemPrompt() {
    return "You are a veteran AP exam reader grading a student's free-response essay. Grade STRICTLY"
        + " against the official rubric rows you are given, one row at a time.\n\n"
        + "You are deliberately a HARSHER grader than a typical reader. On any point that is"
        + " borderline, arguable, or only partially met, DO NOT award it — award a point only when"
        + " the response CLEARLY and FULLY satisfies that row's criteria. This strict calibration is"
        + " intentional so the student is over-prepared for exam day.\n\n"
        + "For every rubric row, decide the integer points earned (0 to that row's max) and write a"
        + " specific 1-3 sentence justification that quotes or points to what the student did or"
        + " failed to do. Do not be vague. Then write overall feedback, 2-4 concrete strengths, and"
        + " 2-4 prioritized, actionable improvements. Never award more than a row's max.\n\n"
        + "Respond with ONLY a JSON object of this exact shape:\n"
        + "{\n"
        + "  \"rows\": [ { \"name\": string, \"earned\": integer, \"max\": integer,"
        + " \"justification\": string } ],\n"
        + "  \"overallFeedback\": string,\n"
        + "  \"strengths\": [ string ],\n"
        + "  \"improvements\": [ string ]\n"
        + "}\n"
        + "The rows array must contain exactly one entry per rubric row, in the given order, with"
        + " matching name and max.";
  }

  private String buildUserPrompt(FrqGradeRequest req) {
    StringBuilder sb = new StringBuilder();
    sb.append("SUBJECT: ").append(req.getSubjectName()).append('\n');
    sb.append("ESSAY TYPE: ").append(req.getEssayType()).append("\n\n");
    sb.append("PROMPT:\n").append(req.getPromptText()).append("\n\n");

    if (req.getSourceText() != null && !req.getSourceText().isBlank()) {
      sb.append("SOURCE / PASSAGE THE RESPONSE MUST ENGAGE WITH:\n")
          .append(req.getSourceText())
          .append("\n\n");
    }

    sb.append("OFFICIAL RUBRIC (grade each row strictly):\n");
    for (FrqGradeRequest.RubricRow row : req.getRubric()) {
      sb.append("- ")
          .append(row.getName())
          .append(" (max ")
          .append(row.getMaxPoints())
          .append(" pt")
          .append(row.getMaxPoints() == 1 ? "" : "s")
          .append("): ")
          .append(row.getCriteria())
          .append('\n');
    }

    sb.append("\nSTUDENT RESPONSE:\n").append(req.getStudentResponse());
    return sb.toString();
  }

  @SuppressWarnings("unchecked")
  private String extractContent(Map<?, ?> response) {
    if (response == null) {
      throw new RuntimeException("Empty response from AI");
    }
    List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
    if (choices == null || choices.isEmpty()) {
      throw new RuntimeException("No grading choices returned");
    }
    Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
    Object content = message == null ? null : message.get("content");
    if (content == null) {
      throw new RuntimeException("No grading content returned");
    }
    return content.toString();
  }

  /**
   * Parses the model's JSON, but never trusts its arithmetic: every row's earned points are clamped
   * to [0, max] and the total is re-summed server-side.
   */
  private FrqGradeResponse parseGrade(String rawJson, FrqGradeRequest req, int possible) {
    try {
      JsonNode root = objectMapper.readTree(rawJson);
      FrqGradeResponse out = new FrqGradeResponse();

      List<FrqGradeResponse.RowScore> rows = new ArrayList<>();
      int earned = 0;
      JsonNode rowsNode = root.get("rows");
      List<FrqGradeRequest.RubricRow> rubric = req.getRubric();

      for (int i = 0; i < rubric.size(); i++) {
        FrqGradeRequest.RubricRow spec = rubric.get(i);
        JsonNode rn = rowsNode != null && rowsNode.has(i) ? rowsNode.get(i) : null;

        FrqGradeResponse.RowScore rs = new FrqGradeResponse.RowScore();
        rs.setName(spec.getName());
        rs.setMax(spec.getMaxPoints());
        int got = rn != null && rn.has("earned") ? rn.get("earned").asInt(0) : 0;
        got = Math.max(0, Math.min(spec.getMaxPoints(), got));
        rs.setEarned(got);
        rs.setJustification(
            rn != null && rn.has("justification") ? rn.get("justification").asText("") : "");
        earned += got;
        rows.add(rs);
      }

      out.setRows(rows);
      out.setEarned(earned);
      out.setPossible(possible);
      out.setOverallFeedback(textOrEmpty(root, "overallFeedback"));
      out.setStrengths(toStringList(root.get("strengths")));
      out.setImprovements(toStringList(root.get("improvements")));
      out.setStrictnessNote(STRICTNESS_NOTE);
      return out;
    } catch (Exception e) {
      logger.error("Could not parse grading JSON: {}", rawJson, e);
      throw new RuntimeException("The grader returned an unreadable result. Please try again.");
    }
  }

  private String textOrEmpty(JsonNode root, String field) {
    return root.has(field) ? root.get(field).asText("") : "";
  }

  private List<String> toStringList(JsonNode node) {
    List<String> out = new ArrayList<>();
    if (node != null && node.isArray()) {
      node.forEach(n -> out.add(n.asText("")));
    }
    return out;
  }
}
