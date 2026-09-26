package com.aot.rag.engine;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Pure vector similarity helpers for retrieval. No Spring, no I/O, no clock — candidate embeddings
 * and the query embedding are passed in, ranked scores come out. This is the only place the RAG
 * layer does model-adjacent math, and keeping it pure is what lets a future swap to pgvector (which
 * would move ranking into SQL) be a repository-layer change rather than a rewrite.
 */
public final class VectorMath {

  private VectorMath() {}

  /** One candidate's identity plus its embedding. */
  public record Candidate(long id, float[] embedding) {}

  /** A candidate id and its cosine similarity to the query, sorted descending by score. */
  public record Scored(long id, double score) {}

  /**
   * Cosine similarity in [-1, 1]. Returns 0 when either vector is zero-length or the dimensions do
   * not match, so a mis-embedded row is simply never retrieved rather than throwing.
   */
  public static double cosine(float[] a, float[] b) {
    if (a == null || b == null || a.length == 0 || a.length != b.length) {
      return 0.0;
    }
    double dot = 0.0;
    double normA = 0.0;
    double normB = 0.0;
    for (int i = 0; i < a.length; i++) {
      dot += (double) a[i] * b[i];
      normA += (double) a[i] * a[i];
      normB += (double) b[i] * b[i];
    }
    if (normA == 0.0 || normB == 0.0) {
      return 0.0;
    }
    return dot / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  /**
   * Ranks candidates by cosine similarity to {@code query} and returns the top {@code k}, highest
   * first. A non-positive {@code k} yields an empty list.
   */
  public static List<Scored> topK(float[] query, List<Candidate> candidates, int k) {
    List<Scored> scored = new ArrayList<>(candidates.size());
    for (Candidate c : candidates) {
      scored.add(new Scored(c.id(), cosine(query, c.embedding())));
    }
    if (k <= 0) {
      return new ArrayList<>();
    }
    scored.sort(Comparator.comparingDouble(Scored::score).reversed());
    int limit = Math.min(k, scored.size());
    return new ArrayList<>(scored.subList(0, limit));
  }
}
