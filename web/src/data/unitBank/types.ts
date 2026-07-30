export type Difficulty = 'easy' | 'medium' | 'hard'

export interface UnitQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number // 0-indexed
  explanation: string
  /** Present on questions that carry a calibrated difficulty; untagged questions count as "standard". */
  difficulty?: Difficulty
}

export interface BankUnit {
  unitNumber: number
  title: string
  questions: UnitQuestion[]
}

export interface SubjectUnitBank {
  label: string
  slug: string
  units: BankUnit[]
}
