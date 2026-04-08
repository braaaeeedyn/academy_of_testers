import { useState, useMemo } from 'react'
import type { SubjectUnitOverview, UnitOverview, SubunitOverview } from '../data/unitOverviews'
import MathText, { renderLatexBlock } from './MathText'

/** Render text — only runs KaTeX parsing when the subject uses LaTeX. */
function TextBlock({
  children,
  latex,
  className = '',
  component = 'span',
  style,
}: {
  children: string
  latex: boolean
  className?: string
  component?: 'span' | 'p' | 'div'
  style?: React.CSSProperties
}) {
  if (latex) {
    return (
      <MathText component={component} className={className} style={style}>
        {children}
      </MathText>
    )
  }
  const Component = component
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  )
}

interface Props {
  overview: SubjectUnitOverview
  onBack?: () => void
}

export default function UnitOverviews({ overview }: Props) {
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
      <h2 className="text-2xl font-bold mb-4">Unit Overviews</h2>
      <p className="mb-6" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
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
                <TextBlock
                  key={idx}
                  latex={overview.features.latex}
                  component="p"
                  className="mb-4 text-sm"
                  style={{ color: 'var(--color-primary)', opacity: 0.85 }}
                >
                  {para}
                </TextBlock>
              ))}
            {currentSubunit.keyIdeas.length > 0 && (
              <>
                <h4 className="text-sm font-semibold mb-2">Key ideas:</h4>
                <ul
                  className="list-disc list-inside space-y-1 text-sm"
                  style={{ color: 'var(--color-primary)', opacity: 0.85 }}
                >
                  {currentSubunit.keyIdeas.map((idea, idx) => (
                    <li key={idx}>
                      <TextBlock latex={overview.features.latex}>{idea}</TextBlock>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {currentSubunit.exampleCode && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">
                  {(currentSubunit.exampleLanguage ?? overview.features.defaultExampleLanguage) === 'latex'
                    ? 'Example:'
                    : 'Example'}
                </h4>
                {(currentSubunit.exampleLanguage ?? overview.features.defaultExampleLanguage) === 'latex' ? (
                  <div
                    className="text-sm rounded-lg p-3 overflow-x-auto border border-black/25"
                    style={{
                      backgroundColor:
                        'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
                    }}
                  >
                    <div
                      className="katex-display"
                      style={{ color: 'var(--color-primary)', opacity: 0.85 }}
                      dangerouslySetInnerHTML={{
                        __html: renderLatexBlock(currentSubunit.exampleCode),
                      }}
                    />
                  </div>
                ) : (
                  <TextBlock
                    latex={overview.features.latex}
                    component="p"
                    className="text-sm"
                    style={{ color: 'var(--color-primary)', opacity: 0.85 }}
                  >
                    {currentSubunit.exampleCode}
                  </TextBlock>
                )}
                {currentSubunit.exampleExplanation && (
                  <TextBlock
                    latex={overview.features.latex}
                    component="p"
                    className="mt-3 text-xs md:text-sm text-gray-200 bg-black/60 rounded-lg p-3"
                  >
                    {currentSubunit.exampleExplanation}
                  </TextBlock>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

