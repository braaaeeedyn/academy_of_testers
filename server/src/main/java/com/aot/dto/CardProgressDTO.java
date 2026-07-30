package com.aot.dto;

import com.aot.entity.CardProgress;

public class CardProgressDTO {

  private String cardKey;
  private int attempts;
  private int correctTotal;
  private int correctStreak;
  private boolean mastered;

  public static CardProgressDTO from(CardProgress progress) {
    CardProgressDTO dto = new CardProgressDTO();
    dto.cardKey = progress.getCardKey();
    dto.attempts = progress.getAttempts();
    dto.correctTotal = progress.getCorrectTotal();
    dto.correctStreak = progress.getCorrectStreak();
    dto.mastered = progress.isMastered();
    return dto;
  }

  public String getCardKey() {
    return cardKey;
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
}
