package com.aot.sat.repository;

import com.aot.sat.entity.SatSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatSkillRepository extends JpaRepository<SatSkill, String> {}
