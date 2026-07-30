package com.aot.entity;

import jakarta.persistence.*;

/**
 * One membership row. Exactly one of {@code flashcardId} (a row in {@code flashcards}) or {@code
 * premadeId} (a client-side derived card) is set; the DB enforces this.
 */
@Entity
@Table(name = "stack_cards")
public class StackCard {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "stack_id", nullable = false)
  private Stack stack;

  @Column(name = "flashcard_id")
  private Long flashcardId;

  @Column(name = "premade_id", length = 120)
  private String premadeId;

  @Column(nullable = false)
  private int position;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Stack getStack() {
    return stack;
  }

  public void setStack(Stack stack) {
    this.stack = stack;
  }

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

  public int getPosition() {
    return position;
  }

  public void setPosition(int position) {
    this.position = position;
  }
}
