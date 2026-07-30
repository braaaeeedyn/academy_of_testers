package com.aot.sat.repository;

import com.aot.sat.entity.SatQuestion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SatQuestionRepository extends JpaRepository<SatQuestion, String> {

  List<SatQuestion> findByDiagnosticTrue();

  List<SatQuestion> findByActiveTrue();

  @Modifying
  @Query(
      "update SatQuestion q set q.attempts = q.attempts + 1, "
          + "q.correctCount = q.correctCount + :inc where q.id = :id")
  void recordAttempt(@Param("id") String id, @Param("inc") int inc);
}
