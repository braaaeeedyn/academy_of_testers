package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;

/** Per-user SAT dashboard preferences: target test date and weekly practice-day goal. */
@Entity
@Table(name = "sat_user_prefs")
public class SatUserPrefs {

  @Id
  @Column(name = "user_id")
  private Long userId;

  @Column(name = "test_date")
  private LocalDate testDate;

  @Column(name = "weekly_goal")
  private Integer weeklyGoal;

  @Column(name = "updated_at", nullable = false)
  private LocalDateTime updatedAt;

  public SatUserPrefs() {}

  public SatUserPrefs(Long userId) {
    this.userId = userId;
    this.updatedAt = LocalDateTime.now();
  }

  public Long getUserId() {
    return userId;
  }

  public LocalDate getTestDate() {
    return testDate;
  }

  public void setTestDate(LocalDate testDate) {
    this.testDate = testDate;
  }

  public Integer getWeeklyGoal() {
    return weeklyGoal;
  }

  public void setWeeklyGoal(Integer weeklyGoal) {
    this.weeklyGoal = weeklyGoal;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }
}
