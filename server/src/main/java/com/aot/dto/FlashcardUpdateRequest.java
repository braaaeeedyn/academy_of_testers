package com.aot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/** A card never moves between subjects, so only the two faces are editable. */
public class FlashcardUpdateRequest {

  @NotBlank(message = "Question is required")
  @Size(max = 1000, message = "Question must be at most 1000 characters")
  private String question;

  @NotBlank(message = "Answer is required")
  @Size(max = 2000, message = "Answer must be at most 2000 characters")
  private String answer;

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
