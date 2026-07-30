package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/**
 * A run of {@code targetLength} adaptively-selected questions. pending_question_id is the server's
 * memory of what it served: an answer for any other question is rejected.
 */
@Entity
@Table(name = "sat_sessions")
public class SatSession {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "target_length", nullable = false)
  private short targetLength;

  @Column(name = "questions_answered", nullable = false)
  private short questionsAnswered;

  @Column(name = "correct_count", nullable = false)
  private short correctCount;

  @Column(name = "pending_question_id")
  private String pendingQuestionId;

  @Column(name = "started_at", nullable = false)
  private LocalDateTime startedAt;

  @Column(name = "completed_at")
  private LocalDateTime completedAt;

  @Column(name = "focus_skill_id")
  private String focusSkillId;

  @Column(name = "question_queue")
  private String questionQueue;

  public SatSession() {}

  public SatSession(Long userId, int targetLength) {
    this.userId = userId;
    this.targetLength = (short) targetLength;
    this.startedAt = LocalDateTime.now();
  }

  public Long getId() {
    return id;
  }

  public Long getUserId() {
    return userId;
  }

  public short getTargetLength() {
    return targetLength;
  }

  public short getQuestionsAnswered() {
    return questionsAnswered;
  }

  public void setQuestionsAnswered(int v) {
    this.questionsAnswered = (short) v;
  }

  public short getCorrectCount() {
    return correctCount;
  }

  public void setCorrectCount(int v) {
    this.correctCount = (short) v;
  }

  public String getPendingQuestionId() {
    return pendingQuestionId;
  }

  public void setPendingQuestionId(String id) {
    this.pendingQuestionId = id;
  }

  public LocalDateTime getCompletedAt() {
    return completedAt;
  }

  public void setCompletedAt(LocalDateTime completedAt) {
    this.completedAt = completedAt;
  }

  public boolean isComplete() {
    return completedAt != null;
  }

  public String getFocusSkillId() {
    return focusSkillId;
  }

  public void setFocusSkillId(String focusSkillId) {
    this.focusSkillId = focusSkillId;
  }

  public String getQuestionQueue() {
    return questionQueue;
  }

  public void setQuestionQueue(String questionQueue) {
    this.questionQueue = questionQueue;
  }
}
