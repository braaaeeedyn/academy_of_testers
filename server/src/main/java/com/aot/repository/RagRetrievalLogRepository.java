package com.aot.repository;

import com.aot.entity.RagRetrievalLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RagRetrievalLogRepository extends JpaRepository<RagRetrievalLog, Long> {}
