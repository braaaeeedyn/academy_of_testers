package com.aot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * One retrieval event: which chunks were pulled for a grading or chat call. Exists purely for the
 * quality check in the RAG plan — a weekly spot-check reads these to confirm the retrieved rubric or
 * curriculum text actually matched the essay's subject/prompt or the student's skill, since wrong
 * retrieval silently produces wrong grades.
 */
@Entity
@Table(name = "rag_retrieval_log")
public class RagRetrievalLog {

  public static final String KIND_FRQ_GRADE = "frq_grade";
  public static final String KIND_CHAT = "chat";

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "call_kind", nullable = false)
  private String callKind;

  @Column(nullable = false)
  private String corpus;

  private String subject;

  @Column(name = "prompt_id")
  private String promptId;

  @Column(name = "skill_id")
  private String skillId;

  /** JSON array text: [{"refId":..,"score":..}, ...] in rank order. */
  @Column(nullable = false, columnDefinition = "TEXT")
  private String hits;

  @Column(name = "hit_count", nullable = false)
  private int hitCount;

  @Column(name = "created_at", nullable = false)
  private LocalDateTime createdAt;

  @PrePersist
  protected void onCreate() {
    if (createdAt == null) {
      createdAt = LocalDateTime.now();
    }
  }

  public Long getId() {
    return id;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getCallKind() {
    return callKind;
  }

  public void setCallKind(String callKind) {
    this.callKind = callKind;
  }

  public String getCorpus() {
    return corpus;
  }

  public void setCorpus(String corpus) {
    this.corpus = corpus;
  }

  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public String getPromptId() {
    return promptId;
  }

  public void setPromptId(String promptId) {
    this.promptId = promptId;
  }

  public String getSkillId() {
    return skillId;
  }

  public void setSkillId(String skillId) {
    this.skillId = skillId;
  }

  public String getHits() {
    return hits;
  }

  public void setHits(String hits) {
    this.hits = hits;
  }

  public int getHitCount() {
    return hitCount;
  }

  public void setHitCount(int hitCount) {
    this.hitCount = hitCount;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }
}
