// Per-subject reference layer: a formula sheet (math/science), a key-terms glossary, and a
// "what's most tested" breakdown. Any section is optional so each subject shows only what fits.

export interface FormulaItem {
  name: string
  /** Raw LaTeX (no delimiters) — rendered as display math. */
  latex: string
  note?: string
}

export interface FormulaGroup {
  title: string
  items: FormulaItem[]
}

export interface GlossaryTerm {
  term: string
  definition: string
}

export interface TestedTopic {
  topic: string
  /** e.g. "10–13%" of the exam, or a section label. */
  weight?: string
  note: string
}

export interface SubjectReference {
  subjectName: string
  formulaGroups?: FormulaGroup[]
  glossary?: GlossaryTerm[]
  frequentlyTested?: TestedTopic[]
  note?: string
}
