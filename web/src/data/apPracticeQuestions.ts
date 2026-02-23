import { AP_CS_A } from './practiceQuestionsCSA'
import { AP_CSP } from './practiceQuestionsCSP'
import { AP_CALCULUS_AB } from './practiceQuestionsCalculusAB'
import { AP_CALCULUS_BC } from './practiceQuestionsCalculusBC'
import { AP_PRECALCULUS } from './practiceQuestionsPrecalc'
import { AP_BIOLOGY } from './practiceQuestionsBiology'
import { AP_PSYCHOLOGY } from './practiceQuestionsPsychology'
import { AP_CHEMISTRY } from './practiceQuestionsChemistry'
import { AP_STATISTICS } from './practiceQuestionsStats'
import { AP_US_HISTORY } from './practiceQuestionsUSHistory'
import { AP_WORLD_HISTORY } from './practiceQuestionsWorldHistory'
import { AP_EURO_HISTORY } from './practiceQuestionsEuroHistory'
import { AP_PHYSICS_1 } from './practiceQuestionsPhysics'
import { AP_PHYSICS_2 } from './practiceQuestionsPhysics2'
import { AP_ENV_SCIENCE } from './practiceQuestionsEnvScience'
import { AP_US_GOV } from './practiceQuestionsGov'
import { AP_COMP_GOV } from './practiceQuestionsCompGov'
import { AP_MACRO } from './practiceQuestionsMacro'
import { AP_MICRO } from './practiceQuestionsMicro'
import { AP_ENGLISH_LANG } from './practiceQuestionsEnglishLang'
import { AP_ENGLISH_LIT } from './practiceQuestionsEnglishLit'
import { AP_HUMAN_GEO } from './practiceQuestionsHumanGeo'
import { AP_PHYSICS_C_MECH } from './practiceQuestionsPhysicsCMech'
import { AP_PHYSICS_C_EM } from './practiceQuestionsPhysicsCEM'
import { AP_AFRICAN_AM_STUDIES } from './practiceQuestionsAfricanAmStudies'
import { AP_ART_HISTORY } from './practiceQuestionsArtHistory'
import { AP_MUSIC_THEORY } from './practiceQuestionsMusicTheory'
import { AP_SEMINAR } from './practiceQuestionsSeminar'

export interface PracticeQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number // 0-indexed
  explanation: string
}

export interface ExamUnit {
  unitNumber: number
  title: string
  questions: PracticeQuestion[]
}

export interface APPracticeExam {
  label: string
  slug: string
  units: ExamUnit[]
}

export const AP_PRACTICE_DATA: APPracticeExam[] = [
  AP_CS_A,
  AP_CSP,
  AP_CALCULUS_AB,
  AP_CALCULUS_BC,
  AP_PRECALCULUS,
  AP_BIOLOGY,
  AP_CHEMISTRY,
  AP_PHYSICS_1,
  AP_PHYSICS_2,
  AP_ENV_SCIENCE,
  AP_PSYCHOLOGY,
  AP_STATISTICS,
  AP_US_HISTORY,
  AP_WORLD_HISTORY,
  AP_EURO_HISTORY,
  AP_HUMAN_GEO,
  AP_US_GOV,
  AP_COMP_GOV,
  AP_MACRO,
  AP_MICRO,
  AP_ENGLISH_LANG,
  AP_ENGLISH_LIT,
  AP_PHYSICS_C_MECH,
  AP_PHYSICS_C_EM,
  AP_AFRICAN_AM_STUDIES,
  AP_ART_HISTORY,
  AP_MUSIC_THEORY,
  AP_SEMINAR,
]
