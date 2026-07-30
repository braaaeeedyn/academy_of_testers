package com.aot.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.List;

public class StackRequest {

  @NotNull(message = "Subject is required")
  private Long subjectId;

  @NotBlank(message = "Name is required")
  @Size(max = 100, message = "Name must be at most 100 characters")
  private String name;

  @NotEmpty(message = "A stack needs at least one card")
  @Size(max = 200, message = "A stack can hold at most 200 cards")
  @Valid
  private List<CardRef> cards;

  public static class CardRef {
    private Long flashcardId;

    @Size(max = 120, message = "Premade id is too long")
    private String premadeId;

    public Long getFlashcardId() {
      return flashcardId;
    }

    public void setFlashcardId(Long flashcardId) {
      this.flashcardId = flashcardId;
    }

    public String getPremadeId() {
      return premadeId;
    }

    public void setPremadeId(String premadeId) {
      this.premadeId = premadeId;
    }
  }

  public Long getSubjectId() {
    return subjectId;
  }

  public void setSubjectId(Long subjectId) {
    this.subjectId = subjectId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public List<CardRef> getCards() {
    return cards;
  }

  public void setCards(List<CardRef> cards) {
    this.cards = cards;
  }
}
