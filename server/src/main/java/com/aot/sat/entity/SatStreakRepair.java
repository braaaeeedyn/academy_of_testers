package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;

/** One spent repair token that restores a specific previously-missed day for the streak. */
@Entity
@Table(name = "sat_streak_repairs")
public class SatStreakRepair {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "repaired_date", nullable = false)
  private LocalDate repairedDate;

  @Column(name = "created_at", nullable = false)
  private LocalDateTime createdAt;

  public SatStreakRepair() {}

  public SatStreakRepair(Long userId, LocalDate repairedDate) {
    this.userId = userId;
    this.repairedDate = repairedDate;
    this.createdAt = LocalDateTime.now();
  }

  public Long getId() {
    return id;
  }

  public Long getUserId() {
    return userId;
  }

  public LocalDate getRepairedDate() {
    return repairedDate;
  }
}
