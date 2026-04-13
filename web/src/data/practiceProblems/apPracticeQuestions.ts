import { AP_CS_A } from './reviewQuestionsCSA'
import { AP_CSP } from './reviewQuestionsCSP'
import { AP_CALCULUS_AB } from './reviewQuestionsCalculusAB'
import { AP_CALCULUS_BC } from './reviewQuestionsCalculusBC'
import { AP_PRECALCULUS } from './reviewQuestionsPrecalc'
import { AP_BIOLOGY } from './reviewQuestionsBiology'
import { AP_PSYCHOLOGY } from './reviewQuestionsPsychology'
import { AP_CHEMISTRY } from './reviewQuestionsChemistry'
import { AP_STATISTICS } from './reviewQuestionsStats'
import { AP_US_HISTORY } from './reviewQuestionsUSHistory'
import { AP_WORLD_HISTORY } from './reviewQuestionsWorldHistory'
import { AP_EURO_HISTORY } from './reviewQuestionsEuroHistory'
import { AP_PHYSICS_1 } from './reviewQuestionsPhysics'
import { AP_PHYSICS_2 } from './reviewQuestionsPhysics2'
import { AP_ENV_SCIENCE } from './reviewQuestionsEnvScience'
import { AP_US_GOV } from './reviewQuestionsGov'
import { AP_COMP_GOV } from './reviewQuestionsCompGov'
import { AP_MACRO } from './reviewQuestionsMacro'
import { AP_MICRO } from './reviewQuestionsMicro'
import { AP_ENGLISH_LANG } from './reviewQuestionsEnglishLang'
import { AP_ENGLISH_LIT } from './reviewQuestionsEnglishLit'
import { AP_HUMAN_GEO } from './reviewQuestionsHumanGeo'
import { AP_PHYSICS_C_MECH } from './reviewQuestionsPhysicsCMech'
import { AP_PHYSICS_C_EM } from './reviewQuestionsPhysicsCEM'
import { AP_AFRICAN_AM_STUDIES } from './reviewQuestionsAfricanAmStudies'
import { AP_ART_HISTORY } from './reviewQuestionsArtHistory'
import { AP_MUSIC_THEORY } from './reviewQuestionsMusicTheory'
import { AP_SEMINAR } from './reviewQuestionsSeminar'
import { AP_RESEARCH } from './reviewQuestionsResearch'

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
  AP_RESEARCH,
]
