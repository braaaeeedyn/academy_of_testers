package com.aot.repository;

import com.aot.entity.Flashcard;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlashcardRepository extends JpaRepository<Flashcard, Long> {

  List<Flashcard> findByUserIdAndSubjectIdOrderByCreatedAtDesc(Long userId, Long subjectId);

  /** Scoped by userId so a card can never be read or mutated across accounts. */
  Optional<Flashcard> findByIdAndUserId(Long id, Long userId);

  long countByUserId(Long userId);
}
