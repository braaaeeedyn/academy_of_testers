package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.P_GUESS_MC;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_HI;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class BayesianKnowledgeTracerTest {

  private static final double EPS = 1e-6;

  @Test
  void correctAnswerMatchesHandComputedPosterior() {
    // P(L|correct) = 0.5*0.9 / (0.5*0.9 + 0.5*0.25) = 0.782609, then + (1 - that) * 0.10 transit.
    assertEquals(0.804348, BayesianKnowledgeTracer.update(0.5, true, P_GUESS_MC), EPS);
  }

  @Test
  void wrongAnswerMatchesHandComputedPosterior() {
    // P(L|wrong) = 0.5*0.1 / (0.5*0.1 + 0.5*0.75) = 0.117647, then + (1 - that) * 0.10 transit.
    assertEquals(0.205882, BayesianKnowledgeTracer.update(0.5, false, P_GUESS_MC), EPS);
  }

  @Test
  void correctRaisesAndWrongLowersAboveTheTransitFixedPoint() {
    for (double w = 0.12; w < 0.95; w += 0.01) {
      assertTrue(BayesianKnowledgeTracer.update(w, true, P_GUESS_MC) > w, "correct at " + w);
      assertTrue(BayesianKnowledgeTracer.update(w, false, P_GUESS_MC) < w, "wrong at " + w);
    }
  }

  @Test
  void belowTheFixedPointTheTransitOutweighsAMiss() {
    // Textbook BKT: the learning transition is applied after every answer, so at very low mastery
    // even a miss nets a rise. AdaptiveSessionService caps misses at no change; this pins down why.
    assertTrue(BayesianKnowledgeTracer.update(0.05, false, P_GUESS_MC) > 0.05);
  }

  @Test
  void staysWithinWeightBounds() {
    double w = 0.5;
    for (int i = 0; i < 200; i++) w = BayesianKnowledgeTracer.update(w, true, P_GUESS_MC);
    assertEquals(WEIGHT_HI, w, EPS);
    for (int i = 0; i < 200; i++) w = BayesianKnowledgeTracer.update(w, false, P_GUESS_MC);
    assertTrue(w >= WEIGHT_LO);
  }

  @Test
  void aLowerGuessFloorMakesACorrectAnswerMoreInformative() {
    double mc = BayesianKnowledgeTracer.update(0.5, true, P_GUESS_MC);
    double grid = BayesianKnowledgeTracer.update(0.5, true, AdaptiveConstants.P_GUESS_GRID);
    assertTrue(grid > mc);
  }
}
