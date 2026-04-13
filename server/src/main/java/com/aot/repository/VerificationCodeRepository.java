package com.aot.repository;

import com.aot.entity.VerificationCode;
import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long> {

  Optional<VerificationCode> findTopByUserIdAndTypeAndUsedFalseOrderByCreatedAtDesc(
      Long userId, String type);

  long countByUserIdAndCreatedAtAfter(Long userId, LocalDateTime after);
}
