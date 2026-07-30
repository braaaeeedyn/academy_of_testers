package com.aot.dto;

import com.aot.entity.Stack;
import java.time.LocalDateTime;
import java.util.List;

public class StackDTO {

  private Long id;
  private Long subjectId;
  private String name;
  private List<CardRef> cards;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public record CardRef(Long flashcardId, String premadeId) {}

  public static StackDTO from(Stack stack) {
    StackDTO dto = new StackDTO();
    dto.id = stack.getId();
    dto.subjectId = stack.getSubject().getId();
    dto.name = stack.getName();
    dto.cards =
        stack.getCards().stream()
            .map(card -> new CardRef(card.getFlashcardId(), card.getPremadeId()))
            .toList();
    dto.createdAt = stack.getCreatedAt();
    dto.updatedAt = stack.getUpdatedAt();
    return dto;
  }

  public Long getId() {
    return id;
  }

  public Long getSubjectId() {
    return subjectId;
  }

  public String getName() {
    return name;
  }

  public List<CardRef> getCards() {
    return cards;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }
}
