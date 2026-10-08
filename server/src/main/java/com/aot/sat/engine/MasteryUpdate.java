package com.aot.sat.engine;

import static com.aot.sat.engine.AdaptiveConstants.MASTERY_GAIN_RATE;
import static com.aot.sat.engine.AdaptiveConstants.MASTERY_LOSS_RATE;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_HI;
import static com.aot.sat.engine.AdaptiveConstants.WEIGHT_LO;
import static com.aot.sat.engine.AdaptiveConstants.clamp;

/**
 * One answer's effect on the answered skill's weight (§4.1, §4.5 steps 4-5). Pure: no clock, no
 * database. Wraps textbook BKT with the two rules the product needs on top of it: a miss never
 * raises the weight, and each step is damped (gains harder than losses).
 */
public final class MasteryUpdate {

  private MasteryUpdate() {}

  /**
   * Returns the new weight after one answer.
   *
   * @param wBefore the decayed weight before the answer
   * @param correct whether the answer was correct
   * @param pGuess P(G) for this item's answer format
   */
  public static double applyAnswer(double wBefore, boolean correct, double pGuess) {
    double rawAfter = BayesianKnowledgeTracer.update(wBefore, correct, pGuess);
    // BKT applies the learning transition after every answer, so below w ~= 0.115 a miss nets a
    // small rise. A wrong answer must never raise mastery, nor (through a negative delta) raise the
    // prerequisites, so a miss is capped at no change.
    if (!correct) {
      rawAfter = Math.min(rawAfter, wBefore);
    }
    double rawDelta = rawAfter - wBefore;
    double rate = rawDelta >= 0 ? MASTERY_GAIN_RATE : MASTERY_LOSS_RATE;
    return clamp(wBefore + rawDelta * rate, WEIGHT_LO, WEIGHT_HI);
  }
}
