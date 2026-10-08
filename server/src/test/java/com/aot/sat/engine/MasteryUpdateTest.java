package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.P_GUESS_GRID;
import static com.aot.sat.engine.AdaptiveConstants.P_GUESS_MC;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_HI;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class MasteryUpdateTest {

  private static final double EPS = 1e-6;
  private static final double STEP = 0.001;

  /** WEIGHT_LO..WEIGHT_HI inclusive in the given step, indexed so float drift can't overshoot. */
  private static double[] sweep(double step) {
    int n = (int) Math.round((WEIGHT_HI - WEIGHT_LO) / step);
    double[] out = new double[n + 1];
    for (int i = 0; i <= n; i++) {
      out[i] = Math.min(WEIGHT_LO + i * step, WEIGHT_HI);
    }
    return out;
  }

  @Test
  void aMissNeverRaisesTheWeightAnywhereInRange() {
    for (double pGuess : new double[] {P_GUESS_MC, P_GUESS_GRID}) {
      for (double w : sweep(STEP)) {
        double after = MasteryUpdate.applyAnswer(w, false, pGuess);
        assertTrue(after <= w, "miss raised w=" + w + " to " + after + " (pGuess=" + pGuess + ")");
      }
    }
  }

  @Test
  void aCorrectAnswerNeverLowersTheWeight() {
    for (double pGuess : new double[] {P_GUESS_MC, P_GUESS_GRID}) {
      for (double w : sweep(STEP)) {
        double after = MasteryUpdate.applyAnswer(w, true, pGuess);
        assertTrue(
            after >= w, "correct lowered w=" + w + " to " + after + " (pGuess=" + pGuess + ")");
      }
    }
  }

  @Test
  void aMissNeverRaisesAPrerequisite() {
    for (double sigma : new double[] {0.25, 0.5, 1.0}) {
      for (double w : sweep(0.01)) {
        double delta = w - MasteryUpdate.applyAnswer(w, false, P_GUESS_MC);
        for (double p : sweep(0.01)) {
          double after = PrerequisitePropagator.penalize(p, delta, sigma);
          assertTrue(after <= p, "miss at w=" + w + " raised prerequisite p=" + p + " to " + after);
        }
      }
    }
  }

  @Test
  void repeatedMissesNeverClimb() {
    for (double start : new double[] {0.05, 0.5}) {
      double w = start;
      for (int i = 0; i < 50; i++) {
        double next = MasteryUpdate.applyAnswer(w, false, P_GUESS_MC);
        assertTrue(
            next <= w, "miss " + i + " from start " + start + " climbed " + w + " -> " + next);
        w = next;
      }
    }
  }

  @Test
  void matchesTheDampedHandComputedValues() {
    // miss: BKT 0.205882, capped below 0.5, half the drop applied
    assertEquals(0.352941, MasteryUpdate.applyAnswer(0.5, false, P_GUESS_MC), EPS);
    // correct: BKT 0.804348, a quarter of the gain applied
    assertEquals(0.576087, MasteryUpdate.applyAnswer(0.5, true, P_GUESS_MC), EPS);
  }

  @Test
  void aDiagnosticMissNeverScoresHigherThanTheSameItemCorrect() {
    // For every combination of the three diagnostic items, flipping any one item from wrong to
    // right never lowers the initial weight.
    for (int mask = 0; mask < 8; mask++) {
      boolean[] items = {(mask & 1) != 0, (mask & 2) != 0, (mask & 4) != 0};
      for (int i = 0; i < 3; i++) {
        boolean[] wrong = items.clone();
        boolean[] right = items.clone();
        wrong[i] = false;
        right[i] = true;
        assertTrue(
            DiagnosticInitializer.initialWeight(wrong[0], wrong[1], wrong[2])
                <= DiagnosticInitializer.initialWeight(right[0], right[1], right[2]),
            "item " + i + " wrong outscored right for mask " + mask);
      }
    }
  }
}
