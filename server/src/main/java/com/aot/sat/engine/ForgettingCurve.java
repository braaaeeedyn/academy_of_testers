package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.FLOOR;
import static com.aot.sat.engine.AdaptiveConstants.LAMBDA;

/**
 * Exponential forgetting toward a floor (§4.3). Applied lazily on read: a stored weight and its
 * last-updated timestamp are decayed to "now" whenever read.
 */
public final class ForgettingCurve {

  private ForgettingCurve() {}

  /**
   * Decays a stored weight forward by the elapsed time.
   *
   * @param w stored weight
   * @param elapsedDays days since the weight was last written (>= 0)
   */
  public static double decay(double w, double elapsedDays) {
    if (elapsedDays <= 0) return w;
    double decayed = FLOOR + (w - FLOOR) * Math.exp(-LAMBDA * elapsedDays);
    // Forgetting must never raise mastery: a weight already below the floor would otherwise
    // drift *up* toward it over time. Decay can only pull a weight down (or hold it).
    return Math.min(w, decayed);
  }
}
