package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.KAPPA;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_HI;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static com.aot.sat.engine.AdaptiveConstants.clamp;

import java.util.Map;

/**
 * Propagates a portion of an incorrect-answer drop backward to prerequisite skills (§4.2). Depth 1
 * only — no recursion. Correct answers do not propagate.
 */
public final class PrerequisitePropagator {

  private PrerequisitePropagator() {}

  /**
   * Returns the new weight for a single prerequisite after the penalty.
   *
   * @param prereqWeight the prerequisite's decayed current weight
   * @param delta the drop (w_before - w_after) on the answered skill, always >= 0
   * @param edgeStrength sigma_p in (0,1], from sat_skill_prerequisites
   */
  public static double penalize(double prereqWeight, double delta, double edgeStrength) {
    double penalized = prereqWeight - KAPPA * edgeStrength * delta;
    return clamp(penalized, WEIGHT_LO, WEIGHT_HI);
  }

  /**
   * Applies the penalty across every direct prerequisite in the given edge map and returns a new
   * map of prerequisite skill id -> penalized weight.
   *
   * @param prereqWeights decayed current weight per direct prerequisite skill id
   * @param edgeStrengths sigma_p per direct prerequisite skill id
   * @param delta the drop on the answered skill (>= 0); a non-positive delta is a no-op
   */
  public static Map<String, Double> penalizeAll(
      Map<String, Double> prereqWeights, Map<String, Double> edgeStrengths, double delta) {
    Map<String, Double> out = new java.util.HashMap<>();
    if (delta <= 0) {
      out.putAll(prereqWeights);
      return out;
    }
    for (var e : prereqWeights.entrySet()) {
      double sigma = edgeStrengths.getOrDefault(e.getKey(), 1.0);
      out.put(e.getKey(), penalize(e.getValue(), delta, sigma));
    }
    return out;
  }
}
