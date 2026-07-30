package com.aot.dto;

import com.aot.entity.Flashcard;
import java.time.LocalDateTime;

public class FlashcardDTO {

  private Long id;
  private Long subjectId;
  private String question;
  private String answer;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;

  public static FlashcardDTO from(Flashcard card) {
    FlashcardDTO dto = new FlashcardDTO();
    dto.id = card.getId();
    dto.subjectId = card.getSubject().getId();
    dto.question = card.getQuestion();
    dto.answer = card.getAnswer();
    dto.createdAt = card.getCreatedAt();
    dto.updatedAt = card.getUpdatedAt();
    return dto;
  }

  public Long getId() {
    return id;
  }

  public Long getSubjectId() {
    return subjectId;
  }

  public String getQuestion() {
    return question;
  }

  public String getAnswer() {
    return answer;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }
}
