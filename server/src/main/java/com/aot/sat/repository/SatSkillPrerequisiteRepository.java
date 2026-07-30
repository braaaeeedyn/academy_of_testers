package com.aot.sat.repository;

import com.aot.sat.entity.SatSkillPrerequisite;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatSkillPrerequisiteRepository
    extends JpaRepository<SatSkillPrerequisite, SatSkillPrerequisite.Key> {

  List<SatSkillPrerequisite> findBySkillId(String skillId);
}
