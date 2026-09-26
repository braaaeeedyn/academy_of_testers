package com.aot.service;

import com.aot.entity.RagChunk;
import com.aot.entity.RagRetrievalLog;
import com.aot.rag.engine.VectorMath;
import com.aot.repository.RagChunkRepository;
import com.aot.repository.RagRetrievalLogRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * The retrieval half of the RAG layer: embed a query, pre-filter candidates by metadata, cosine-rank
 * them via {@link VectorMath}, log the hits, and hand back the top chunks for a prompt to cite.
 *
 * <p>Retrieval degrades gracefully. If no key is configured, or no chunks have been ingested for the
 * requested subject/skill, it returns an empty list — the calling service then behaves exactly as it
 * did before RAG existed, so grading and chat never break just because the corpus is empty.
 */
@Service
public class RagRetrievalService {

  private static final Logger logger = LoggerFactory.getLogger(RagRetrievalService.class);

  private final RagChunkRepository chunkRepository;
  private final RagRetrievalLogRepository logRepository;
  private final EmbeddingService embeddingService;
  private final ObjectMapper objectMapper;

  public RagRetrievalService(
      RagChunkRepository chunkRepository,
      RagRetrievalLogRepository logRepository,
      EmbeddingService embeddingService,
      ObjectMapper objectMapper) {
    this.chunkRepository = chunkRepository;
    this.logRepository = logRepository;
    this.embeddingService = embeddingService;
    this.objectMapper = objectMapper;
  }

  /** A chunk selected by retrieval, with its similarity score, ready to inject into a prompt. */
  public record RetrievedChunk(
      String refId,
      String title,
      String content,
      String dimension,
      String scoreBand,
      String skillId,
      double score) {}

  /**
   * Subjects that borrow another subject's grounding corpus. AP Computer Science Principles has no
   * usable released materials, so it retrieves against AP Computer Science A. Add more entries here
   * if other subjects should share a corpus.
   */
  private static final Map<String, String> SUBJECT_CORPUS_ALIAS =
      Map.of("AP Computer Science Principles", "AP Computer Science A");

  /** Rubric + exemplar chunks to ground an essay grade against, most similar first. */
  public List<RetrievedChunk> retrieveForGrader(
      Long userId, String subject, String promptId, String queryText, int k) {
    String corpusSubject = SUBJECT_CORPUS_ALIAS.getOrDefault(subject, subject);
    List<RagChunk> rubric =
        chunkRepository.findGraderCandidates(RagChunk.CORPUS_AP_RUBRIC, corpusSubject, promptId);
    List<RagChunk> exemplars =
        chunkRepository.findGraderCandidates(RagChunk.CORPUS_AP_EXEMPLAR, corpusSubject, promptId);

    List<RagChunk> pool = new ArrayList<>(rubric.size() + exemplars.size());
    pool.addAll(rubric);
    pool.addAll(exemplars);

    List<RetrievedChunk> hits = rank(pool, queryText, k);
    logRetrieval(
        userId, RagRetrievalLog.KIND_FRQ_GRADE, RagChunk.CORPUS_AP_RUBRIC, subject, promptId, null,
        hits);
    return hits;
  }

  /** Curriculum chunks to ground a chat answer against. Falls back to subject-wide if no skills. */
  public List<RetrievedChunk> retrieveForChat(
      Long userId, String subject, List<String> skillIds, String queryText, int k) {
    List<RagChunk> pool;
    String loggedSkill = null;
    if (skillIds != null && !skillIds.isEmpty()) {
      pool =
          chunkRepository.findCurriculumCandidatesBySkills(RagChunk.CORPUS_CURRICULUM, skillIds);
      loggedSkill = String.join(",", skillIds);
    } else {
      pool = chunkRepository.findCurriculumCandidates(RagChunk.CORPUS_CURRICULUM, subject);
    }

    List<RetrievedChunk> hits = rank(pool, queryText, k);
    logRetrieval(
        userId, RagRetrievalLog.KIND_CHAT, RagChunk.CORPUS_CURRICULUM, subject, null, loggedSkill,
        hits);
    return hits;
  }

  private List<RetrievedChunk> rank(List<RagChunk> pool, String queryText, int k) {
    if (pool.isEmpty() || queryText == null || queryText.isBlank()) {
      return List.of();
    }
    if (!embeddingService.isConfigured()) {
      return List.of();
    }

    float[] queryVec;
    try {
      queryVec = embeddingService.embed(queryText);
    } catch (Exception e) {
      logger.warn("Query embedding failed; skipping retrieval", e);
      return List.of();
    }

    Map<Long, RagChunk> byId = new HashMap<>();
    List<VectorMath.Candidate> candidates = new ArrayList<>(pool.size());
    for (RagChunk c : pool) {
      float[] vec = embeddingService.deserialize(c.getEmbedding());
      if (vec == null) {
        continue;
      }
      byId.put(c.getId(), c);
      candidates.add(new VectorMath.Candidate(c.getId(), vec));
    }

    List<VectorMath.Scored> ranked = VectorMath.topK(queryVec, candidates, k);
    List<RetrievedChunk> out = new ArrayList<>(ranked.size());
    for (VectorMath.Scored s : ranked) {
      RagChunk c = byId.get(s.id());
      out.add(
          new RetrievedChunk(
              c.getRefId(),
              c.getTitle(),
              c.getContent(),
              c.getDimension(),
              c.getScoreBand(),
              c.getSkillId(),
              s.score()));
    }
    return out;
  }

  /** Best-effort logging for the weekly retrieval-quality spot-check; never fails the call. */
  private void logRetrieval(
      Long userId,
      String callKind,
      String corpus,
      String subject,
      String promptId,
      String skillId,
      List<RetrievedChunk> hits) {
    if (hits.isEmpty()) {
      return;
    }
    try {
      List<Map<String, Object>> hitSummary = new ArrayList<>(hits.size());
      for (RetrievedChunk h : hits) {
        Map<String, Object> m = new HashMap<>();
        m.put("refId", h.refId());
        m.put("score", Math.round(h.score() * 10000.0) / 10000.0);
        hitSummary.add(m);
      }
      RagRetrievalLog log = new RagRetrievalLog();
      log.setUserId(userId);
      log.setCallKind(callKind);
      log.setCorpus(corpus);
      log.setSubject(subject);
      log.setPromptId(promptId);
      log.setSkillId(skillId);
      log.setHits(objectMapper.writeValueAsString(hitSummary));
      log.setHitCount(hits.size());
      logRepository.save(log);
    } catch (Exception e) {
      logger.warn("Failed to write retrieval log", e);
    }
  }
}
