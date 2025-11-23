package com.aot.dto;

import com.aot.entity.StudyResource;
import java.time.LocalDateTime;

public class StudyResourceDTO {
  private Long id;
  private String title;
  private String description;
  private String fileUrl;
  private String fileType;
  private Integer examYear;
  private Long subjectId;
  private String subjectName;
  private LocalDateTime createdAt;

  public StudyResourceDTO() {}

  public StudyResourceDTO(StudyResource resource, String baseUrl) {
    this.id = resource.getId();
    this.title = resource.getTitle();
    this.description = resource.getDescription();
    this.fileUrl = baseUrl + resource.getFilePath();
    this.fileType = resource.getFileType();
    this.examYear = resource.getExamYear();
    this.subjectId = resource.getSubject().getId();
    this.subjectName = resource.getSubject().getName();
    this.createdAt = resource.getCreatedAt();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getFileUrl() {
    return fileUrl;
  }

  public void setFileUrl(String fileUrl) {
    this.fileUrl = fileUrl;
  }

  public String getFileType() {
    return fileType;
  }

  public void setFileType(String fileType) {
    this.fileType = fileType;
  }

  public Integer getExamYear() {
    return examYear;
  }

  public void setExamYear(Integer examYear) {
    this.examYear = examYear;
  }

  public Long getSubjectId() {
    return subjectId;
  }

  public void setSubjectId(Long subjectId) {
    this.subjectId = subjectId;
  }

  public String getSubjectName() {
    return subjectName;
  }

  public void setSubjectName(String subjectName) {
    this.subjectName = subjectName;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }
}
