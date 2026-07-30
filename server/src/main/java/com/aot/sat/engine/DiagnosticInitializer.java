package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.INIT_CLAMP_HI;
import static com.aot.sat.engine.AdaptiveConstants.INIT_CLAMP_LO;
import static com.aot.sat.engine.AdaptiveConstants.INIT_M;
import static com.aot.sat.engine.AdaptiveConstants.INIT_N;
import static com.aot.sat.engine.AdaptiveConstants.INIT_PRIOR;
import static com.aot.sat.engine.AdaptiveConstants.clamp;

/** Turns a per-skill diagnostic score into an initial mastery weight (§4.7). */
public final class DiagnosticInitializer {

  private DiagnosticInitializer() {}

  /**
   * Difficulty-weighted score to initial weight, blended toward a prior so one lucky guess can't
   * peg a student at mastery.
   *
   * @param easyCorrect whether the easy item was answered correctly
   * @param mediumCorrect whether the medium item was answered correctly
   * @param hardCorrect whether the hard item was answered correctly
   */
  public static double initialWeight(
      boolean easyCorrect, boolean mediumCorrect, boolean hardCorrect) {
    int earned = (easyCorrect ? 1 : 0) + (mediumCorrect ? 2 : 0) + (hardCorrect ? 3 : 0); // 0..6
    double raw = earned / 6.0;
    double w0 = (raw * INIT_N + INIT_PRIOR * INIT_M) / (INIT_N + INIT_M);
    return clamp(w0, INIT_CLAMP_LO, INIT_CLAMP_HI);
  }
}
