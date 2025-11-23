package com.aot.controller;

import com.aot.dto.SubjectDTO;
import com.aot.entity.Subject;
import com.aot.exception.ResourceNotFoundException;
import com.aot.repository.SubjectRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subjects")
public class SubjectController {

  private final SubjectRepository subjectRepository;

  public SubjectController(SubjectRepository subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  @GetMapping("/{id}")
  public ResponseEntity<SubjectDTO> getSubjectById(@PathVariable Long id) {
    Subject subject =
        subjectRepository
            .findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Subject not found with id: " + id));

    return ResponseEntity.ok(new SubjectDTO(subject));
  }
}
