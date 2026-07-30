import type { SubjectUnitBank } from './types'
import { UNIT_BANKS } from './index'

/** Maps DB subject names to bank slugs. */
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
  'AP Research': 'ap-research',
}

export function subjectToApSlug(name: string): string {
  return SUBJECT_TO_SLUG[name] ?? name.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')
}

/** The merged per-unit question bank for a subject, or undefined when none exists. */
export function getUnitBank(subjectName: string): SubjectUnitBank | undefined {
  const slug = subjectToApSlug(subjectName)
  return UNIT_BANKS.find((b) => b.slug === slug)
}
