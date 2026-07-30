package com.aot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "card_progress")
public class CardProgress {

  /** Correct answers needed in total before a card can be retired. */
  public static final int REQUIRED_TOTAL = 3;

  /** Consecutive correct answers needed before a card can be retired. */
  public static final int REQUIRED_STREAK = 2;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "subject_id", nullable = false)
  private Subject subject;

  @Column(name = "card_key", nullable = false, length = 140)
  private String cardKey;

  @Column(nullable = false)
  private int attempts = 0;

  @Column(name = "correct_total", nullable = false)
  private int correctTotal = 0;

  @Column(name = "correct_streak", nullable = false)
  private int correctStreak = 0;

  @Column(nullable = false)
  private boolean mastered = false;

  @Column(name = "updated_at", nullable = false)
  private LocalDateTime updatedAt;

  @PrePersist
  @PreUpdate
  protected void touch() {
    updatedAt = LocalDateTime.now();
  }

  /**
   * Folds one self-graded attempt into the card's mastery state. A miss resets the streak but never
   * the running total, so a card already close to mastery is not sent back to zero. Mastery is
   * sticky once earned.
   */
  public void record(boolean correct) {
    attempts++;
    if (correct) {
      correctTotal++;
      correctStreak++;
    } else {
      correctStreak = 0;
    }
    if (correctTotal >= REQUIRED_TOTAL && correctStreak >= REQUIRED_STREAK) {
      mastered = true;
    }
  }

  public Long getId() {
    return id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Subject getSubject() {
    return subject;
  }

  public void setSubject(Subject subject) {
    this.subject = subject;
  }

  public String getCardKey() {
    return cardKey;
  }

  public void setCardKey(String cardKey) {
    this.cardKey = cardKey;
  }

  public int getAttempts() {
    return attempts;
  }

  public int getCorrectTotal() {
    return correctTotal;
  }

  public int getCorrectStreak() {
    return correctStreak;
  }

  public boolean isMastered() {
    return mastered;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }
}
