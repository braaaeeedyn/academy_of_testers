package com.aot.service;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Supplier;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;

/**
 * In-memory caches that keep retrieval off the hot path of a chat turn.
 *
 * <ul>
 *   <li><b>Candidate pools</b> — the parsed embeddings for a corpus/subject (or skill set). Without
 *       this, every question re-reads every chunk from Postgres and JSON-parses a 1536-float vector
 *       per row. Students ask several questions in a row about the same subject, so the second and
 *       later turns rank against an already-parsed pool. Invalidated on ingest, with a TTL as a
 *       backstop for anything written outside this instance.
 *   <li><b>Query embeddings</b> — a small LRU keyed by normalized query text, so a repeated or
 *       retried question skips the embeddings round-trip.
 * </ul>
 *
 * <p>The corpus is ~2k chunks, so caching every pool costs a few tens of MB at most.
 */
@Component
public class RagCorpusCache {

  private static final long POOL_TTL_MS = 15 * 60 * 1000L;
  private static final int MAX_QUERY_EMBEDDINGS = 1000;

  /** A chunk's retrieval-relevant fields plus its parsed vector — no raw embedding JSON. */
  public record CachedChunk(
      long id,
      String refId,
      String title,
      String content,
      String dimension,
      String scoreBand,
      String skillId,
      float[] embedding) {}

  private record Pool(List<CachedChunk> chunks, long loadedAt) {}

  private final Map<String, Pool> pools = new ConcurrentHashMap<>();

  private final Map<String, float[]> queryEmbeddings =
      Collections.synchronizedMap(
          new LinkedHashMap<>(256, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, float[]> eldest) {
              return size() > MAX_QUERY_EMBEDDINGS;
            }
          });

  /** Returns the cached pool for {@code key}, loading it if absent or expired. */
  public List<CachedChunk> pool(String key, Supplier<List<CachedChunk>> loader) {
    long now = System.currentTimeMillis();
    Pool cached = pools.get(key);
    if (cached != null && now - cached.loadedAt() < POOL_TTL_MS) {
      return cached.chunks();
    }
    List<CachedChunk> loaded = List.copyOf(loader.get());
    pools.put(key, new Pool(loaded, now));
    return loaded;
  }

  /** Returns the embedding for {@code text}, calling {@code embedder} only on a cache miss. */
  public float[] queryEmbedding(String text, Function<String, float[]> embedder) {
    String key = text.trim().toLowerCase().replaceAll("\\s+", " ");
    float[] hit = queryEmbeddings.get(key);
    if (hit != null) {
      return hit;
    }
    float[] vec = embedder.apply(text);
    queryEmbeddings.put(key, vec);
    return vec;
  }

  /**
   * Drops every cached pool. Inside a transaction this waits for commit, so a concurrent request
   * can't reload the pre-ingest rows and re-cache them.
   */
  public void invalidatePools() {
    if (TransactionSynchronizationManager.isSynchronizationActive()) {
      TransactionSynchronizationManager.registerSynchronization(
          new TransactionSynchronization() {
            @Override
            public void afterCommit() {
              pools.clear();
            }
          });
    } else {
      pools.clear();
    }
  }
}
