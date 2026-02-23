export interface TopicalQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface TopicalUnit {
  unitNumber: number
  title: string
  easy: TopicalQuestion[]
  medium: TopicalQuestion[]
  hard: TopicalQuestion[]
}

export interface TopicalExam {
  label: string
  slug: string
  units: TopicalUnit[]
}
