package com.aot.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

  @NotNull(message = "Rubric is required")
  @Size(min = 1, message = "Rubric must have at least one row")
  private List<RubricRow> rubric;

  @NotBlank(message = "Your response is required")
  @Size(max = 14000, message = "Response exceeds the character limit")
  private String studentResponse;

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
