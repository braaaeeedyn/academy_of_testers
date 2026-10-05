package com.aot.service;

import com.aot.dto.RagChunkRequest;
import com.aot.entity.RagChunk;
import com.aot.repository.RagChunkRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * The ingest half of the RAG layer: upsert chunks (by corpus + refId), embed their content, and
 * store the vector. Embedding happens in batches at ingest time so query-time retrieval only ever
 * embeds the query. Re-ingesting a refId overwrites its content and re-embeds it.
 */
@Service
public class RagIngestionService {

  private static final Logger logger = LoggerFactory.getLogger(RagIngestionService.class);

  // Roughly 4 chars per token — a cheap estimate for the token_estimate column, not a tokenizer.
  private static final int CHARS_PER_TOKEN = 4;

  private final RagChunkRepository chunkRepository;
  private final EmbeddingService embeddingService;
  private final RagCorpusCache cache;

  public RagIngestionService(
      RagChunkRepository chunkRepository, EmbeddingService embeddingService, RagCorpusCache cache) {
    this.chunkRepository = chunkRepository;
    this.embeddingService = embeddingService;
    this.cache = cache;
  }

  /** Upserts and embeds a batch. Returns the number of chunks written. */
  @Transactional
  public int ingest(List<RagChunkRequest.Chunk> incoming) {
    if (!embeddingService.isConfigured()) {
      throw new IllegalStateException("OpenAI API key not configured — cannot embed chunks");
    }

    List<RagChunk> toSave = new ArrayList<>(incoming.size());
    List<String> texts = new ArrayList<>(incoming.size());

    for (RagChunkRequest.Chunk c : incoming) {
      RagChunk entity =
          chunkRepository
              .findByCorpusAndRefId(c.getCorpus(), c.getRefId())
              .orElseGet(RagChunk::new);
      entity.setCorpus(c.getCorpus());
      entity.setRefId(c.getRefId());
      entity.setSubject(c.getSubject());
      entity.setPromptId(c.getPromptId());
      entity.setSkillId(c.getSkillId());
      entity.setDimension(c.getDimension());
      entity.setScoreBand(c.getScoreBand());
      entity.setTitle(c.getTitle());
      entity.setContent(c.getContent());
      entity.setTokenEstimate(c.getContent().length() / CHARS_PER_TOKEN);
      entity.setActive(true);
      toSave.add(entity);
      texts.add(c.getContent());
    }

    List<float[]> vectors = embeddingService.embedBatch(texts);
    for (int i = 0; i < toSave.size(); i++) {
      RagChunk entity = toSave.get(i);
      float[] vec = vectors.get(i);
      entity.setEmbedding(embeddingService.serialize(vec));
      entity.setEmbeddingModel(embeddingService.getModel());
      entity.setEmbeddingDims(vec.length);
    }

    chunkRepository.saveAll(toSave);
    cache.invalidatePools();
    logger.info("Ingested {} RAG chunks", toSave.size());
    return toSave.size();
  }

  /** Backfills embeddings for any chunk missing one (e.g. after a model change). */
  @Transactional
  public int embedMissing() {
    if (!embeddingService.isConfigured()) {
      throw new IllegalStateException("OpenAI API key not configured — cannot embed chunks");
    }
    List<RagChunk> missing = chunkRepository.findByEmbeddingIsNull();
    if (missing.isEmpty()) {
      return 0;
    }
    List<String> texts = new ArrayList<>(missing.size());
    for (RagChunk c : missing) {
      texts.add(c.getContent());
    }
    List<float[]> vectors = embeddingService.embedBatch(texts);
    for (int i = 0; i < missing.size(); i++) {
      RagChunk c = missing.get(i);
      float[] vec = vectors.get(i);
      c.setEmbedding(embeddingService.serialize(vec));
      c.setEmbeddingModel(embeddingService.getModel());
      c.setEmbeddingDims(vec.length);
    }
    chunkRepository.saveAll(missing);
    cache.invalidatePools();
    return missing.size();
  }

  public long countByCorpus(String corpus) {
    return chunkRepository.findByCorpus(corpus).size();
  }

  public Optional<RagChunk> find(String corpus, String refId) {
    return chunkRepository.findByCorpusAndRefId(corpus, refId);
  }
}
