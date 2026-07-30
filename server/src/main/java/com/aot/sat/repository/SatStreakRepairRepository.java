package com.aot.sat.repository;

import com.aot.sat.entity.SatStreakRepair;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatStreakRepairRepository extends JpaRepository<SatStreakRepair, Long> {

  List<SatStreakRepair> findByUserId(Long userId);

  boolean existsByUserIdAndRepairedDate(Long userId, LocalDate repairedDate);

  long countByUserId(Long userId);
}
