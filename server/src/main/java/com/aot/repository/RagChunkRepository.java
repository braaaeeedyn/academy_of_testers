package com.aot.repository;

import com.aot.entity.RagChunk;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Candidate pre-filtering for retrieval. These queries narrow the corpus by metadata (subject,
 * prompt, skill) so the app only cosine-ranks a small, relevant set — never the whole table. Only
 * embedded, active chunks are returned; a chunk with a NULL embedding is invisible to retrieval.
 */
@Repository
public interface RagChunkRepository extends JpaRepository<RagChunk, Long> {

  Optional<RagChunk> findByCorpusAndRefId(String corpus, String refId);

  List<RagChunk> findByCorpus(String corpus);

  /**
   * Rubric/exemplar candidates for a grading call. Matches the subject and, when {@code promptId} is
   * given, either that prompt's chunks or prompt-agnostic ones (prompt_id IS NULL). Passing a null
   * {@code promptId} widens to every chunk for the subject.
   */
  @Query(
      "SELECT c FROM RagChunk c WHERE c.active = true AND c.embedding IS NOT NULL "
          + "AND c.corpus = :corpus AND c.subject = :subject "
          + "AND (:promptId IS NULL OR c.promptId = :promptId OR c.promptId IS NULL)")
  List<RagChunk> findGraderCandidates(
      @Param("corpus") String corpus,
      @Param("subject") String subject,
      @Param("promptId") String promptId);

  /** Curriculum candidates for a chat call, filtered to a set of skill ids (the student's focus). */
  @Query(
      "SELECT c FROM RagChunk c WHERE c.active = true AND c.embedding IS NOT NULL "
          + "AND c.corpus = :corpus AND c.skillId IN :skillIds")
  List<RagChunk> findCurriculumCandidatesBySkills(
      @Param("corpus") String corpus, @Param("skillIds") List<String> skillIds);

  /** Curriculum candidates for the whole subject, when no skill focus is known. */
  @Query(
      "SELECT c FROM RagChunk c WHERE c.active = true AND c.embedding IS NOT NULL "
          + "AND c.corpus = :corpus AND (:subject IS NULL OR c.subject = :subject)")
  List<RagChunk> findCurriculumCandidates(
      @Param("corpus") String corpus, @Param("subject") String subject);

  List<RagChunk> findByEmbeddingIsNull();
}
