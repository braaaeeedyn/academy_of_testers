// Unified multiple-choice pool for a subject, flattened from the merged unit bank
// (data/unitBank). Powers Mixed Review and the Timed Mock Exam.

import { getUnitBank, subjectToApSlug } from './unitBank/lookup'

export { subjectToApSlug }

export interface MixQuestion {
  id: string
  unit: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

/** Every MCQ we have for a subject, unit-tagged. */
export function getMixedQuestions(subjectName: string): MixQuestion[] {
  const bank = getUnitBank(subjectName)
  if (!bank) return []
  const out: MixQuestion[] = []
  for (const u of bank.units) {
    const unit = `Unit ${u.unitNumber}: ${u.title}`
    for (const q of u.questions) {
      out.push({
        id: q.id,
        unit,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
      })
    }
  }
  return out
}

/** Fisher–Yates shuffle returning a new array (does not mutate the input). */
export function shuffle<T>(items: T[]): T[] {
  const a = items.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
