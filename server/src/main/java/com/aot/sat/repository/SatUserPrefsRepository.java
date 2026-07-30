package com.aot.sat.repository;

import com.aot.sat.entity.SatUserPrefs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SatUserPrefsRepository extends JpaRepository<SatUserPrefs, Long> {}
