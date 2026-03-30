import type { SubjectUnitOverview, UnitOverview, SubunitOverview } from './types'

// NOTE: Source-preserving content. Paste your AP Chemistry raw unit overview text into RAW_AP_CHEMISTRY.
// Expected format (same as other unit overviews in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_CHEMISTRY = `
AP Chemistry

`

function parseChemistry(raw: string): UnitOverview[] {
  const lines = raw.split('\n')
  const units: UnitOverview[] = []

  let currentUnit: UnitOverview | null = null
  let currentSubunit:
    | { id: string; title: string; summaryLines: string[]; keyIdeasLine: string }
    | null = null

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

export const AP_CHEMISTRY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Chemistry',
  units: parseChemistry(RAW_AP_CHEMISTRY),
}

