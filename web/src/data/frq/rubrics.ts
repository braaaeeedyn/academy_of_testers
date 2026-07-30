import type { FrqRubricRow } from './types'

// Reusable official-style rubric builders. Each returns a fresh array so callers can't share
// mutable rows. Wording models the published College Board scoring guidelines for each task type.

const DEFAULT_SOPHISTICATION =
  'Award 1 only for sophistication of thought or a complex understanding sustained throughout —'
  + ' e.g. situating the argument in a broader context, weighing tensions/implications, or a'
  + ' consistently vivid, controlled style. A single insightful phrase does not earn it. This point'
  + ' is rare — withhold unless clearly earned.'

/** The AP English Language / Literature 6-point essay rubric. */
export function essay6(thesis: string, evidence: string, sophistication = DEFAULT_SOPHISTICATION): FrqRubricRow[] {
  return [
    { name: 'Row A — Thesis', maxPoints: 1, criteria: thesis },
    { name: 'Row B — Evidence & Commentary', maxPoints: 4, criteria: evidence },
    { name: 'Row C — Sophistication', maxPoints: 1, criteria: sophistication },
  ]
}

/** History Long Essay Question (LEQ) — 6 points. */
export function leqRubric(): FrqRubricRow[] {
  return [
    { name: 'Thesis / Claim', maxPoints: 1, criteria: 'A historically defensible thesis that establishes a line of reasoning. A restatement of the prompt earns 0.' },
    { name: 'Contextualization', maxPoints: 1, criteria: 'Describes a broader historical context relevant to the prompt. A passing phrase does not earn the point.' },
    { name: 'Evidence', maxPoints: 2, criteria: '0–2. 1 point for two specific, relevant historical examples; 2 points for using that evidence to support an argument (not merely listing).' },
    { name: 'Analysis & Reasoning', maxPoints: 2, criteria: '0–2. 1 point for using a reasoning skill (causation, comparison, continuity/change) to structure the argument; 2 points for a sustained complex understanding. The 2nd point is rare.' },
  ]
}

/** History Document-Based Question (DBQ) — 7 points. */
export function dbqRubric(): FrqRubricRow[] {
  return [
    { name: 'Thesis / Claim', maxPoints: 1, criteria: 'A historically defensible thesis that responds to the prompt with a line of reasoning.' },
    { name: 'Contextualization', maxPoints: 1, criteria: 'Situates the argument in a broader historical context beyond the prompt’s time frame.' },
    { name: 'Evidence from documents', maxPoints: 2, criteria: '0–2. 1 point for using the content of at least three documents to address the topic; 2 points for using at least six documents to support the argument.' },
    { name: 'Evidence beyond documents', maxPoints: 1, criteria: 'Uses at least one specific, relevant piece of outside evidence (not found in the documents) to support the argument.' },
    { name: 'Analysis & Reasoning', maxPoints: 2, criteria: '0–2. 1 point for explaining how/why a document’s point of view, purpose, situation, or audience is relevant for at least two documents; 2 points for demonstrating a complex understanding sustained throughout.' },
  ]
}

/** History Short-Answer Question (SAQ) — 3 points, one per part. */
export function saqRubric(a: string, b: string, c: string): FrqRubricRow[] {
  return [
    { name: 'Part A', maxPoints: 1, criteria: a },
    { name: 'Part B', maxPoints: 1, criteria: b },
    { name: 'Part C', maxPoints: 1, criteria: c },
  ]
}

/** AP Government / Comparative Government Argument Essay — 6 points. */
export function govArgument(): FrqRubricRow[] {
  return [
    { name: 'Claim / Thesis', maxPoints: 1, criteria: 'A defensible claim that responds to the prompt and establishes a line of reasoning.' },
    { name: 'Evidence', maxPoints: 3, criteria: '0–3. 1 point for one piece of relevant, accurate evidence (must include the required foundational document/course concept where specified); up to 3 for a second piece plus evidence that supports the claim.' },
    { name: 'Reasoning', maxPoints: 1, criteria: 'Explains how or why the evidence supports the claim.' },
    { name: 'Alternate perspective', maxPoints: 1, criteria: 'Responds to an opposing or alternative perspective with refutation, concession, or rebuttal.' },
  ]
}

/** Point-per-part FRQ (math, science, CS, and other task-scored questions). Identity builder. */
export function pointBased(parts: { name: string; maxPoints: number; criteria: string }[]): FrqRubricRow[] {
  return parts.map((p) => ({ ...p }))
}
