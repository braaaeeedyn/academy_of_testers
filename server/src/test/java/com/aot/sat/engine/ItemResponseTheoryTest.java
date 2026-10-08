package com.aot.sat.engine;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class ItemResponseTheoryTest {

  private static final double EPS = 1e-9;

  @Test
  void evenMasteryIsZeroAbility() {
    assertEquals(0.0, ItemResponseTheory.theta(0.5), EPS);
  }

  @Test
  void extremeWeightsStayFinite() {
    assertTrue(Double.isFinite(ItemResponseTheory.theta(0.0)));
    assertTrue(Double.isFinite(ItemResponseTheory.theta(1.0)));
    assertTrue(ItemResponseTheory.theta(0.0) < ItemResponseTheory.theta(1.0));
  }

  @Test
  void probabilityAtDifficultyIsHalfwayAboveTheGuessFloor() {
    assertEquals(0.625, ItemResponseTheory.probability(1.2, 1.0, 1.2, 0.25), EPS);
  }

  @Test
  void probabilityRunsFromTheGuessFloorToOne() {
    assertEquals(0.25, ItemResponseTheory.probability(-50, 1.0, 0.0, 0.25), 1e-6);
    assertEquals(1.0, ItemResponseTheory.probability(50, 1.0, 0.0, 0.25), 1e-6);
  }

  @Test
  void anItemIsMostInformativeNearTheStudentsAbility() {
    double atAbility = ItemResponseTheory.information(0.0, 1.0, 0.0, 0.25);
    assertTrue(atAbility > ItemResponseTheory.information(0.0, 1.0, 3.0, 0.25));
    assertTrue(atAbility > ItemResponseTheory.information(0.0, 1.0, -3.0, 0.25));
  }

  @Test
  void informationIsNeverNegative() {
    for (double b = -4; b <= 4; b += 0.5) {
      assertTrue(ItemResponseTheory.information(0.3, 1.0, b, 0.25) >= 0);
    }
  }
}
