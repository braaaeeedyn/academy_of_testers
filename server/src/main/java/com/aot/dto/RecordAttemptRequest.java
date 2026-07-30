package com.aot.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class RecordAttemptRequest {

  @NotNull(message = "Subject is required")
  private Long subjectId;

  @NotBlank(message = "Card key is required")
  @Size(max = 140, message = "Card key is too long")
  private String cardKey;

  @NotNull(message = "Result is required")
  private Boolean correct;

  public Long getSubjectId() {
    return subjectId;
  }

  public void setSubjectId(Long subjectId) {
    this.subjectId = subjectId;
  }

  public String getCardKey() {
    return cardKey;
  }

  public void setCardKey(String cardKey) {
    this.cardKey = cardKey;
  }

  public Boolean getCorrect() {
    return correct;
  }

  public void setCorrect(Boolean correct) {
    this.correct = correct;
  }
}
