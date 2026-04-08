import type { UnitOverview, SubunitOverview } from './types'

/**
 * Parses raw text into structured UnitOverview[].
 *
 * Expected format:
 *   Unit 1 – Title
 *   1.1 Subunit Title
 *   Summary paragraph(s)...
 *   Key ideas: Comma-separated or sentence list.
 *
 * This replaces the per-file parsers that were previously duplicated
 * across every raw-text unit-overview file.
 */
export function parseRawOverview(raw: string): UnitOverview[] {
  const lines = raw.split('\n')
  const units: UnitOverview[] = []

  let currentUnit: UnitOverview | null = null
  let currentSubunit: {
    id: string
    title: string
    summaryLines: string[]
    keyIdeasLine: string
  } | null = null

  const flushSubunit = () => {
    if (!currentUnit || !currentSubunit) return
    const summary = currentSubunit.summaryLines.join('\n').trim()
    const keyIdeas = currentSubunit.keyIdeasLine
      ? [currentSubunit.keyIdeasLine]
      : []

    const sub: SubunitOverview = {
      id: currentSubunit.id,
      title: currentSubunit.title,
      summary,
      keyIdeas,
    }
    currentUnit.subunits.push(sub)
    currentSubunit = null
  }

  const flushUnit = () => {
    if (!currentUnit) return
    units.push(currentUnit)
    currentUnit = null
  }

  for (const line of lines) {
    const unitMatch = line.match(/^Unit (\d+)\s+[–-]\s+(.+)$/)
    if (unitMatch) {
      flushSubunit()
      flushUnit()
      currentUnit = {
        unitNumber: Number(unitMatch[1]),
        title: unitMatch[2].trim(),
        subunits: [],
      }
      continue
    }

    const subunitMatch = line.match(/^(\d+)\.(\d+)\s+(.+)$/)
    if (subunitMatch) {
      flushSubunit()
      if (!currentUnit) continue
      const id = `${subunitMatch[1]}-${subunitMatch[2]}`
      currentSubunit = {
        id,
        title: subunitMatch[3].trim(),
        summaryLines: [],
        keyIdeasLine: '',
      }
      continue
    }

    const keyIdeasMatch = line.match(/^\s*Key ideas:\s*(.+)$/)
    if (keyIdeasMatch && currentSubunit) {
      currentSubunit.keyIdeasLine = keyIdeasMatch[1].trim()
      continue
    }

    if (currentSubunit) currentSubunit.summaryLines.push(line)
  }

  flushSubunit()
  flushUnit()
  return units
}

/**
 * Helper to build a SubunitOverview with optional example fields.
 * Replaces the per-file `subunit()` helpers in calc, precalc, stats, etc.
 */
export function subunit(
  id: string,
  title: string,
  summary: string = '',
  keyIdeas: string[] = [],
  opts?: {
    exampleCode?: string
    exampleLanguage?: 'java' | 'pseudocode' | 'latex'
    exampleExplanation?: string
  }
): SubunitOverview {
  return { id, title, summary, keyIdeas, ...opts }
}
