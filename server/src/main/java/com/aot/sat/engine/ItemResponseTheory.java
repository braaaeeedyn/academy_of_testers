package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.THETA_CLAMP_HI;
import static com.aot.sat.engine.AdaptiveConstants.THETA_CLAMP_LO;
import static com.aot.sat.engine.AdaptiveConstants.clamp;

/** Item Response Theory: ability mapping, the 3PL model, and item information (§4.4). */
public final class ItemResponseTheory {

  private ItemResponseTheory() {}

  /** Maps a mastery weight in (0,1) to ability on the logit scale, clamping to stay finite. */
  public static double theta(double w) {
    double wc = clamp(w, THETA_CLAMP_LO, THETA_CLAMP_HI);
    return Math.log(wc / (1 - wc));
  }

  /** Probability of a correct response under the 3PL model. */
  public static double probability(double theta, double a, double b, double c) {
    return c + (1 - c) / (1 + Math.exp(-a * (theta - b)));
  }

  /** Fisher information the item carries at this ability — how much its answer will tell us. */
  public static double information(double theta, double a, double b, double c) {
    double p = probability(theta, a, b, c);
    if (p <= c || p >= 1.0) return 0.0;
    double num = (p - c) / (1 - c);
    return a * a * num * num * (1 - p) / p;
  }
}
