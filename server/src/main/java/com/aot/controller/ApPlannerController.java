package com.aot.controller;

import com.aot.entity.Subject;
import com.aot.entity.UserApCourse;
import com.aot.repository.SubjectRepository;
import com.aot.repository.UserApCourseRepository;
import jakarta.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Stores which AP classes a user has added to their planner. Auth required (SecurityConfig). */
@RestController
@RequestMapping("/api/ap/courses")
public class ApPlannerController {

  public record SaveCoursesRequest(List<Long> subjectIds) {}

  private final UserApCourseRepository courseRepository;
  private final SubjectRepository subjectRepository;

  public ApPlannerController(
      UserApCourseRepository courseRepository, SubjectRepository subjectRepository) {
    this.courseRepository = courseRepository;
    this.subjectRepository = subjectRepository;
  }

  private static Long uid(Authentication auth) {
    return (Long) auth.getPrincipal();
  }

  @GetMapping
  public ResponseEntity<List<Long>> getCourses(Authentication auth) {
    List<Long> ids =
        courseRepository.findByUserIdOrderByAddedAtAsc(uid(auth)).stream()
            .map(UserApCourse::getSubjectId)
            .toList();
    return ResponseEntity.ok(ids);
  }

  @PutMapping
  @Transactional
  public ResponseEntity<List<Long>> saveCourses(
      Authentication auth, @RequestBody SaveCoursesRequest request) {
    Long userId = uid(auth);
    List<Long> requested =
        request.subjectIds() == null ? List.of() : request.subjectIds().stream().distinct().toList();

    // Only accept real AP subjects — silently drop anything else.
    Set<Long> valid = new HashSet<>();
    for (Subject s : subjectRepository.findAllById(requested)) {
      if ("AP".equalsIgnoreCase(s.getExam().getName())) {
        valid.add(s.getId());
      }
    }

    Set<Long> existing = new HashSet<>();
    for (UserApCourse c : courseRepository.findByUserIdOrderByAddedAtAsc(userId)) {
      if (valid.contains(c.getSubjectId())) {
        existing.add(c.getSubjectId());
      } else {
        courseRepository.delete(c);
      }
    }
    for (Long subjectId : requested) {
      if (valid.contains(subjectId) && !existing.contains(subjectId)) {
        courseRepository.save(new UserApCourse(userId, subjectId));
      }
    }

    List<Long> ids =
        courseRepository.findByUserIdOrderByAddedAtAsc(userId).stream()
            .map(UserApCourse::getSubjectId)
            .toList();
    return ResponseEntity.ok(ids);
  }
}
