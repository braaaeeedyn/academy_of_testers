package com.aot.dto;

import com.aot.entity.Subject;
import java.time.LocalDateTime;

public class SubjectDTO {
  private Long id;
  private String name;
  private String description;
  private Long examId;
  private String examName;
  private LocalDateTime createdAt;

  public SubjectDTO() {}

  public SubjectDTO(Subject subject) {
    this.id = subject.getId();
    this.name = subject.getName();
    this.description = subject.getDescription();
    this.examId = subject.getExam().getId();
    this.examName = subject.getExam().getName();
    this.createdAt = subject.getCreatedAt();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Long getExamId() {
    return examId;
  }

  public void setExamId(Long examId) {
    this.examId = examId;
  }

  public String getExamName() {
    return examName;
  }

  public void setExamName(String examName) {
    this.examName = examName;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }
}
