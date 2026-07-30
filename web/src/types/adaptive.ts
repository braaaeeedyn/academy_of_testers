/** Wire types for the SAT adaptive engine. Mirrors com.aot.sat.dto.AdaptiveDtos. */

/** A question as served before answering — never carries the correct answer. */
export interface AdaptiveQuestion {
  id: string
  skillId: string
  skillName: string
  answerType: 'mc' | 'grid'
  stem: string
  options: string[]
}

export interface SkillWeight {
  skillId: string
  skillName: string
  displayOrder: number
  weight: number
  mastered: boolean
  /** Highest mastery ever reached for this skill (0..1); does not decay. */
  maxWeight: number
  /** Epoch millis when the peak mastery was reached (0 if unknown). */
  maxWeightAt: number
}

export interface AdaptiveStatus {
  diagnosticComplete: boolean
  diagnosticAnswered: number
  diagnosticTotal: number
  sessionOpen: boolean
  sessionId: number | null
}

export interface DiagnosticStep {
  question: AdaptiveQuestion | null
  questionNumber: number
  total: number
  complete: boolean
}

export interface DiagnosticAnswerResult {
  correct: boolean
  correctIndex: number
  explanation: string
  nextQuestion: AdaptiveQuestion | null
  questionNumber: number
  total: number
  complete: boolean
  weights: SkillWeight[]
}

export interface SessionStep {
  sessionId: number
  question: AdaptiveQuestion
  questionNumber: number
  targetLength: number
}

export interface AnswerResult {
  correct: boolean
  correctIndex: number
  explanation: string
  updatedWeights: SkillWeight[]
  nextQuestion: AdaptiveQuestion | null
  questionNumber: number
  targetLength: number
  complete: boolean
}

export interface SessionSummary {
  sessionId: number
  total: number
  correct: number
  weights: SkillWeight[]
}

export interface RecommendedSkill {
  skillId: string
  skillName: string
  weight: number
}

export interface StreakInfo {
  currentStreak: number
  longestStreak: number
  repairsAvailable: number
  todayDone: boolean
  /** Total active days across all time. */
  activeDayCount: number
  /** Active days needed to earn one repair token. */
  daysPerRepair: number
  /** ISO yyyy-MM-dd dates within the displayed month. */
  activeDates: string[]
  repairedDates: string[]
  repairableDates: string[]
  /** Server clock (ISO-8601 instant) at response time — anchors the day-rollover countdown. */
  serverNow: string
  /** Instant (ISO-8601) of the next universal day boundary (00:00 UTC). */
  nextDayUtc: string
}

export interface DashboardData {
  diagnosticComplete: boolean
  weights: SkillWeight[]
  recommended: RecommendedSkill[]
  streak: StreakInfo
}

/** User-linked dashboard preferences. `testDate` is ISO yyyy-MM-dd, or null when unset. */
export interface UserPrefs {
  testDate: string | null
  weeklyGoal: number | null
}

export interface SkillCatalog {
  skillId: string
  skillName: string
  displayOrder: number
  easy: number
  medium: number
  hard: number
  total: number
}

export type Difficulty = 'any' | 'easy' | 'medium' | 'hard'
