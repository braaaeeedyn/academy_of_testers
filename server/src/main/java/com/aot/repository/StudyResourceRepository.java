package com.aot.repository;

import com.aot.entity.StudyResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyResourceRepository extends JpaRepository<StudyResource, Long> {

  Page<StudyResource> findBySubjectId(Long subjectId, Pageable pageable);

  @Query(
      "SELECT r FROM StudyResource r WHERE "
          + "(:subjectId IS NULL OR r.subject.id = :subjectId) AND "
          + "(:query IS NULL OR :query = '' OR LOWER(CAST(r.title AS string)) LIKE LOWER(CONCAT('%', :query, '%')) OR LOWER(CAST(r.description AS string)) LIKE LOWER(CONCAT('%', :query, '%')))")
  Page<StudyResource> searchResources(
      @Param("subjectId") Long subjectId, @Param("query") String query, Pageable pageable);
}
