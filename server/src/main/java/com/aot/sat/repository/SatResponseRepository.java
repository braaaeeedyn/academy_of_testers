package com.aot.sat.repository;

import com.aot.sat.entity.SatResponse;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SatResponseRepository extends JpaRepository<SatResponse, Long> {

  boolean existsBySessionIdAndQuestionId(Long sessionId, String questionId);

  @Query(
      "select r.questionId from SatResponse r where r.userId = :userId "
          + "order by r.answeredAt desc")
  List<String> recentQuestionIds(@Param("userId") Long userId, Pageable pageable);

  @Query("select r.answeredAt from SatResponse r where r.userId = :userId")
  List<LocalDateTime> answeredTimes(@Param("userId") Long userId);
}
