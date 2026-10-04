package com.aot.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.List;

/**
 * A student's free-response submission to be graded against an official-style rubric. The prompt
 * and rubric travel with the request (they live in the client-side content data); the server never
 * trusts them for anything but formative feedback, so this is safe.
 */
public class FrqGradeRequest {

  @NotBlank(message = "Subject is required")
  private String subjectName;

  /** e.g. "Rhetorical Analysis", "Argument", "Synthesis", "DBQ". */
  @NotBlank(message = "Essay type is required")
  private String essayType;

  @NotBlank(message = "Prompt text is required")
  @Size(max = 8000, message = "Prompt is too long")
  private String promptText;

  /** Optional passage / source packet the response must engage with (synthesis, rhetorical). */
  @Size(max = 20000, message = "Source text is too long")
  private String sourceText;

  /**
   * Optional stable identifier for the specific prompt being graded (e.g. "aplang-2021-q1"). When
   * present, RAG retrieval filters rubric/exemplar chunks to this prompt; when absent, retrieval
   * widens to all chunks for the subject. Never trusted for scoring — only for retrieval filtering.
   */
  @Size(max = 120, message = "Prompt id is too long")
  private String promptId;

  /**
   * Optional official scoring guideline for this exact question (answer key + point rules). Sent by
   * released-exam questions so grading never depends on retrieval succeeding; rubric rows can then
   * stay short and point back to it.
   */
  @Size(max = 8000, message = "Scoring guide is too long")
  private String scoringGuide;

  // Required for a normal (RAG) grade and enforced in FrqGradingService; omitted by the eval's
  // naive baseline arm (bypassGrounding=true), which grades with no rubric, so it is not @NotNull.
  @Size(min = 1, message = "Rubric must have at least one row")
  private List<RubricRow> rubric;

  @NotBlank(message = "Your response is required")
  @Size(max = 14000, message = "Response exceeds the character limit")
  private String studentResponse;

  /**
   * When true, the grader skips RAG retrieval entirely and grades with no rubric/exemplar grounding.
   * This exists for the offline A/B evaluation harness (baseline arm) — the normal UI never sets it,
   * so it defaults to false. It only removes grounding; it never changes what is scored.
   */
  private boolean bypassGrounding = false;

  public String getSubjectName() {
    return subjectName;
  }

  public void setSubjectName(String subjectName) {
    this.subjectName = subjectName;
  }

  public String getEssayType() {
    return essayType;
  }

  public void setEssayType(String essayType) {
    this.essayType = essayType;
  }

  public String getPromptText() {
    return promptText;
  }

  public void setPromptText(String promptText) {
    this.promptText = promptText;
  }

  public String getSourceText() {
    return sourceText;
  }

  public void setSourceText(String sourceText) {
    this.sourceText = sourceText;
  }

  public String getPromptId() {
    return promptId;
  }

  public void setPromptId(String promptId) {
    this.promptId = promptId;
  }

  public String getScoringGuide() {
    return scoringGuide;
  }

  public void setScoringGuide(String scoringGuide) {
    this.scoringGuide = scoringGuide;
  }

  public List<RubricRow> getRubric() {
    return rubric;
  }

  public void setRubric(List<RubricRow> rubric) {
    this.rubric = rubric;
  }

  public String getStudentResponse() {
    return studentResponse;
  }

  public void setStudentResponse(String studentResponse) {
    this.studentResponse = studentResponse;
  }

  public boolean isBypassGrounding() {
    return bypassGrounding;
  }

  public void setBypassGrounding(boolean bypassGrounding) {
    this.bypassGrounding = bypassGrounding;
  }

  /** One scoring row from the official rubric (e.g. "Thesis", worth 1 point). */
  public static class RubricRow {

    @NotBlank(message = "Rubric row name is required")
    private String name;

    @Min(value = 1, message = "A rubric row must be worth at least 1 point")
    private int maxPoints;

    @NotBlank(message = "Rubric row criteria are required")
    private String criteria;

    public String getName() {
      return name;
    }

    public void setName(String name) {
      this.name = name;
    }

    public int getMaxPoints() {
      return maxPoints;
    }

    public void setMaxPoints(int maxPoints) {
      this.maxPoints = maxPoints;
    }

    public String getCriteria() {
      return criteria;
    }

    public void setCriteria(String criteria) {
      this.criteria = criteria;
    }
  }
}
