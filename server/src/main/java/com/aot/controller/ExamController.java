package com.aot.controller;

import com.aot.dto.ExamDTO;
import com.aot.dto.SubjectDTO;
import com.aot.entity.Exam;
import com.aot.entity.Subject;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.ExamRepository;
import com.aot.repository.SubjectRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exams")
public class ExamController {

  private final ExamRepository examRepository;
  private final SubjectRepository subjectRepository;

  public ExamController(ExamRepository examRepository, SubjectRepository subjectRepository) {
    this.examRepository = examRepository;
    this.subjectRepository = subjectRepository;
  }

  @GetMapping
  public ResponseEntity<List<ExamDTO>> getAllExams() {
    List<Exam> exams = examRepository.findAll();
    List<ExamDTO> examDTOs = exams.stream().map(ExamDTO::new).collect(Collectors.toList());
    return ResponseEntity.ok(examDTOs);
  }

  @GetMapping("/{id}/subjects")
  public ResponseEntity<List<SubjectDTO>> getSubjectsByExam(@PathVariable Long id) {
    if (!examRepository.existsById(id)) {
      throw new ResourceNotFoundException("Exam not found with id: " + id);
    }

    List<Subject> subjects = subjectRepository.findByExamId(id);
    List<SubjectDTO> subjectDTOs =
        subjects.stream().map(SubjectDTO::new).collect(Collectors.toList());
    return ResponseEntity.ok(subjectDTOs);
  }
}
