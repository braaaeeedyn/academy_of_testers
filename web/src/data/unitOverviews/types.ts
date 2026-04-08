export interface SubunitOverview {
  id: string
  title: string
  summary: string
  keyIdeas: string[]
  exampleCode?: string
  exampleLanguage?: 'java' | 'pseudocode' | 'latex'
  exampleExplanation?: string
}

export interface UnitOverview {
  unitNumber: number
  title: string
  subunits: SubunitOverview[]
}

/** Per-subject feature flags that control rendering behavior. */
export interface SubjectFeatures {
  /** Content contains inline LaTeX (e.g. \\(x^2\\)) that needs KaTeX rendering. */
  latex: boolean
  /** Subject includes code examples (Java, pseudocode, etc.). */
  codeExamples: boolean
  /** Default language for code/example blocks in this subject. */
  defaultExampleLanguage?: 'java' | 'pseudocode' | 'latex'
}

export interface SubjectUnitOverview {
  subjectName: string
  units: UnitOverview[]
  features: SubjectFeatures
}

