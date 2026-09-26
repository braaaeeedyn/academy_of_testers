package com.aot.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * One retrievable chunk of grounding content — an AP rubric dimension, a scored exemplar band, or a
 * per-skill curriculum passage. The embedding is a JSON array of floats (see V25); it is NULL until
 * the embedding backfill runs. Metadata columns are the retrieval filters; which are populated
 * depends on {@link #corpus}.
 */
@Entity
@Table(name = "rag_chunks")
public class RagChunk {

  public static final String CORPUS_AP_RUBRIC = "ap_rubric";
  public static final String CORPUS_AP_EXEMPLAR = "ap_exemplar";
  public static final String CORPUS_CURRICULUM = "curriculum";

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String corpus;

  private String subject;

  @Column(name = "prompt_id")
  private String promptId;

  @Column(name = "skill_id")
  private String skillId;

  private String dimension;

  @Column(name = "score_band")
  private String scoreBand;

  @Column(name = "ref_id", nullable = false)
  private String refId;

  private String title;

  @Column(nullable = false, columnDefinition = "TEXT")
  private String content;

  @Column(name = "token_estimate", nullable = false)
  private int tokenEstimate;

  @Column(columnDefinition = "TEXT")
  private String embedding;

  @Column(name = "embedding_model")
  private String embeddingModel;

  @Column(name = "embedding_dims")
  private Integer embeddingDims;

  @Column(nullable = false)
  private boolean active = true;

  @Column(name = "created_at", nullable = false)
  private LocalDateTime createdAt;

  @Column(name = "updated_at", nullable = false)
  private LocalDateTime updatedAt;

  @PrePersist
  protected void onCreate() {
    LocalDateTime now = LocalDateTime.now();
    if (createdAt == null) {
      createdAt = now;
    }
    updatedAt = now;
  }

  @PreUpdate
  protected void onUpdate() {
    updatedAt = LocalDateTime.now();
  }

  public Long getId() {
    return id;
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

  public String getDimension() {
    return dimension;
  }

  public void setDimension(String dimension) {
    this.dimension = dimension;
  }

  public String getScoreBand() {
    return scoreBand;
  }

  public void setScoreBand(String scoreBand) {
    this.scoreBand = scoreBand;
  }

  public String getRefId() {
    return refId;
  }

  public void setRefId(String refId) {
    this.refId = refId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public int getTokenEstimate() {
    return tokenEstimate;
  }

  public void setTokenEstimate(int tokenEstimate) {
    this.tokenEstimate = tokenEstimate;
  }

  public String getEmbedding() {
    return embedding;
  }

  public void setEmbedding(String embedding) {
    this.embedding = embedding;
  }

  public String getEmbeddingModel() {
    return embeddingModel;
  }

  public void setEmbeddingModel(String embeddingModel) {
    this.embeddingModel = embeddingModel;
  }

  public Integer getEmbeddingDims() {
    return embeddingDims;
  }

  public void setEmbeddingDims(Integer embeddingDims) {
    this.embeddingDims = embeddingDims;
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }
}
