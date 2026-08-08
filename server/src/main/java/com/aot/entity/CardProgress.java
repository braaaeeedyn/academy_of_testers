package com.aot.entity;

import jakarta.persistence.*;
import java.time.Duration;
import java.time.LocalDateTime;

@Entity
@Table(name = "card_progress")
public class CardProgress {

  /** Correct answers needed in total before a card can be retired. */
  public static final int REQUIRED_TOTAL = 3;

  /** Consecutive correct answers needed before a card can be retired. */
  public static final int REQUIRED_STREAK = 2;

  /**
   * How long a question can go untouched before its mastery slips one tier. Every full period of
   * inactivity drops the card by one level (mastered → proficient → approaching → none), so students
   * have to keep practicing to hold a level. See {@link #applyDecay(LocalDateTime)}.
   */
  public static final int DECAY_PERIOD_DAYS = 14;

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

  /**
   * Lazily ages this card's mastery: for every full {@link #DECAY_PERIOD_DAYS}-day stretch since the
   * last activity, drop one tier — mastered → proficient (2 correct) → approaching (1 correct) →
   * none (0). This is applied on read and before folding a new attempt, so the stored state stays
   * honest and a single correct answer can't instantly restore a level that has decayed. Returns
   * {@code true} if anything changed (so the caller knows to persist and reset the clock).
   */
  public boolean applyDecay(LocalDateTime now) {
    if (updatedAt == null) {
      return false;
    }
    long days = Duration.between(updatedAt, now).toDays();
    int periods = (int) (days / DECAY_PERIOD_DAYS);
    if (periods <= 0) {
      return false;
    }
    int level = currentLevel();
    int newLevel = Math.max(0, level - periods);
    if (newLevel == level) {
      return false;
    }
    setLevel(newLevel);
    return true;
  }

  /** Current mastery tier as a 0–3 level: 3 mastered, 2 proficient, 1 approaching, 0 none. */
  private int currentLevel() {
    if (mastered) {
      return 3;
    }
    if (correctTotal >= 2) {
      return 2;
    }
    if (correctTotal >= 1) {
      return 1;
    }
    return 0;
  }

  /** Rewrites the counters so the card reads as the given tier, clearing any in-progress streak. */
  private void setLevel(int level) {
    switch (level) {
      case 3 -> {
        mastered = true;
        correctTotal = Math.max(correctTotal, REQUIRED_TOTAL);
      }
      case 2 -> {
        mastered = false;
        correctTotal = 2;
      }
      case 1 -> {
        mastered = false;
        correctTotal = 1;
      }
      default -> {
        mastered = false;
        correctTotal = 0;
      }
    }
    correctStreak = 0;
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
