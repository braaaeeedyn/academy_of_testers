package com.aot.sat.engine;

/**
 * Every tunable number in the adaptive engine, and nothing else. See SAT_ADAPTIVE_ENGINE.md §4 for
 * the derivation of each value. Nothing elsewhere hardcodes these inline.
 */
public final class AdaptiveConstants {

  private AdaptiveConstants() {}

  // --- BKT (§4.1) ---
  public static final double P_TRANSIT = 0.10;
  public static final double P_SLIP = 0.10;
  public static final double P_GUESS_MC = 0.25;
  public static final double P_GUESS_GRID = 0.02; // reserved for Phase 6 fill-in items

  /**
   * Fraction of each BKT step actually applied per answer, so mastery rises and falls more
   * gradually. Gains are damped harder than losses so mastery is easier to lose than to earn:
   * a wrong answer drops mastery faster than a right answer raises it.
   */
  public static final double MASTERY_GAIN_RATE = 0.25; // upward step (right answer)
  public static final double MASTERY_LOSS_RATE = 0.5; // downward step (wrong answer)

  // --- Prerequisite propagation (§4.2) ---
  public static final double KAPPA = 0.35;

  // --- Forgetting curve (§4.3) ---
  public static final double FLOOR = 0.20;
  public static final double LAMBDA = 0.0112; // per day

  // --- IRT selection (§4.4) ---
  public static final double MASTERY_THRESHOLD = 0.85;
  public static final double ALPHA = 0.45; // skill-gap weight
  public static final double BETA = 0.40; // information weight
  public static final double GAMMA = 0.15; // recency penalty weight
  public static final double TAU = 0.15; // softmax temperature for top-k sampling
  public static final int TOP_K = 5;
  public static final int RECENT_EXCLUSION = 30;
  public static final double SEEN_HALF_LIFE_DAYS = 7.0;

  // Default IRT item parameters (v1: a and c fixed, b seeded from difficulty).
  public static final double IRT_A = 1.0;
  public static final double IRT_C_MC = 0.25;
  public static final double IRT_C_GRID = 0.02;

  // --- Diagnostic weight initialization (§4.7) ---
  public static final double INIT_N = 3.0; // real observations
  public static final double INIT_M = 1.5; // pseudo-observations
  public static final double INIT_PRIOR = 0.40;
  public static final double INIT_CLAMP_LO = 0.10;
  public static final double INIT_CLAMP_HI = 0.85;

  // --- General weight bounds ---
  public static final double WEIGHT_LO = 0.01;
  public static final double WEIGHT_HI = 0.99;
  public static final double THETA_CLAMP_LO = 0.02;
  public static final double THETA_CLAMP_HI = 0.98;

  // --- Session ---
  public static final int DEFAULT_SESSION_LENGTH = 10;
  public static final int DIAGNOSTIC_LENGTH = 24; // 8 skills x 3 difficulties

  public static double clamp(double v, double lo, double hi) {
    return v < lo ? lo : (v > hi ? hi : v);
  }
}
