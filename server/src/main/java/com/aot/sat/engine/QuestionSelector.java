package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.ALPHA;
import static com.aot.sat.engine.AdaptiveConstants.BETA;
import static com.aot.sat.engine.AdaptiveConstants.GAMMA;
import static com.aot.sat.engine.AdaptiveConstants.MASTERY_THRESHOLD;
import static com.aot.sat.engine.AdaptiveConstants.SEEN_HALF_LIFE_DAYS;
import static com.aot.sat.engine.AdaptiveConstants.TAU;
import static com.aot.sat.engine.AdaptiveConstants.TOP_K;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Random;

/**
 * IRT-driven question selection (§4.4). Scores every candidate against the current weight vector by
 * jointly optimizing skill gap and item information, then samples from the top-K by a
 * low-temperature softmax so identical vectors don't always yield identical questions. Pure: the
 * RNG is passed in.
 */
public final class QuestionSelector {

  private QuestionSelector() {}

  /** A candidate question stripped to what selection needs. */
  public record Candidate(
      String questionId, String skillId, double a, double b, double c, double daysSinceSeen) {}

  public record Scored(Candidate candidate, double score) {}

  private static double gap(double weight) {
    return Math.max(0.0, MASTERY_THRESHOLD - weight) / MASTERY_THRESHOLD;
  }

  private static double seenPenalty(double daysSinceSeen) {
    if (daysSinceSeen < 0) return 0.0; // never seen
    return Math.exp(-daysSinceSeen / SEEN_HALF_LIFE_DAYS);
  }

  /**
   * Scores all candidates. {@code weights} maps skill id -> current (decayed) weight. Returns
   * candidates with their composite scores, information normalized by the pool maximum.
   */
  public static List<Scored> score(List<Candidate> candidates, Map<String, Double> weights) {
    double iMax = 0.0;
    double[] info = new double[candidates.size()];
    for (int i = 0; i < candidates.size(); i++) {
      Candidate q = candidates.get(i);
      double w = weights.getOrDefault(q.skillId(), 0.5);
      double theta = ItemResponseTheory.theta(w);
      info[i] = ItemResponseTheory.information(theta, q.a(), q.b(), q.c());
      if (info[i] > iMax) iMax = info[i];
    }
    java.util.ArrayList<Scored> scored = new java.util.ArrayList<>(candidates.size());
    for (int i = 0; i < candidates.size(); i++) {
      Candidate q = candidates.get(i);
      double w = weights.getOrDefault(q.skillId(), 0.5);
      double normInfo = iMax > 0 ? info[i] / iMax : 0.0;
      double s = ALPHA * gap(w) + BETA * normInfo - GAMMA * seenPenalty(q.daysSinceSeen());
      scored.add(new Scored(q, s));
    }
    return scored;
  }

  /**
   * Selects one question: top-K by score, then softmax sampling with temperature TAU. Returns null
   * if there are no candidates.
   */
  public static Candidate select(
      List<Candidate> candidates, Map<String, Double> weights, Random rng) {
    if (candidates.isEmpty()) return null;
    List<Scored> scored = score(candidates, weights);
    scored.sort(Comparator.comparingDouble(Scored::score).reversed());
    int k = Math.min(TOP_K, scored.size());

    double[] probs = new double[k];
    double sum = 0.0;
    double best = scored.get(0).score();
    for (int i = 0; i < k; i++) {
      probs[i] = Math.exp((scored.get(i).score() - best) / TAU); // shift for stability
      sum += probs[i];
    }
    double r = rng.nextDouble() * sum;
    double acc = 0.0;
    for (int i = 0; i < k; i++) {
      acc += probs[i];
      if (r <= acc) return scored.get(i).candidate();
    }
    return scored.get(0).candidate();
  }
}
