package com.aot.sat.repository;

import com.aot.sat.entity.SatSkillWeight;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatSkillWeightRepository extends JpaRepository<SatSkillWeight, Long> {

  List<SatSkillWeight> findByUserId(Long userId);

  Optional<SatSkillWeight> findByUserIdAndSkillId(Long userId, String skillId);
}
