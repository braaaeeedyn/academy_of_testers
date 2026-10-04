package com.aot.service;

import com.aot.dto.FrqGradeRequest;
import com.aot.dto.FrqGradeResponse;
import com.aot.service.RagRetrievalService.RetrievedChunk;
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
      "This grade is calibrated to official AP scoring standards using the official rubric and"
          + " scored sample responses. Treat it as formative practice, not an official score"
          + " prediction.";

  // Retrieval pool size: pull a broad set by similarity, then diversify it across score bands so the
  // grader sees low/mid/high anchors, not just the mid-band exemplars nearest the essay.
  private static final int RETRIEVAL_POOL = 16;
  // How many diversified chunks to actually inject into the grading prompt.
  private static final int INJECTED_CHUNKS = 9;

  private final WebClient webClient;
  private final ObjectMapper objectMapper;
  private final RagRetrievalService ragRetrievalService;
  private final String apiKey;

  public FrqGradingService(
      @Value("${openai.api-key}") String apiKey,
      ObjectMapper objectMapper,
      RagRetrievalService ragRetrievalService) {
    this.apiKey = apiKey;
    this.objectMapper = objectMapper;
    this.ragRetrievalService = ragRetrievalService;
    this.webClient =
        WebClient.builder()
            .baseUrl("https://api.openai.com")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
  }

  public FrqGradeResponse grade(FrqGradeRequest req, Long userId) {
    if (apiKey == null || apiKey.isBlank()) {
      throw new IllegalStateException("OpenAI API key not configured");
    }

    // The eval harness's baseline arm sets bypassGrounding: a naive grader with NO rubric and NO
    // retrieval, since supplying the rubric is itself a form of grounding. The RAG arm (below) adds
    // the rubric, the retrieved rubric clauses, and the scored exemplars — that's the full pipeline.
    if (req.isBypassGrounding()) {
      return gradeBasic(req);
    }

    if (req.getRubric() == null || req.getRubric().isEmpty()) {
      throw new IllegalArgumentException("Rubric is required");
    }
    int possible = req.getRubric().stream().mapToInt(FrqGradeRequest.RubricRow::getMaxPoints).sum();

    // Retrieve rubric-clause and exemplar grounding for THIS subject/prompt. The query is built
    // from the rubric + a slice of the student's response so retrieval keys on what's being graded.
    String retrievalQuery = buildRetrievalQuery(req);
    List<RetrievedChunk> pool =
        ragRetrievalService.retrieveForGrader(
            userId, req.getSubjectName(), req.getPromptId(), retrievalQuery, RETRIEVAL_POOL);
    List<RetrievedChunk> grounding = diversifyByBand(pool, INJECTED_CHUNKS);
    boolean groundingApplied = !grounding.isEmpty();

    List<Map<String, String>> messages =
        List.of(
            Map.of("role", "system", "content", buildSystemPrompt(groundingApplied)),
            Map.of("role", "user", "content", buildUserPrompt(req, grounding)));

    Map<String, Object> body =
        Map.of(
            "model", MODEL,
            "messages", messages,
            "max_tokens", 1800,
            "temperature", 0.0,
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

    return parseGrade(rawJson, req, possible, grounding, groundingApplied);
  }

  /**
   * The naive baseline for the A/B eval: grade the essay holistically on the AP 6-point scale with
   * NO rubric text and NO retrieval — literally "here's an AP essay, give it a score." This is the
   * ungrounded arm the full RAG grader is measured against. It returns only a total (no per-row
   * breakdown, since without a rubric there are no rows).
   */
  private FrqGradeResponse gradeBasic(FrqGradeRequest req) {
    // AP English Language & Literature FRQs are scored out of 6; the baseline has no rubric to sum.
    int possible = 6;

    String system =
        "You are an experienced AP "
            + req.getSubjectName()
            + " reader. Grade the student's "
            + req.getEssayType()
            + " free response holistically on the standard AP 6-point scale (0 to 6), the way AP"
            + " readers do, weighing thesis, evidence and commentary, and sophistication. Respond"
            + " with ONLY a JSON object of this exact shape: {\"score\": <integer 0 to 6>}.";

    StringBuilder user = new StringBuilder();
    user.append("SUBJECT: ").append(req.getSubjectName()).append('\n');
    user.append("ESSAY TYPE: ").append(req.getEssayType()).append("\n\n");
    if (req.getPromptText() != null && !req.getPromptText().isBlank()) {
      user.append("PROMPT:\n").append(req.getPromptText()).append("\n\n");
    }
    user.append("STUDENT RESPONSE:\n").append(req.getStudentResponse());

    List<Map<String, String>> messages =
        List.of(
            Map.of("role", "system", "content", system),
            Map.of("role", "user", "content", user.toString()));

    Map<String, Object> body =
        Map.of(
            "model", MODEL,
            "messages", messages,
            "max_tokens", 50,
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

    int earned;
    try {
      earned = objectMapper.readTree(rawJson).path("score").asInt(0);
    } catch (Exception e) {
      logger.error("Could not parse basic grading JSON: {}", rawJson, e);
      throw new RuntimeException("The grader returned an unreadable result. Please try again.");
    }
    earned = Math.max(0, Math.min(possible, earned));

    FrqGradeResponse out = new FrqGradeResponse();
    out.setRows(new ArrayList<>());
    out.setEarned(earned);
    out.setPossible(possible);
    out.setOverallFeedback("");
    out.setStrengths(new ArrayList<>());
    out.setImprovements(new ArrayList<>());
    out.setGroundingApplied(false);
    return out;
  }

  /**
   * The retrieval key for a grade: the rubric row names/criteria plus a leading slice of the
   * student's response. This keeps retrieval focused on the dimensions being scored and the essay's
   * actual content, rather than on the (often boilerplate) prompt text.
   */
  private String buildRetrievalQuery(FrqGradeRequest req) {
    StringBuilder sb = new StringBuilder();
    sb.append(req.getEssayType()).append('\n');
    for (FrqGradeRequest.RubricRow row : req.getRubric()) {
      sb.append(row.getName()).append(": ").append(row.getCriteria()).append('\n');
    }
    String resp = req.getStudentResponse();
    if (resp != null) {
      sb.append(resp, 0, Math.min(resp.length(), 1500));
    }
    return sb.toString();
  }

  /**
   * Diversifies a similarity-ranked pool so the injected grounding spans the whole score scale.
   * Similarity alone tends to return mid-band exemplars (the ones most like the essay), which makes
   * the grader regress to the middle. This keeps the top rubric clauses, then round-robins one
   * exemplar per distinct score band (low/mid/high all represented) so the model has anchors across
   * the full range. Within each band, similarity order is preserved.
   */
  private List<RetrievedChunk> diversifyByBand(List<RetrievedChunk> pool, int maxChunks) {
    List<RetrievedChunk> rubric = new ArrayList<>();
    java.util.LinkedHashMap<String, java.util.Deque<RetrievedChunk>> byBand =
        new java.util.LinkedHashMap<>();
    for (RetrievedChunk c : pool) {
      boolean isExemplar = c.scoreBand() != null && !c.scoreBand().isBlank();
      if (isExemplar) {
        byBand.computeIfAbsent(c.scoreBand(), k -> new java.util.ArrayDeque<>()).add(c);
      } else {
        rubric.add(c);
      }
    }

    List<RetrievedChunk> out = new ArrayList<>();
    // Keep rubric clauses, but leave at least half the budget for exemplars from across the bands.
    int rubricCap = Math.min(rubric.size(), Math.max(3, maxChunks / 2));
    out.addAll(rubric.subList(0, rubricCap));

    boolean addedAny = true;
    while (out.size() < maxChunks && addedAny) {
      addedAny = false;
      for (java.util.Deque<RetrievedChunk> band : byBand.values()) {
        if (!band.isEmpty() && out.size() < maxChunks) {
          out.add(band.poll());
          addedAny = true;
        }
      }
    }
    return out;
  }

  private String buildSystemPrompt(boolean groundingApplied) {
    String base =
        "You are an experienced, well-calibrated AP exam reader grading a student's free-response"
            + " essay against the official rubric rows you are given, one row at a time.\n\n"
            + "Grade exactly as an official AP reader would — neither harsher nor more lenient."
            + " Apply each row's criteria and its official decision rules as written: award the"
            + " point when the response meets that row's standard, and withhold it only when it"
            + " genuinely does not. Use the full score range; do not default to middle or low"
            + " scores, and do not withhold a point merely because the response is imperfect —"
            + " AP rows reward meeting the stated bar, not perfection.\n\n"
            + "Award a row's MAXIMUM whenever the response meets that row's top criteria as the"
            + " high-band exemplars demonstrate. Do not reserve the hardest points — the top"
            + " evidence-and-commentary point and the sophistication point — for flawless essays;"
            + " AP readers award them to strong-but-imperfect responses, so essays that resemble the"
            + " high-band exemplars should reach totals at or near the maximum, and weak ones near"
            + " zero.\n\n"
            + "For every rubric row, decide the integer points earned (0 to that row's max) and"
            + " write a specific 1-3 sentence justification that quotes or points to what the"
            + " student did or failed to do. Do not be vague. Then write overall feedback, 2-4"
            + " concrete strengths, and 2-4 prioritized, actionable improvements. Never award more"
            + " than a row's max.\n\n";

    String citationRule;
    String citationField;
    if (groundingApplied) {
      citationRule =
          "You are given a RETRIEVED CONTEXT block: official rubric clauses and scored exemplar"
              + " excerpts, each tagged with an [id] (exemplars also show their score band). The"
              + " exemplars deliberately span the FULL score range — low, middle, and high bands."
              + " CALIBRATE to them: find the exemplar(s) whose quality most resembles this response"
              + " and align your points on each row to how those exemplars were scored, applying the"
              + " cited rubric clause's decision rules. Use the whole scale — if the response matches"
              + " a high-band exemplar, award the high scores (including the top row points and a"
              + " total at or near the maximum); if it matches a low-band exemplar, award low scores."
              + " Do NOT cluster every response in the middle of the scale; a middling total should"
              + " be a deliberate match"
              + " to a mid-band exemplar, not a default. In each row set \"citation\" to the [id] of"
              + " the rubric clause or exemplar that most justifies your decision. Only cite ids that"
              + " appear in the retrieved context; if truly none applies, set \"citation\" to \"\".\n\n";
      citationField = " \"citation\": string,";
    } else {
      citationRule = "";
      citationField = "";
    }

    return base
        + citationRule
        + "Respond with ONLY a JSON object of this exact shape:\n"
        + "{\n"
        + "  \"rows\": [ { \"name\": string, \"earned\": integer, \"max\": integer,"
        + citationField
        + " \"justification\": string } ],\n"
        + "  \"overallFeedback\": string,\n"
        + "  \"strengths\": [ string ],\n"
        + "  \"improvements\": [ string ]\n"
        + "}\n"
        + "The rows array must contain exactly one entry per rubric row, in the given order, with"
        + " matching name and max.";
  }

  private String buildUserPrompt(FrqGradeRequest req, List<RetrievedChunk> grounding) {
    StringBuilder sb = new StringBuilder();
    sb.append("SUBJECT: ").append(req.getSubjectName()).append('\n');
    sb.append("ESSAY TYPE: ").append(req.getEssayType()).append("\n\n");
    sb.append("PROMPT:\n").append(req.getPromptText()).append("\n\n");

    if (req.getSourceText() != null && !req.getSourceText().isBlank()) {
      sb.append("SOURCE / PASSAGE THE RESPONSE MUST ENGAGE WITH:\n")
          .append(req.getSourceText())
          .append("\n\n");
    }

    if (!grounding.isEmpty()) {
      sb.append("RETRIEVED CONTEXT (cite these [id]s in each row's \"citation\"):\n");
      for (RetrievedChunk chunk : grounding) {
        sb.append("[").append(chunk.refId()).append("]");
        if (chunk.scoreBand() != null && !chunk.scoreBand().isBlank()) {
          sb.append(" (exemplar band ").append(chunk.scoreBand()).append(")");
        } else if (chunk.dimension() != null && !chunk.dimension().isBlank()) {
          sb.append(" (rubric: ").append(chunk.dimension()).append(")");
        }
        sb.append(": ").append(chunk.content()).append('\n');
      }
      sb.append('\n');
    }

    if (req.getScoringGuide() != null && !req.getScoringGuide().isBlank()) {
      sb.append("OFFICIAL SCORING GUIDELINE FOR THIS QUESTION (answer key and point rules):\n")
          .append(req.getScoringGuide())
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
  private FrqGradeResponse parseGrade(
      String rawJson,
      FrqGradeRequest req,
      int possible,
      List<RetrievedChunk> grounding,
      boolean groundingApplied) {
    try {
      JsonNode root = objectMapper.readTree(rawJson);
      FrqGradeResponse out = new FrqGradeResponse();

      // The set of citation ids we actually gave the model, so we can reject invented ones.
      java.util.Set<String> validCitations = new java.util.HashSet<>();
      for (RetrievedChunk chunk : grounding) {
        validCitations.add(chunk.refId());
      }

      List<FrqGradeResponse.RowScore> rows = new ArrayList<>();
      int earned = 0;
      int ungroundedRows = 0;
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

        // Guardrail: a citation counts only if it names a clause we actually retrieved. An empty
        // or invented citation leaves the row flagged as ungrounded so it can be caught before it
        // reaches a student.
        if (groundingApplied) {
          String cited = rn != null && rn.has("citation") ? rn.get("citation").asText("") : "";
          if (!cited.isBlank() && validCitations.contains(cited)) {
            rs.setCitation(cited);
            rs.setGrounded(true);
          } else {
            rs.setCitation(cited.isBlank() ? null : cited);
            rs.setGrounded(false);
            ungroundedRows++;
          }
        }

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
      out.setGroundingApplied(groundingApplied);
      if (groundingApplied && ungroundedRows > 0) {
        out.setGroundingNote(
            ungroundedRows
                + " of "
                + rows.size()
                + " rows were scored without citing a retrieved rubric clause — treat those with"
                + " extra caution.");
      }
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
