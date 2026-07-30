package com.aot.sat.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * A bank question. Read-only in v1 except the attempts/correct_count counters, which are bumped via
 * a targeted JPQL update (never entity dirty-tracking, so the jsonb `options` column is never
 * written from a String). Seeded by Flyway V15.
 */
@Entity
@Table(name = "sat_questions")
public class SatQuestion {

  @Id private String id;

  @Column(name = "skill_id", nullable = false)
  private String skillId;

  @Column(name = "sub_skill")
  private String subSkill;

  @Column(nullable = false)
  private String stem;

  @Column(nullable = false)
  private String explanation;

  @Column(name = "answer_type", nullable = false)
  private String answerType;

  // jsonb columns, read-only here: mapped as JSON text, never written by JPA.
  @Column(name = "options", columnDefinition = "jsonb", insertable = false, updatable = false)
  private String options;

  @Column(name = "correct_index")
  private Integer correctIndex;

  @Column(
      name = "accepted_answers",
      columnDefinition = "jsonb",
      insertable = false,
      updatable = false)
  private String acceptedAnswers;

  @Column(nullable = false)
  private String difficulty;

  @Column(name = "irt_a", nullable = false)
  private double irtA;

  @Column(name = "irt_b", nullable = false)
  private double irtB;

  @Column(name = "irt_c", nullable = false)
  private double irtC;

  @Column(name = "is_diagnostic", nullable = false)
  private boolean diagnostic;

  @Column(nullable = false)
  private boolean active;

  @Column(nullable = false)
  private int attempts;

  @Column(name = "correct_count", nullable = false)
  private int correctCount;

  @Column private String source;

  public String getId() {
    return id;
  }

  public String getSkillId() {
    return skillId;
  }

  public String getStem() {
    return stem;
  }

  public String getExplanation() {
    return explanation;
  }

  public String getAnswerType() {
    return answerType;
  }

  public String getOptions() {
    return options;
  }

  public Integer getCorrectIndex() {
    return correctIndex;
  }

  public String getAcceptedAnswers() {
    return acceptedAnswers;
  }

  public String getDifficulty() {
    return difficulty;
  }

  public double getIrtA() {
    return irtA;
  }

  public double getIrtB() {
    return irtB;
  }

  public double getIrtC() {
    return irtC;
  }

  public boolean isDiagnostic() {
    return diagnostic;
  }

  public boolean isActive() {
    return active;
  }
}
