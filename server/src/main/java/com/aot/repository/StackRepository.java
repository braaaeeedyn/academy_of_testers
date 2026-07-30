package com.aot.repository;

import com.aot.entity.Stack;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StackRepository extends JpaRepository<Stack, Long> {

  @EntityGraph(attributePaths = "cards")
  List<Stack> findByUserIdAndSubjectIdOrderByCreatedAtDesc(Long userId, Long subjectId);

  /** Scoped by userId so a stack can never be read or mutated across accounts. */
  @EntityGraph(attributePaths = "cards")
  Optional<Stack> findByIdAndUserId(Long id, Long userId);

  long countByUserId(Long userId);
}
