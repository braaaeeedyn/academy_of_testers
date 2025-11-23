package com.aot.dto;

import com.aot.entity.Exam;
import java.time.LocalDateTime;

public class ExamDTO {
  private Long id;
  private String name;
  private String description;
  private LocalDateTime createdAt;

  public ExamDTO() {}

  public ExamDTO(Exam exam) {
    this.id = exam.getId();
    this.name = exam.getName();
    this.description = exam.getDescription();
    this.createdAt = exam.getCreatedAt();
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

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }
}
