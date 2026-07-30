package com.aot.repository;

import com.aot.entity.CardProgress;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardProgressRepository extends JpaRepository<CardProgress, Long> {

  List<CardProgress> findByUserIdAndSubjectId(Long userId, Long subjectId);

  Optional<CardProgress> findByUserIdAndCardKey(Long userId, String cardKey);

  void deleteByUserIdAndSubjectId(Long userId, Long subjectId);
}
