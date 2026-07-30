package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/** Append-only audit row for one answered session question. */
@Entity
@Table(name = "sat_responses")
public class SatResponse {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "session_id", nullable = false)
  private Long sessionId;

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "question_id", nullable = false)
  private String questionId;

  @Column(name = "selected_index")
  private Integer selectedIndex;

  @Column(name = "answer_text")
  private String answerText;

  @Column(nullable = false)
  private boolean correct;

  @Column(name = "weight_before", nullable = false)
  private double weightBefore;

  @Column(name = "weight_after", nullable = false)
  private double weightAfter;

  @Column(name = "theta_at_selection", nullable = false)
  private double thetaAtSelection;

  @Column(name = "ms_elapsed")
  private Integer msElapsed;

  @Column(name = "answered_at", nullable = false)
  private LocalDateTime answeredAt;

  public SatResponse() {}

  public Long getId() {
    return id;
  }

  public void setSessionId(Long sessionId) {
    this.sessionId = sessionId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public void setQuestionId(String questionId) {
    this.questionId = questionId;
  }

  public void setSelectedIndex(Integer selectedIndex) {
    this.selectedIndex = selectedIndex;
  }

  public void setAnswerText(String answerText) {
    this.answerText = answerText;
  }

  public void setCorrect(boolean correct) {
    this.correct = correct;
  }

  public void setWeightBefore(double weightBefore) {
    this.weightBefore = weightBefore;
  }

  public void setWeightAfter(double weightAfter) {
    this.weightAfter = weightAfter;
  }

  public void setThetaAtSelection(double thetaAtSelection) {
    this.thetaAtSelection = thetaAtSelection;
  }

  public void setMsElapsed(Integer msElapsed) {
    this.msElapsed = msElapsed;
  }

  public void setAnsweredAt(LocalDateTime answeredAt) {
    this.answeredAt = answeredAt;
  }
}
