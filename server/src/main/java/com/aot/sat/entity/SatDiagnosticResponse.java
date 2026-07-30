package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

/** One answered diagnostic item (multiple choice only). */
@Entity
@Table(name = "sat_diagnostic_responses")
public class SatDiagnosticResponse {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "attempt_id", nullable = false)
  private Long attemptId;

  @Column(name = "question_id", nullable = false)
  private String questionId;

  @Column(name = "selected_index", nullable = false)
  private int selectedIndex;

  @Column(nullable = false)
  private boolean correct;

  @Column(name = "answered_at", nullable = false)
  private LocalDateTime answeredAt;

  public SatDiagnosticResponse() {}

  public SatDiagnosticResponse(
      Long attemptId, String questionId, int selectedIndex, boolean correct) {
    this.attemptId = attemptId;
    this.questionId = questionId;
    this.selectedIndex = selectedIndex;
    this.correct = correct;
    this.answeredAt = LocalDateTime.now();
  }

  public Long getId() {
    return id;
  }

  public String getQuestionId() {
    return questionId;
  }

  public boolean isCorrect() {
    return correct;
  }
}
