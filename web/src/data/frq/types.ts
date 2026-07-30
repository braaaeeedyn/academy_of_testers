// Free-response practice: official-style prompts + the College Board scoring rubric structure.
// Rubric wording models the published scoring guidelines (which are open guidance); prompt source
// texts are original or public-domain so nothing copyrighted is redistributed. Drop real released
// prompts in here as they are published on AP Central.

export interface FrqRubricRow {
  /** Short label shown to the student, e.g. "Thesis / Claim". */
  name: string
  /** Points this row is worth (a 0–max band; the AI awards an integer in range). */
  maxPoints: number
  /** The exact criterion the response must meet to earn the point(s). */
  criteria: string
}

export interface FrqPrompt {
  id: string
  /** e.g. "Rhetorical Analysis", "Argument", "Synthesis", "Long Essay (LEQ)". */
  essayType: string
  title: string
  /** Released year or "Sample" — shown as a chip. */
  year?: string
  /** The task directions the student writes to. */
  directions: string
  /** Optional passage / source packet the response must engage with. */
  sourceText?: string
  /** College Board's suggested writing time, in minutes (drives the timer default). */
  suggestedMinutes: number
  rubric: FrqRubricRow[]
}

export interface SubjectFrqSet {
  subjectName: string
  /** Provenance / usage note surfaced to the student. */
  note: string
  prompts: FrqPrompt[]
}
