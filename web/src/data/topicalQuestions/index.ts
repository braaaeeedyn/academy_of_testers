export type { TopicalQuestion, TopicalUnit, TopicalExam } from './types'

import { TOPICAL_CS_A } from './topicalCSA'
import { TOPICAL_CSP } from './topicalCSP'
import { TOPICAL_CALCULUS_AB } from './topicalCalculusAB'
import { TOPICAL_CALCULUS_BC } from './topicalCalculusBC'
import { TOPICAL_PRECALCULUS } from './topicalPrecalc'
import { TOPICAL_BIOLOGY } from './topicalBiology'
import { TOPICAL_PSYCHOLOGY } from './topicalPsychology'
import { TOPICAL_CHEMISTRY } from './topicalChemistry'
import { TOPICAL_STATISTICS } from './topicalStats'
import { TOPICAL_US_HISTORY } from './topicalUSHistory'
import { TOPICAL_WORLD_HISTORY } from './topicalWorldHistory'
import { TOPICAL_EURO_HISTORY } from './topicalEuroHistory'
import { TOPICAL_PHYSICS_1 } from './topicalPhysics1'
import { TOPICAL_PHYSICS_2 } from './topicalPhysics2'
import { TOPICAL_ENV_SCIENCE } from './topicalEnvScience'
import { TOPICAL_US_GOV } from './topicalGov'
import { TOPICAL_COMP_GOV } from './topicalCompGov'
import { TOPICAL_MACRO } from './topicalMacro'
import { TOPICAL_MICRO } from './topicalMicro'
import { TOPICAL_ENGLISH_LANG } from './topicalEnglishLang'
import { TOPICAL_ENGLISH_LIT } from './topicalEnglishLit'
import { TOPICAL_HUMAN_GEO } from './topicalHumanGeo'
import { TOPICAL_PHYSICS_C_MECH } from './topicalPhysicsCMech'
import { TOPICAL_PHYSICS_C_EM } from './topicalPhysicsCEM'
import { TOPICAL_AFRICAN_AM_STUDIES } from './topicalAfricanAmStudies'
import { TOPICAL_ART_HISTORY } from './topicalArtHistory'
import { TOPICAL_MUSIC_THEORY } from './topicalMusicTheory'
import { TOPICAL_SEMINAR } from './topicalSeminar'

import type { TopicalExam } from './types'

export const TOPICAL_DATA: TopicalExam[] = [
  TOPICAL_CS_A,
  TOPICAL_CSP,
  TOPICAL_CALCULUS_AB,
  TOPICAL_CALCULUS_BC,
  TOPICAL_PRECALCULUS,
  TOPICAL_BIOLOGY,
  TOPICAL_CHEMISTRY,
  TOPICAL_PHYSICS_1,
  TOPICAL_PHYSICS_2,
  TOPICAL_ENV_SCIENCE,
  TOPICAL_PSYCHOLOGY,
  TOPICAL_STATISTICS,
  TOPICAL_US_HISTORY,
  TOPICAL_WORLD_HISTORY,
  TOPICAL_EURO_HISTORY,
  TOPICAL_HUMAN_GEO,
  TOPICAL_US_GOV,
  TOPICAL_COMP_GOV,
  TOPICAL_MACRO,
  TOPICAL_MICRO,
  TOPICAL_ENGLISH_LANG,
  TOPICAL_ENGLISH_LIT,
  TOPICAL_PHYSICS_C_MECH,
  TOPICAL_PHYSICS_C_EM,
  TOPICAL_AFRICAN_AM_STUDIES,
  TOPICAL_ART_HISTORY,
  TOPICAL_MUSIC_THEORY,
  TOPICAL_SEMINAR,
]

const SUBJECT_TO_SLUG: Record<string, string> = {
  'AP Computer Science A': 'ap-computer-science-a',
  'AP Computer Science Principles': 'ap-computer-science-principles',
  'AP Calculus AB': 'ap-calculus-ab',
  'AP Calculus BC': 'ap-calculus-bc',
  'AP Precalculus': 'ap-precalculus',
  'AP Biology': 'ap-biology',
  'AP Psychology': 'ap-psychology',
  'AP Chemistry': 'ap-chemistry',
  'AP Statistics': 'ap-statistics',
  'AP US History': 'ap-united-states-history',
  'AP World History': 'ap-world-history-modern',
  'AP European History': 'ap-european-history',
  'AP Physics 1': 'ap-physics-1',
  'AP Physics 2': 'ap-physics-2',
  'AP Environmental Science': 'ap-environmental-science',
  'AP Government': 'ap-united-states-government-and-politics',
  'AP Comparative Government': 'ap-comparative-government-and-politics',
  'AP Macroeconomics': 'ap-macroeconomics',
  'AP Microeconomics': 'ap-microeconomics',
  'AP English Language': 'ap-english-language-and-composition',
  'AP English Literature': 'ap-english-literature-and-composition',
  'AP Human Geography': 'ap-human-geography',
  'AP Physics C: Mechanics': 'ap-physics-c-mechanics',
  'AP Physics C: E&M': 'ap-physics-c-electricity-and-magnetism',
  'AP African American Studies': 'ap-african-american-studies',
  'AP Art History': 'ap-art-history',
  'AP Music Theory': 'ap-music-theory',
  'AP Seminar': 'ap-seminar',
}

export function getTopicalExamBySubjectName(subjectName: string): TopicalExam | undefined {
  const slug = SUBJECT_TO_SLUG[subjectName]
  if (!slug) return undefined
  return TOPICAL_DATA.find((e) => e.slug === slug)
}
