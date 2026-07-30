package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.P_SLIP;
import static com.aot.sat.engine.AdaptiveConstants.P_TRANSIT;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_HI;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static com.aot.sat.engine.AdaptiveConstants.clamp;

/**
 * Standard four-parameter Bayesian Knowledge Tracing (§4.1). Pure: no clock, no database. The guess
 * floor is an argument, not a constant, so Phase 6 fill-in items can pass a different value without
 * touching this class.
 */
public final class BayesianKnowledgeTracer {

  private BayesianKnowledgeTracer() {}

  /**
   * Folds one observation into the mastery weight and returns the posterior.
   *
   * @param w prior P(L), in (0,1)
   * @param correct whether the answer was correct
   * @param pGuess P(G) for this item's answer format
   */
  public static double update(double w, boolean correct, double pGuess) {
    double posterior;
    if (correct) {
      double num = w * (1 - P_SLIP);
      posterior = num / (num + (1 - w) * pGuess);
    } else {
      double num = w * P_SLIP;
      posterior = num / (num + (1 - w) * (1 - pGuess));
    }
    // learning transition: they may have learned the skill by attempting it
    double learned = posterior + (1 - posterior) * P_TRANSIT;
    return clamp(learned, WEIGHT_LO, WEIGHT_HI);
  }
}
