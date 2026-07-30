package com.aot.sat.dto;

import java.util.List;

/** Wire types for the SAT adaptive API. Nested so one import covers the surface. */
public final class AdaptiveDtos {

  private AdaptiveDtos() {}

  /** Sent BEFORE answering. No correctIndex, no explanation, no difficulty, no IRT params. */
  public record AdaptiveQuestion(
      String id,
      String skillId,
      String skillName,
      String answerType,
      String stem,
      List<String> options) {}

  public record SkillWeight(
      String skillId,
      String skillName,
      int displayOrder,
      double weight,
      boolean mastered,
      double maxWeight,
      // Epoch millis when the peak was reached (0 if unknown).
      long maxWeightAt) {}

  public record Status(
      boolean diagnosticComplete,
      int diagnosticAnswered,
      int diagnosticTotal,
      boolean sessionOpen,
      Long sessionId) {}

  /** One diagnostic step: the item to answer, or completion. */
  public record DiagnosticStep(
      AdaptiveQuestion question, int questionNumber, int total, boolean complete) {}

  public record SubmitAnswer(
      String questionId, Integer selectedIndex, String answerText, Integer msElapsed) {}

  /** Result of a diagnostic answer. */
  public record DiagnosticAnswerResult(
      boolean correct,
      int correctIndex,
      String explanation,
      AdaptiveQuestion nextQuestion,
      int questionNumber,
      int total,
      boolean complete,
      List<SkillWeight> weights) {}

  /** A session step: the served question and where we are in the run. */
  public record SessionStep(
      Long sessionId, AdaptiveQuestion question, int questionNumber, int targetLength) {}

  /** Result of a session answer. */
  public record AnswerResult(
      boolean correct,
      int correctIndex,
      String explanation,
      List<SkillWeight> updatedWeights,
      AdaptiveQuestion nextQuestion,
      int questionNumber,
      int targetLength,
      boolean complete) {}

  public record SessionSummary(Long sessionId, int total, int correct, List<SkillWeight> weights) {}

  /** A weak skill surfaced on the dashboard as a suggested focus for the day. */
  public record RecommendedSkill(String skillId, String skillName, double weight) {}

  /**
   * Streak state for one displayed month. Dates are ISO (yyyy-MM-dd) strings scoped to that month;
   * repairableDates are past missed days the student may restore with a repair token.
   */
  public record StreakInfo(
      int currentStreak,
      int longestStreak,
      int repairsAvailable,
      boolean todayDone,
      // Total active days across all time and the days-per-repair rule, so the client can show
      // progress toward the next repair token.
      int activeDayCount,
      int daysPerRepair,
      List<String> activeDates,
      List<String> repairedDates,
      List<String> repairableDates,
      // Server-authoritative clock so the client shows a universal day-rollover countdown
      // instead of trusting the device clock. Both are ISO-8601 instants; the day boundary
      // is 00:00 UTC.
      String serverNow,
      String nextDayUtc) {}

  public record DashboardData(
      boolean diagnosticComplete,
      List<SkillWeight> weights,
      List<RecommendedSkill> recommended,
      StreakInfo streak) {}

  public record RepairRequest(String date) {}

  /** User-linked dashboard preferences. {@code testDate} is ISO yyyy-MM-dd (or null). */
  public record UserPrefs(String testDate, Integer weeklyGoal) {}

  /** How many active bank questions exist per skill, split by difficulty (for the practice builder). */
  public record SkillCatalog(
      String skillId,
      String skillName,
      int displayOrder,
      int easy,
      int medium,
      int hard,
      int total) {}
}
