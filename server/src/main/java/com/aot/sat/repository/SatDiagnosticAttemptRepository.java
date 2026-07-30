package com.aot.sat.repository;

import com.aot.sat.entity.SatDiagnosticAttempt;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatDiagnosticAttemptRepository extends JpaRepository<SatDiagnosticAttempt, Long> {

  Optional<SatDiagnosticAttempt> findByUserId(Long userId);
}
