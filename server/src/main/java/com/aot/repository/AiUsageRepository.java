package com.aot.repository;

import com.aot.entity.AiUsage;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AiUsageRepository extends JpaRepository<AiUsage, Long> {

  Optional<AiUsage> findByUserId(Long userId);
}
