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

export interface SubjectUnitOverview {
  subjectName: string
  units: UnitOverview[]
}

