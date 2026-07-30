package com.aot.sat.repository;

import com.aot.sat.entity.SatDiagnosticResponse;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SatDiagnosticResponseRepository
    extends JpaRepository<SatDiagnosticResponse, Long> {

  List<SatDiagnosticResponse> findByAttemptId(Long attemptId);

  boolean existsByAttemptIdAndQuestionId(Long attemptId, String questionId);

  @Query(
      "select r.answeredAt from SatDiagnosticResponse r, SatDiagnosticAttempt a "
          + "where a.id = r.attemptId and a.userId = :userId")
  List<LocalDateTime> answeredTimes(@Param("userId") Long userId);
}
