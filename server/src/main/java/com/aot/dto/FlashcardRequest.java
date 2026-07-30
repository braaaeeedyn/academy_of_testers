package com.aot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class FlashcardRequest {

  @NotNull(message = "Subject is required")
  private Long subjectId;

  @NotBlank(message = "Question is required")
  @Size(max = 1000, message = "Question must be at most 1000 characters")
  private String question;

  @NotBlank(message = "Answer is required")
  @Size(max = 2000, message = "Answer must be at most 2000 characters")
  private String answer;

  public Long getSubjectId() {
    return subjectId;
  }

  public void setSubjectId(Long subjectId) {
    this.subjectId = subjectId;
  }

  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }
}
