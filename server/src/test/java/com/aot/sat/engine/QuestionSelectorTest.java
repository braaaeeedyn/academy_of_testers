package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.GAMMA;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.aot.sat.engine.QuestionSelector.Candidate;
import com.aot.sat.engine.QuestionSelector.Scored;
import java.util.List;
import java.util.Map;
import java.util.Random;
import org.junit.jupiter.api.Test;

class QuestionSelectorTest {

  @Test
  void noCandidatesSelectsNothing() {
    assertNull(QuestionSelector.select(List.of(), Map.of(), new Random(1)));
  }

  @Test
  void prefersTheWeakerSkill() {
    // Each item sits exactly at its skill's ability, so information ties and the skill gap decides.
    double weakW = 0.2;
    double strongW = 0.95;
    Candidate weak =
        new Candidate("q-weak", "weak", 1.0, ItemResponseTheory.theta(weakW), 0.25, -1);
    Candidate strong =
        new Candidate("q-strong", "strong", 1.0, ItemResponseTheory.theta(strongW), 0.25, -1);
    Map<String, Double> weights = Map.of("weak", weakW, "strong", strongW);

    Random rng = new Random(42);
    int weakPicks = 0;
    for (int i = 0; i < 200; i++) {
      if (QuestionSelector.select(List.of(weak, strong), weights, rng) == weak) weakPicks++;
    }
    // Softmax odds are about 10:1 for the weak skill; sampling still occasionally picks the other.
    assertTrue(weakPicks > 150, "weak skill picked " + weakPicks + "/200");
    assertTrue(weakPicks < 200, "selection should not be fully deterministic");
  }

  @Test
  void aJustSeenItemIsPenalizedByGamma() {
    Candidate unseen = new Candidate("q1", "s", 1.0, 0.0, 0.25, -1);
    Candidate justSeen = new Candidate("q2", "s", 1.0, 0.0, 0.25, 0);
    List<Scored> scored = QuestionSelector.score(List.of(unseen, justSeen), Map.of("s", 0.5));
    assertEquals(GAMMA, scored.get(0).score() - scored.get(1).score(), 1e-9);
  }

  @Test
  void unknownSkillsAreScoredAsEvenMastery() {
    Candidate q = new Candidate("q1", "never-diagnosed", 1.0, 0.0, 0.25, -1);
    Candidate same = new Candidate("q2", "known", 1.0, 0.0, 0.25, -1);
    List<Scored> scored = QuestionSelector.score(List.of(q, same), Map.of("known", 0.5));
    assertEquals(scored.get(1).score(), scored.get(0).score(), 1e-9);
  }
}
