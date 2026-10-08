package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.INIT_CLAMP_HI;
import static com.aot.sat.engine.AdaptiveConstants.INIT_CLAMP_LO;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Map;
import org.junit.jupiter.api.Test;

class DiagnosticAndPropagationTest {

  private static final double EPS = 1e-9;

  // --- DiagnosticInitializer ---

  @Test
  void allWrongBlendsTowardThePrior() {
    // (0 * 3 + 0.40 * 1.5) / 4.5
    assertEquals(0.6 / 4.5, DiagnosticInitializer.initialWeight(false, false, false), EPS);
  }

  @Test
  void allRightStopsShortOfMastery() {
    // (1 * 3 + 0.40 * 1.5) / 4.5 = 0.8: one diagnostic can't peg a student as mastered.
    assertEquals(0.8, DiagnosticInitializer.initialWeight(true, true, true), EPS);
  }

  @Test
  void harderItemsCountForMore() {
    assertTrue(
        DiagnosticInitializer.initialWeight(false, false, true)
            > DiagnosticInitializer.initialWeight(true, false, false));
  }

  @Test
  void everyOutcomeIsWithinTheInitClamp() {
    for (int mask = 0; mask < 8; mask++) {
      double w =
          DiagnosticInitializer.initialWeight((mask & 1) != 0, (mask & 2) != 0, (mask & 4) != 0);
      assertTrue(w >= INIT_CLAMP_LO && w <= INIT_CLAMP_HI, "mask " + mask);
    }
  }

  // --- PrerequisitePropagator ---

  @Test
  void penaltyScalesWithDropAndEdgeStrength() {
    // 0.6 - 0.35 * 1.0 * 0.2
    assertEquals(0.53, PrerequisitePropagator.penalize(0.6, 0.2, 1.0), EPS);
    // half-strength edge takes half the penalty
    assertEquals(0.565, PrerequisitePropagator.penalize(0.6, 0.2, 0.5), EPS);
  }

  @Test
  void aNegativeDropNeverRaisesAPrerequisite() {
    assertEquals(0.6, PrerequisitePropagator.penalize(0.6, -0.05, 1.0), EPS);
  }

  @Test
  void penaltyIsClampedAtTheWeightFloor() {
    assertEquals(WEIGHT_LO, PrerequisitePropagator.penalize(0.02, 0.9, 1.0), EPS);
  }

  @Test
  void noDropMeansNoPropagation() {
    Map<String, Double> weights = Map.of("algebra-equations", 0.7);
    assertEquals(weights, PrerequisitePropagator.penalizeAll(weights, Map.of(), 0.0));
    assertEquals(weights, PrerequisitePropagator.penalizeAll(weights, Map.of(), -0.1));
  }

  @Test
  void missingEdgeStrengthDefaultsToFull() {
    Map<String, Double> out =
        PrerequisitePropagator.penalizeAll(Map.of("linear-functions", 0.6), Map.of(), 0.2);
    assertEquals(0.53, out.get("linear-functions"), EPS);
  }
}
