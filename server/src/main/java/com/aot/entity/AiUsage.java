package com.aot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ai_usage")
public class AiUsage {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false, unique = true)
  private User user;

  @Column(name = "usage_count", nullable = false)
  private int usageCount = 0;

  @Column(name = "window_start", nullable = false)
  private LocalDateTime windowStart;

  @PrePersist
  protected void onCreate() {
    if (windowStart == null) {
      windowStart = LocalDateTime.now();
    }
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public int getUsageCount() {
    return usageCount;
  }

  public void setUsageCount(int usageCount) {
    this.usageCount = usageCount;
  }

  public LocalDateTime getWindowStart() {
    return windowStart;
  }

  public void setWindowStart(LocalDateTime windowStart) {
    this.windowStart = windowStart;
  }
}
