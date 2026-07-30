package com.aot.sat.repository;

import com.aot.sat.entity.SatSession;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatSessionRepository extends JpaRepository<SatSession, Long> {

  Optional<SatSession> findByUserIdAndCompletedAtIsNull(Long userId);

  Optional<SatSession> findByIdAndUserId(Long id, Long userId);
}
