package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.FLOOR;
import static com.aot.sat.engine.AdaptiveConstants.LAMBDA;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ForgettingCurveTest {

  private static final double EPS = 1e-9;

  @Test
  void noElapsedTimeLeavesTheWeightAlone() {
    assertEquals(0.9, ForgettingCurve.decay(0.9, 0), EPS);
    assertEquals(0.9, ForgettingCurve.decay(0.9, -3), EPS);
  }

  @Test
  void theGapAboveTheFloorHalvesEveryHalfLife() {
    double halfLife = Math.log(2) / LAMBDA;
    assertEquals(FLOOR + (0.9 - FLOOR) / 2, ForgettingCurve.decay(0.9, halfLife), 1e-9);
  }

  @Test
  void decaysTowardTheFloorButNotPastIt() {
    double longAgo = ForgettingCurve.decay(0.9, 100_000);
    assertEquals(FLOOR, longAgo, 1e-6);
    assertTrue(longAgo >= FLOOR);
  }

  @Test
  void neverRaisesAWeightAlreadyBelowTheFloor() {
    assertEquals(0.1, ForgettingCurve.decay(0.1, 30), EPS);
  }

  @Test
  void isMonotonicInElapsedTime() {
    double prev = 0.9;
    for (int days = 1; days <= 365; days++) {
      double next = ForgettingCurve.decay(0.9, days);
      assertTrue(next <= prev);
      prev = next;
    }
  }
}
