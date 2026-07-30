import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
  getCatalog,
  getDashboard,
  getUserPrefs,
  repairStreak,
  saveUserPrefs,
  type PracticeConfig,
} from '../../services/api'
import type { DashboardData, SkillCatalog, SkillWeight, UserPrefs } from '../../types/adaptive'
import { quoteForDay } from '../../data/motivationalQuotes'
import MasteryRadar from './MasteryRadar'
import StreakCalendar from './StreakCalendar'
import PracticeBuilder from './PracticeBuilder'

interface Props {
  onStartDiagnostic: () => void
  onStartPractice: (config: PracticeConfig) => void
}

// Skills below this weight are surfaced as recommendations (matches the radar's threshold).
const MASTERY_LINE = 0.85

function masteryLevel(weight: number): { label: string; color: string } {
  if (weight < 0.4) return { label: 'Needs work', color: 'var(--error, #e5484d)' }
  if (weight < 0.65) return { label: 'Developing', color: 'var(--warning, #d9820b)' }
  return { label: 'Almost there', color: 'var(--accent)' }
}

function monthKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

const primaryBtn: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '13px 28px',
  borderRadius: 'var(--radius-btn)',
  border: 'none',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-ink)',
  fontWeight: 700,
  fontSize: 15,
  cursor: 'pointer',
}

// Break the dashboard out of the centered page container so it uses the full
// desktop width — left cards hug the left edge, the calendar the right.
const fullBleed: React.CSSProperties = {
  position: 'relative',
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  padding: '0 40px',
  boxSizing: 'border-box',
}

export default function SatDashboard({ onStartDiagnostic, onStartPractice }: Props) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [monthDate, setMonthDate] = useState(() => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  })
  const [data, setData] = useState<DashboardData | null>(null)
  const [catalog, setCatalog] = useState<SkillCatalog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [repairing, setRepairing] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  // Current-month active dates, kept stable while the user navigates the calendar to other
  // months, so the weekly-goal card always reflects the real current week.
  const [thisMonthActive, setThisMonthActive] = useState<string[]>([])
  const [prefs, setPrefs] = useState<UserPrefs | null>(null)

  const load = useCallback(async (month: Date) => {
    setError(null)
    try {
      const d = await getDashboard(monthKey(month))
      setData(d)
      if (monthKey(month) === monthKey(new Date())) setThisMonthActive(d.streak.activeDates)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Catalog rarely changes; load it once for the practice builder.
  useEffect(() => {
    getCatalog().then(setCatalog).catch(() => setCatalog([]))
  }, [])

  // The user's saved test date and weekly goal (server-persisted, so it follows them).
  useEffect(() => {
    getUserPrefs().then(setPrefs).catch(() => setPrefs({ testDate: null, weeklyGoal: null }))
  }, [])

  const savePrefs = async (next: UserPrefs) => {
    setPrefs(await saveUserPrefs(next))
  }

  useEffect(() => {
    load(monthDate)
  }, [monthDate, load])

  const handleRepair = async (isoDate: string) => {
    setRepairing(true)
    try {
      await repairStreak(isoDate)
      await load(monthDate)
    } finally {
      setRepairing(false)
    }
  }

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>Loading your board…</div>
  }
  if (error || !data) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
        Couldn't load your dashboard{error ? `: ${error}` : ''}.
      </div>
    )
  }

  const firstName = (user?.displayName || 'there').split(' ')[0]
  const quote = quoteForDay()

  // Question counts per skill, so recommendations can show how much practice is available.
  const questionCount = new Map(catalog.map((s) => [s.skillId, s.total]))

  const calendar = (
    <StreakCalendar
      streak={data.streak}
      monthDate={monthDate}
      onChangeMonth={setMonthDate}
      onRepair={handleRepair}
      busy={repairing}
    />
  )

  const recommendedCard = (
    <Card>
      <SectionLabel>Recommended for today</SectionLabel>
      {data.recommended.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 8 }}>
          You're above the mastery line across the board. Keep it sharp with a practice run.
        </p>
      ) : (
        <>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '6px 0 0' }}>
            Your lowest skills, sorted by how far they sit below the {Math.round(MASTERY_LINE * 100)}% mastery line.
          </p>
          <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
            {data.recommended.map((r) => {
              const pct = Math.round(r.weight * 100)
              const gap = Math.max(0, Math.round((MASTERY_LINE - r.weight) * 100))
              const level = masteryLevel(r.weight)
              const total = questionCount.get(r.skillId)
              return (
                <div
                  key={r.skillId}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-input)',
                    border: '1px solid var(--hairline)',
                    backgroundColor: 'var(--surface)',
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{r.skillName}</span>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: level.color,
                          backgroundColor: `color-mix(in srgb, ${level.color} 14%, transparent)`,
                          padding: '2px 7px',
                          borderRadius: 999,
                        }}
                      >
                        {level.label}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
                      <MeterBar value={r.weight} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>
                        {pct}%
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 5 }}>
                      {gap}% to mastery{total != null ? ` · ${total} questions ready` : ''}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button
                      onClick={() => navigate(`/sat/prep/${r.skillId}`)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--hairline)',
                        backgroundColor: 'transparent',
                        color: 'var(--text)',
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                        transition: 'border-color 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-muted)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--hairline)')}
                    >
                      Study
                    </button>
                    <button
                      onClick={() => onStartPractice({ focusSkillId: r.skillId })}
                      onMouseEnter={() => setHoveredSkill(r.skillId)}
                      onMouseLeave={() => setHoveredSkill((h) => (h === r.skillId ? null : h))}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        border: '1px solid var(--accent)',
                        backgroundColor: hoveredSkill === r.skillId ? 'var(--accent)' : 'transparent',
                        color: hoveredSkill === r.skillId ? 'var(--accent-ink)' : 'var(--accent)',
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease, color 0.15s ease',
                      }}
                    >
                      Practice
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </Card>
  )

  return (
    <div style={fullBleed}>
      {/* Greeting */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          SAT Academy
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 800, color: 'var(--text)', lineHeight: 1.1, marginTop: 4 }}>
          Welcome back, {firstName}
        </h1>
        <p
          style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            lineHeight: 1.5,
            marginTop: 10,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          “{quote.text}”{' '}
          <span style={{ fontStyle: 'normal', fontWeight: 600 }}>— {quote.author}</span>
        </p>
      </div>

      {/* Left content area + calendar pinned right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(320px, 420px)',
          gap: 24,
          alignItems: 'start',
        }}
      >
        <div>
          {data.diagnosticComplete ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(400px, 1.15fr) minmax(300px, 0.85fr)',
                  gap: 20,
                  alignItems: 'start',
                }}
              >
                {/* Mastery — far left, larger scale */}
                <MasteryCard weights={data.weights} />

                {/* Quick start over Recommended — stacked, no row gap */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <QuickStartCard onStart={() => onStartPractice({})} />
                  {recommendedCard}
                </div>
              </div>

              {/* Build your own — spans the mastery + quick-start width */}
              {catalog.length > 0 && (
                <PracticeBuilder catalog={catalog} onStartPractice={onStartPractice} />
              )}
            </div>
          ) : (
            <Card>
              <SectionLabel>Get started</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)', margin: '10px 0 8px' }}>
                Take your diagnostic
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6, maxWidth: 460, marginBottom: 18 }}>
                A 24-question diagnostic across all eight SAT Math domains sets your starting mastery, so every
                practice question after it is chosen just for you.
              </p>
              <button style={primaryBtn} onClick={onStartDiagnostic}>
                Start diagnostic
              </button>
            </Card>
          )}
        </div>

        {/* Right rail: calendar (with consistency stats) + test countdown / weekly goal */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {calendar}
          <TestCountdownCard prefs={prefs} onSave={savePrefs} weekActiveDates={thisMonthActive} />
        </div>
      </div>
    </div>
  )
}

/** Mastery card whose radar scales to fill the column width as the page resizes. */
function MasteryCard({ weights }: { weights: SkillWeight[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(420)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setSize(Math.max(300, Math.min(480, el.clientWidth)))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return (
    <Card>
      <SectionLabel>Your mastery map</SectionLabel>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '6px 0 0' }}>
        Hover a solid dot for current mastery, or a hollow outer dot for your peak.
      </p>
      <div ref={ref} style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <MasteryRadar weights={weights} size={size} />
      </div>
    </Card>
  )
}

function QuickStartCard({ onStart }: { onStart: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        padding: 20,
      }}
    >
      <SectionLabel>Quick start</SectionLabel>
      <button
        onClick={onStart}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...primaryBtn,
          width: '100%',
          justifyContent: 'center',
          marginTop: 12,
          filter: hovered ? 'brightness(0.94)' : 'none',
          transition: 'filter 0.15s ease',
        }}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        Start today's practice
      </button>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '10px 0 0' }}>
        Adaptive — the engine picks questions from your weakest skills.
      </p>
    </div>
  )
}

/** SAT date countdown plus a weekly practice-day goal; both server-persisted per user. */
function TestCountdownCard({
  prefs,
  onSave,
  weekActiveDates,
}: {
  prefs: UserPrefs | null
  onSave: (p: UserPrefs) => Promise<void>
  weekActiveDates: string[]
}) {
  const [editing, setEditing] = useState(false)
  const [dateInput, setDateInput] = useState('')
  const [goalInput, setGoalInput] = useState(5)
  const [saving, setSaving] = useState(false)

  // Sync form fields when prefs load/change; open the setup form when nothing is saved yet.
  useEffect(() => {
    if (!prefs) return
    setDateInput(prefs.testDate ?? '')
    setGoalInput(prefs.weeklyGoal ?? 5)
    setEditing(!prefs.testDate)
  }, [prefs])

  if (!prefs) {
    return (
      <Card>
        <SectionLabel>Test countdown</SectionLabel>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>Loading…</p>
      </Card>
    )
  }

  const save = async () => {
    setSaving(true)
    try {
      await onSave({ testDate: dateInput || null, weeklyGoal: Math.min(7, Math.max(1, goalInput || 5)) })
      setEditing(false)
    } finally {
      setSaving(false)
    }
  }

  if (editing) {
    return (
      <Card>
        <SectionLabel>Test day &amp; weekly goal</SectionLabel>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <label style={{ ...fieldLabel, flex: 1, minWidth: 150 }}>
              Your SAT date
              <input type="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)} style={{ ...inputStyle, width: '100%' }} />
            </label>
            <label style={fieldLabel}>
              Practice days per week
              <input type="number" min={1} max={7} value={goalInput} onChange={(e) => setGoalInput(Number(e.target.value) || 1)} style={{ ...inputStyle, width: 96 }} />
            </label>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={save} disabled={saving} style={{ ...smallPrimaryBtn, opacity: saving ? 0.6 : 1, cursor: saving ? 'default' : 'pointer' }}>
              {saving ? 'Saving…' : 'Save'}
            </button>
            {prefs.testDate && <button onClick={() => setEditing(false)} style={smallGhostBtn}>Cancel</button>}
          </div>
        </div>
      </Card>
    )
  }

  const daysUntil = prefs.testDate ? daysBetweenToday(prefs.testDate) : null
  const goal = prefs.weeklyGoal ?? 5
  const practicedThisWeek = countThisWeek(weekActiveDates)

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SectionLabel>Test countdown</SectionLabel>
        <button onClick={() => setEditing(true)} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: 12, fontWeight: 700, cursor: 'pointer', padding: 0 }}>Edit</button>
      </div>
      {daysUntil !== null && (
        <div style={{ marginTop: 10 }}>
          {daysUntil >= 0 ? (
            <>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{daysUntil}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-muted)' }}>day{daysUntil === 1 ? '' : 's'} to go</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>{formatLongDate(prefs.testDate!)}</div>
            </>
          ) : (
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Your test date has passed — set a new one.</div>
          )}
        </div>
      )}
      <div style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>This week</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{Math.min(practicedThisWeek, goal)} / {goal} days</span>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {Array.from({ length: goal }, (_, i) => (
            <div key={i} style={{ flex: 1, height: 8, borderRadius: 999, backgroundColor: i < practicedThisWeek ? 'var(--accent)' : 'var(--surface)', border: '1px solid var(--hairline)' }} />
          ))}
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '8px 0 0' }}>
          {practicedThisWeek >= goal
            ? 'Weekly goal reached — nice work! 🎉'
            : `${goal - practicedThisWeek} more day${goal - practicedThisWeek === 1 ? '' : 's'} to hit your goal.`}
        </p>
      </div>
    </Card>
  )
}

function daysBetweenToday(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number)
  const target = new Date(y, m - 1, d)
  const now = new Date()
  const t0 = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return Math.round((target.getTime() - t0.getTime()) / 86_400_000)
}

function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function countThisWeek(activeDates: string[]): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay())
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6)
  const iso = (dd: Date) =>
    `${dd.getFullYear()}-${String(dd.getMonth() + 1).padStart(2, '0')}-${String(dd.getDate()).padStart(2, '0')}`
  const s = iso(start)
  const e = iso(end)
  return activeDates.filter((d) => d >= s && d <= e).length
}

const fieldLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--text)',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
}

const inputStyle: React.CSSProperties = {
  padding: '9px 11px',
  fontSize: 14,
  borderRadius: 'var(--radius-input)',
  border: '1px solid var(--hairline)',
  backgroundColor: 'var(--surface)',
  color: 'var(--text)',
}

const smallPrimaryBtn: React.CSSProperties = {
  padding: '9px 18px',
  borderRadius: 'var(--radius-btn)',
  border: 'none',
  backgroundColor: 'var(--accent)',
  color: 'var(--accent-ink)',
  fontWeight: 700,
  fontSize: 13,
  cursor: 'pointer',
}

const smallGhostBtn: React.CSSProperties = {
  padding: '9px 18px',
  borderRadius: 'var(--radius-btn)',
  border: '1px solid var(--hairline)',
  backgroundColor: 'transparent',
  color: 'var(--text-muted)',
  fontWeight: 700,
  fontSize: 13,
  cursor: 'pointer',
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        padding: 20,
      }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
      {children}
    </div>
  )
}

function MeterBar({ value }: { value: number }) {
  return (
    <div style={{ marginTop: 6, height: 5, width: 160, maxWidth: '100%', borderRadius: 999, backgroundColor: 'var(--surface-elevated)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${Math.round(value * 100)}%`, backgroundColor: 'var(--accent)' }} />
    </div>
  )
}
