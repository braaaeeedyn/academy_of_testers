import { useMemo, useState } from 'react'
import type { PracticeConfig } from '../../services/api'
import type { Difficulty, SkillCatalog } from '../../types/adaptive'

interface Props {
  catalog: SkillCatalog[]
  onStartPractice: (config: PracticeConfig) => void
}

const DIFFICULTIES: { id: Difficulty; label: string }[] = [
  { id: 'any', label: 'Any' },
  { id: 'easy', label: 'Easy' },
  { id: 'medium', label: 'Medium' },
  { id: 'hard', label: 'Hard' },
]

function countFor(skill: SkillCatalog, diff: Difficulty): number {
  if (diff === 'any') return skill.total
  return skill[diff]
}

export default function PracticeBuilder({ catalog, onStartPractice }: Props) {
  const [difficulty, setDifficulty] = useState<Difficulty>('any')
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(catalog.map((s) => s.skillId))
  )
  const [desired, setDesired] = useState(10)

  const maxAvailable = useMemo(
    () =>
      catalog
        .filter((s) => selected.has(s.skillId))
        .reduce((sum, s) => sum + countFor(s, difficulty), 0),
    [catalog, selected, difficulty]
  )

  const length = Math.min(desired, maxAvailable) || 0
  const capped = desired > maxAvailable && maxAvailable > 0

  const toggle = (skillId: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(skillId)) next.delete(skillId)
      else next.add(skillId)
      return next
    })
  }

  const allSelected = selected.size === catalog.length
  const toggleAll = () =>
    setSelected(allSelected ? new Set() : new Set(catalog.map((s) => s.skillId)))

  const canStart = selected.size > 0 && maxAvailable > 0

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        padding: 24,
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
        Build your own
      </div>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '0 0 20px' }}>
        Pick topics, choose a difficulty and length, then start a custom set.
      </p>

      {/* Wide two-pane layout: controls on the left, the full topic grid on the right. */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        {/* Controls */}
        <div style={{ width: 280, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <Label>Difficulty</Label>
            <div style={{ display: 'flex', gap: 6 }}>
              {DIFFICULTIES.map((d) => {
                const on = difficulty === d.id
                return (
                  <button
                    key={d.id}
                    onClick={() => setDifficulty(d.id)}
                    style={{
                      flex: 1,
                      padding: '8px 0',
                      fontSize: 12,
                      fontWeight: 700,
                      borderRadius: 'var(--radius-input)',
                      border: `1px solid ${on ? 'var(--accent)' : 'var(--hairline)'}`,
                      backgroundColor: on ? 'var(--accent)' : 'var(--surface)',
                      color: on ? 'var(--accent-ink)' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    {d.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <Label>Number of questions</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <input
                type="number"
                min={1}
                max={Math.max(1, maxAvailable)}
                value={desired}
                onChange={(e) => setDesired(Math.max(1, Number(e.target.value) || 1))}
                style={{
                  width: 88,
                  padding: '9px 11px',
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 'var(--radius-input)',
                  border: '1px solid var(--hairline)',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text)',
                }}
              />
              <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {maxAvailable} available
                {capped && <><br /><span style={{ color: 'var(--accent)' }}>Using {length} (the max).</span></>}
              </span>
            </div>
          </div>

          <button
            style={{ ...primaryBtn, opacity: canStart ? 1 : 0.5, cursor: canStart ? 'pointer' : 'not-allowed' }}
            disabled={!canStart}
            onClick={() =>
              canStart &&
              onStartPractice({
                topics: [...selected],
                difficulty,
                length,
              })
            }
          >
            Start custom practice · {length || 0} Q
          </button>
        </div>

        {/* Topics */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Label noMargin>Topics</Label>
            <button
              onClick={toggleAll}
              style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 12, fontWeight: 700, cursor: 'pointer', padding: 0 }}
            >
              {allSelected ? 'Clear all' : 'Select all'}
            </button>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
              gap: 8,
            }}
          >
            {catalog.map((s) => {
              const on = selected.has(s.skillId)
              const n = countFor(s, difficulty)
              return (
                <button
                  key={s.skillId}
                  onClick={() => toggle(s.skillId)}
                  disabled={n === 0}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-input)',
                    border: `1px solid ${on ? 'var(--accent)' : 'var(--hairline)'}`,
                    backgroundColor: on ? 'color-mix(in srgb, var(--accent) 10%, transparent)' : 'var(--surface)',
                    cursor: n === 0 ? 'not-allowed' : 'pointer',
                    opacity: n === 0 ? 0.5 : 1,
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 4,
                      flexShrink: 0,
                      border: `1.5px solid ${on ? 'var(--accent)' : 'var(--hairline)'}`,
                      backgroundColor: on ? 'var(--accent)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {on && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--accent-ink)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </span>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{s.skillName}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
                    {n}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ children, noMargin }: { children: React.ReactNode; noMargin?: boolean }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', marginBottom: noMargin ? 0 : 7 }}>
      {children}
    </div>
  )
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
  padding: '12px 20px',
  borderRadius: 'var(--radius-btn)',
  border: 'none',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-ink)',
  fontWeight: 700,
  fontSize: 14,
  cursor: 'pointer',
}
