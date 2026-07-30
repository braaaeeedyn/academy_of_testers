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

  const [menuOpen, setMenuOpen] = useState(false)
  const [unitMenuOpen, setUnitMenuOpen] = useState(false)

  const subunits = selectedUnit?.subunits ?? []
  const currentIndex = currentSubunit
    ? subunits.findIndex((s) => s.id === currentSubunit.id)
    : -1
  const goToSubunit = (index: number) => {
    const sub = subunits[index]
    if (sub) setSelectedSubunitId(sub.id)
  }

  return (
    <div>
      <h2 className="font-display text-2xl font-bold mb-4">Unit Overviews</h2>
      <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
        Browse high-level summaries of each unit and subunit for{' '}
        <span className="font-semibold" style={{ color: 'var(--text)' }}>{overview.subjectName}</span>. Start by choosing a unit, then
        select a subunit to view focused notes.
      </p>

      {/* Unit selector */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <label className="text-sm font-medium" style={{ color: 'var(--text)' }}>
          Select unit:
        </label>
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setUnitMenuOpen((o) => !o)}
            className="flex items-center justify-between gap-2 px-4 h-10 rounded-lg text-sm font-medium border cursor-pointer transition-colors w-full sm:w-auto sm:min-w-[260px]"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            <span className="truncate">Unit {selectedUnitNumber}: {selectedUnit?.title}</span>
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {unitMenuOpen && (
            <>
              <button
                aria-label="Close menu"
                onClick={() => setUnitMenuOpen(false)}
                className="fixed inset-0 z-10 cursor-default"
              />
              <div
                className="absolute left-0 mt-2 w-72 max-w-[80vw] max-h-72 overflow-y-auto rounded-xl border shadow-lg z-20 py-1"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
              >
                {overview.units.map((unit) => {
                  const isActive = unit.unitNumber === selectedUnitNumber
                  return (
                    <button
                      key={unit.unitNumber}
                      onClick={() => { handleUnitChange(String(unit.unitNumber)); setUnitMenuOpen(false) }}
                      className="w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2.5"
                      style={{
                        color: 'var(--text)',
                        fontWeight: isActive ? 700 : 400,
                        borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                      }}
                    >
                      <span className="text-xs font-semibold flex-shrink-0 w-5" style={{ color: 'var(--text-muted)' }}>{unit.unitNumber}</span>
                      <span className="flex-1">{unit.title}</span>
                    </button>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Unit card with in-card subunit navigation */}
      {selectedUnit && (
        <div className="rounded-2xl shadow-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
          {/* Card header */}
          <div className="rounded-t-2xl px-6 py-5 flex items-center justify-between gap-4 flex-wrap" style={{ backgroundColor: 'var(--accent)' }}>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-1" style={{ color: 'var(--accent-ink)', opacity: 0.7 }}>
                Unit {selectedUnitNumber}
              </div>
              <h3 className="font-display text-xl font-bold leading-tight" style={{ color: 'var(--accent-ink)' }}>
                {selectedUnit.title}
              </h3>
            </div>

            {/* Subunit navigation: prev / menu / next */}
            {subunits.length > 0 && (
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => goToSubunit(currentIndex - 1)}
                  disabled={currentIndex <= 0}
                  aria-label="Previous subunit"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
                  style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setMenuOpen((o) => !o)}
                    className="flex items-center gap-2 px-3 h-9 rounded-lg text-sm font-semibold border cursor-pointer transition-opacity hover:opacity-80 max-w-[200px] sm:max-w-[260px]"
                    style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
                  >
                    <span className="truncate">{currentSubunit?.title ?? 'Select subunit'}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {menuOpen && (
                    <>
                      <button
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 z-10 cursor-default"
                      />
                      <div
                        className="absolute right-0 mt-2 w-72 max-w-[80vw] max-h-72 overflow-y-auto rounded-xl border shadow-lg z-20 py-1"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                      >
                        {subunits.map((sub, idx) => {
                          const isActive = currentSubunit?.id === sub.id
                          return (
                            <button
                              key={sub.id}
                              onClick={() => { setSelectedSubunitId(sub.id); setMenuOpen(false) }}
                              className="w-full text-left px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center gap-2.5"
                              style={{
                                color: 'var(--text)',
                                fontWeight: isActive ? 700 : 400,
                                borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                              }}
                            >
                              <span className="text-xs font-semibold flex-shrink-0 w-5" style={{ color: 'var(--text-muted)' }}>{idx + 1}</span>
                              <span className="flex-1">{sub.title}</span>
                            </button>
                          )
                        })}
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={() => goToSubunit(currentIndex + 1)}
                  disabled={currentIndex >= subunits.length - 1}
                  aria-label="Next subunit"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-80"
                  style={{ borderColor: 'color-mix(in srgb, var(--accent-ink) 30%, transparent)', color: 'var(--accent-ink)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Content */}
          {currentSubunit && (
          <div className="p-6">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h4 className="font-display text-lg font-bold">{currentSubunit.title}</h4>
              {subunits.length > 1 && currentIndex >= 0 && (
                <span className="text-xs font-medium flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {currentIndex + 1} of {subunits.length}
                </span>
              )}
            </div>
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
                  style={{ color: 'var(--text)', opacity: 0.85 }}
                >
                  {para}
                </TextBlock>
              ))}
            {currentSubunit.keyIdeas.length > 0 && (
              <>
                <h4 className="text-sm font-semibold mb-2">Key ideas:</h4>
                <ul
                  className="list-disc list-inside space-y-1 text-sm"
                  style={{ color: 'var(--text)', opacity: 0.85 }}
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
                    className="text-sm rounded-lg p-3 overflow-x-auto border"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--text) 6%, var(--surface))',
                      borderColor: 'var(--hairline)',
                    }}
                  >
                    <div
                      className="katex-display"
                      style={{ color: 'var(--text)', opacity: 0.85 }}
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
                    style={{ color: 'var(--text)', opacity: 0.85 }}
                  >
                    {currentSubunit.exampleCode}
                  </TextBlock>
                )}
                {currentSubunit.exampleExplanation && (
                  <TextBlock
                    latex={overview.features.latex}
                    component="p"
                    className="mt-3 text-xs md:text-sm rounded-lg p-3"
                    style={{ backgroundColor: 'var(--text)', color: 'var(--bg)' }}
                  >
                    {currentSubunit.exampleExplanation}
                  </TextBlock>
                )}
              </div>
            )}
          </div>
          )}
        </div>
      )}
    </div>
  )
}

