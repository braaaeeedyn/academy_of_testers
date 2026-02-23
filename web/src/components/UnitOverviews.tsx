import { useState, useMemo } from 'react'
import type { SubjectUnitOverview, UnitOverview, SubunitOverview } from '../data/unitOverviews'

interface Props {
  overview: SubjectUnitOverview
  onBack: () => void
}

export default function UnitOverviews({ overview, onBack }: Props) {
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number>(
    overview.units[0]?.unitNumber ?? 1
  )
  const selectedUnit: UnitOverview | undefined = useMemo(
    () => overview.units.find((u) => u.unitNumber === selectedUnitNumber),
    [overview.units, selectedUnitNumber]
  )

  const [selectedSubunitId, setSelectedSubunitId] = useState<string>(
    selectedUnit?.subunits[0]?.id ?? ''
  )

  const currentSubunit: SubunitOverview | undefined = useMemo(
    () => selectedUnit?.subunits.find((s) => s.id === selectedSubunitId) ?? selectedUnit?.subunits[0],
    [selectedUnit, selectedSubunitId]
  )

  const handleUnitChange = (value: string) => {
    const num = parseInt(value, 10)
    setSelectedUnitNumber(num)
    const unit = overview.units.find((u) => u.unitNumber === num)
    if (unit && unit.subunits.length > 0) {
      setSelectedSubunitId(unit.subunits[0].id)
    } else {
      setSelectedSubunitId('')
    }
  }

  return (
    <div>
      <button
        onClick={onBack}
        className="hover:underline mb-4 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back to {overview.subjectName} categories
      </button>

      <h2 className="text-2xl font-bold mb-4">Unit Overviews</h2>
      <p className="text-gray-700 mb-6">
        Browse high-level summaries of each unit and subunit for{' '}
        <span className="font-semibold">{overview.subjectName}</span>. Start by choosing a unit, then
        select a subunit to view focused notes.
      </p>

      {/* Unit selector */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <label className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
          Select unit:
        </label>
        <select
          value={selectedUnitNumber}
          onChange={(e) => handleUnitChange(e.target.value)}
          className="px-4 py-2 border border-black/35 rounded-lg text-sm cursor-pointer"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          {overview.units.map((unit) => (
            <option key={unit.unitNumber} value={unit.unitNumber}>
              Unit {unit.unitNumber}: {unit.title}
            </option>
          ))}
        </select>
      </div>

      {/* Subunit selector */}
      {selectedUnit && selectedUnit.subunits.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Subunits in Unit {selectedUnit.unitNumber}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedUnit.subunits.map((sub) => {
              const isActive = currentSubunit && currentSubunit.id === sub.id
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubunitId(sub.id)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium cursor-pointer border transition-all"
                  style={{
                    backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-secondary)',
                    color: isActive ? 'var(--color-secondary)' : 'var(--color-primary)',
                    borderColor: 'var(--color-primary)',
                  }}
                >
                  {sub.title}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Subunit content */}
      {currentSubunit && (
        <div className="rounded-xl shadow-md border border-black/35 overflow-hidden" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="px-6 py-4" style={{ backgroundColor: 'var(--color-primary)' }}>
            <h3 className="text-lg font-bold" style={{ color: 'var(--color-secondary)' }}>
              Unit {selectedUnitNumber}: {selectedUnit?.title}
            </h3>
            <p className="text-sm opacity-80" style={{ color: 'var(--color-secondary)' }}>
              {currentSubunit.title}
            </p>
          </div>
          <div className="p-6">
            {/* Summary paragraphs */}
            {currentSubunit.summary
              .split('\n\n')
              .filter((p) => p.trim().length > 0)
              .map((para, idx) => (
                <p key={idx} className="mb-4 text-sm text-gray-800">
                  {para}
                </p>
              ))}
            {currentSubunit.keyIdeas.length > 0 && (
              <>
                <h4 className="text-sm font-semibold mb-2">Key ideas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
                  {currentSubunit.keyIdeas.map((idea, idx) => (
                    <li key={idx}>{idea}</li>
                  ))}
                </ul>
              </>
            )}

            {currentSubunit.exampleCode && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">Example code:</h4>
                <pre
                  className="text-xs md:text-sm rounded-lg p-3 overflow-x-auto border border-black/25 bg-black/90 text-gray-100"
                >
                  <code>
                    {currentSubunit.exampleCode}
                  </code>
                </pre>
                {currentSubunit.exampleExplanation && (
                  <p className="mt-3 text-xs md:text-sm text-gray-200 bg-black/60 rounded-lg p-3">
                    {currentSubunit.exampleExplanation}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

