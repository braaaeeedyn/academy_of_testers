package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/**
 * A student's stored mastery for one skill. The raw weight is meaningless without last_updated —
 * always read through MasteryService, which applies decay.
 */
@Entity
@Table(name = "sat_skill_weights")
public class SatSkillWeight {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "skill_id", nullable = false)
  private String skillId;

  @Column(nullable = false)
  private double weight;

  /** Highest weight ever reached (never decays); used to show peak mastery. */
  @Column(name = "max_weight", nullable = false)
  private double maxWeight;

  /** When {@link #maxWeight} was last set to a new peak. */
  @Column(name = "max_weight_at")
  private LocalDateTime maxWeightAt;

  @Column(nullable = false)
  private int attempts;

  @Column(name = "correct_count", nullable = false)
  private int correctCount;

  @Column(name = "last_updated", nullable = false)
  private LocalDateTime lastUpdated;

  public SatSkillWeight() {}

  public SatSkillWeight(Long userId, String skillId, double weight) {
    this.userId = userId;
    this.skillId = skillId;
    this.weight = weight;
    this.maxWeight = weight;
    this.maxWeightAt = LocalDateTime.now();
    this.lastUpdated = LocalDateTime.now();
  }

  public Long getId() {
    return id;
  }

  public Long getUserId() {
    return userId;
  }

  public String getSkillId() {
    return skillId;
  }

  public double getWeight() {
    return weight;
  }

  public void setWeight(double weight) {
    this.weight = weight;
  }

  public double getMaxWeight() {
    return maxWeight;
  }

  public void setMaxWeight(double maxWeight) {
    this.maxWeight = maxWeight;
  }

  public LocalDateTime getMaxWeightAt() {
    return maxWeightAt;
  }

  public void setMaxWeightAt(LocalDateTime maxWeightAt) {
    this.maxWeightAt = maxWeightAt;
  }

  public int getAttempts() {
    return attempts;
  }

  public void setAttempts(int attempts) {
    this.attempts = attempts;
  }

  public int getCorrectCount() {
    return correctCount;
  }

  public void setCorrectCount(int correctCount) {
    this.correctCount = correctCount;
  }

  public LocalDateTime getLastUpdated() {
    return lastUpdated;
  }

  public void setLastUpdated(LocalDateTime lastUpdated) {
    this.lastUpdated = lastUpdated;
  }
}
