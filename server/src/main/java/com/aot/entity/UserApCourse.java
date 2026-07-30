package com.aot.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

/** One AP class a user has added to their planner. */
@Entity
@Table(name = "user_ap_courses")
@IdClass(UserApCourse.Key.class)
public class UserApCourse {

  @Id
  @Column(name = "user_id")
  private Long userId;

  @Id
  @Column(name = "subject_id")
  private Long subjectId;

  @Column(name = "added_at", nullable = false)
  private LocalDateTime addedAt;

  public UserApCourse() {}

  public UserApCourse(Long userId, Long subjectId) {
    this.userId = userId;
    this.subjectId = subjectId;
    this.addedAt = LocalDateTime.now();
  }

  public Long getUserId() {
    return userId;
  }

  public Long getSubjectId() {
    return subjectId;
  }

  public LocalDateTime getAddedAt() {
    return addedAt;
  }

  public static class Key implements Serializable {
    private Long userId;
    private Long subjectId;

    public Key() {}

    public Key(Long userId, Long subjectId) {
      this.userId = userId;
      this.subjectId = subjectId;
    }

    @Override
    public boolean equals(Object o) {
      if (this == o) return true;
      if (!(o instanceof Key key)) return false;
      return Objects.equals(userId, key.userId) && Objects.equals(subjectId, key.subjectId);
    }

    @Override
    public int hashCode() {
      return Objects.hash(userId, subjectId);
    }
  }
}
