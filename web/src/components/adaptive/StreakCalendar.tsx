import { useEffect, useMemo, useState } from 'react'
import type { StreakInfo } from '../../types/adaptive'

interface Props {
  streak: StreakInfo
  /** Month being displayed, as a Date on the 1st. */
  monthDate: Date
  onChangeMonth: (next: Date) => void
  /** Repair a specific ISO day; resolves when the server has recorded it. */
  onRepair: (isoDate: string) => Promise<void>
  busy?: boolean
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function iso(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Human-readable time remaining: "5h 23m" far out, "8m 12s" within the hour, "42s" at the wire. */
function formatCountdown(ms: number): string {
  const total = Math.floor(ms / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  if (h > 0) return `${h}h ${m}m`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}

type DayState = 'done' | 'repaired' | 'repairable' | 'missed' | 'future' | 'blank'

export default function StreakCalendar({ streak, monthDate, onChangeMonth, onRepair, busy }: Props) {
  const [pendingDay, setPendingDay] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()
  // "Today" is the server's universal (UTC) day. serverNow is an ISO-8601 instant, so its first
  // 10 characters are the UTC calendar date — the same boundary the streak logic uses.
  const todayIso = streak.serverNow ? streak.serverNow.slice(0, 10) : iso(new Date())

  const active = useMemo(() => new Set(streak.activeDates), [streak.activeDates])
  const repaired = useMemo(() => new Set(streak.repairedDates), [streak.repairedDates])
  const repairable = useMemo(() => new Set(streak.repairableDates), [streak.repairableDates])

  const canRepair = streak.repairsAvailable > 0 && streak.todayDone

  // Progress toward the next repair token (earned every `daysPerRepair` active days).
  const cycle = streak.daysPerRepair || 3
  const inCycle = streak.activeDayCount % cycle
  const remaining = inCycle === 0 && streak.activeDayCount > 0 ? cycle : cycle - inCycle
  const earnedAny = Math.floor(streak.activeDayCount / cycle) > 0

  const cells = useMemo(() => {
    const firstDow = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const out: { key: string; label: number | null; date: string | null; state: DayState }[] = []
    for (let i = 0; i < firstDow; i++) out.push({ key: `b${i}`, label: null, date: null, state: 'blank' })
    for (let d = 1; d <= daysInMonth; d++) {
      const date = iso(new Date(year, month, d))
      let state: DayState
      if (active.has(date)) state = 'done'
      else if (repaired.has(date)) state = 'repaired'
      else if (repairable.has(date)) state = 'repairable'
      else if (date > todayIso) state = 'future'
      else state = 'missed'
      out.push({ key: date, label: d, date, state })
    }
    return out
  }, [year, month, active, repaired, repairable, todayIso])

  const [tYear, tMonth] = todayIso.split('-').map(Number)
  const isCurrentMonth = year === tYear && month === tMonth - 1

  // Live countdown to the next universal day boundary (00:00 UTC). Anchored to the server clock
  // (serverNow) rather than the device clock, so it stays correct even if the device time or
  // time zone is wrong.
  const [msToNextDay, setMsToNextDay] = useState<number | null>(null)
  useEffect(() => {
    if (!streak.serverNow || !streak.nextDayUtc) {
      setMsToNextDay(null)
      return
    }
    const skew = Date.parse(streak.serverNow) - Date.now()
    const target = Date.parse(streak.nextDayUtc)
    const tick = () => setMsToNextDay(Math.max(0, target - (Date.now() + skew)))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [streak.serverNow, streak.nextDayUtc])

  const handleRepair = async (date: string) => {
    setError(null)
    setPendingDay(date)
    try {
      await onRepair(date)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setPendingDay(null)
    }
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-elevated)',
        border: '1px solid var(--hairline)',
        borderRadius: 'var(--radius-card)',
        padding: 20,
      }}
    >
      {/* Streak headline */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 26 }} aria-hidden>🔥</span>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1, color: 'var(--text)' }}>
              {streak.currentStreak}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              day streak
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            padding: '6px 10px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--surface)',
            color: streak.repairsAvailable > 0 ? 'var(--accent)' : 'var(--text-muted)',
          }}
          title="Earn one repair for every three days practiced."
        >
          🛠 {streak.repairsAvailable} repair{streak.repairsAvailable === 1 ? '' : 's'}
        </div>
      </div>

      {/* Month nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <NavBtn label="Previous month" dir="prev" onClick={() => onChangeMonth(new Date(year, month - 1, 1))} />
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
          {MONTHS[month]} {year}
        </span>
        <NavBtn
          label="Next month"
          dir="next"
          disabled={isCurrentMonth}
          onClick={() => !isCurrentMonth && onChangeMonth(new Date(year, month + 1, 1))}
        />
      </div>

      {/* Weekday header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 7, marginBottom: 7 }}>
        {WEEKDAYS.map((w, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)' }}>
            {w}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 7 }}>
        {cells.map((c) => (
          <DayCell
            key={c.key}
            label={c.label}
            state={c.state}
            isToday={c.date === todayIso}
            canRepair={canRepair && c.state === 'repairable'}
            pending={pendingDay === c.date}
            disabled={busy || pendingDay !== null}
            onRepair={() => c.date && handleRepair(c.date)}
          />
        ))}
      </div>

      {/* Legend / hint */}
      <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 12, fontSize: 11, color: 'var(--text-muted)' }}>
        <LegendDot color="var(--accent)" label="Practiced" />
        <LegendDot color="var(--success)" label="Repaired" />
        <LegendDot ring label="Missed" />
      </div>
      {/* Universal day-rollover countdown — server-driven, resets at 00:00 UTC. */}
      {msToNextDay !== null && (
        <p style={{ marginTop: 10, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span aria-hidden>🌐</span>
          {msToNextDay > 0 ? (
            <span>
              New day in{' '}
              <strong style={{ color: 'var(--text)', fontVariantNumeric: 'tabular-nums' }}>
                {formatCountdown(msToNextDay)}
              </strong>{' '}
              — resets at 00:00 UTC
            </span>
          ) : (
            <span>A new day is starting…</span>
          )}
        </p>
      )}
      {/* Contextual repair guidance. */}
      {canRepair && (
        <p style={{ marginTop: 6, fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>
          Tap a missed day to spend a repair and restore it.
        </p>
      )}
      {error && (
        <p style={{ marginTop: 8, fontSize: 12, color: 'var(--error)' }}>{error}</p>
      )}

      {/* Consistency stats */}
      <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <StatTile value={streak.longestStreak} label="longest streak" unit="days" />
          <StatTile value={streak.activeDates.length} label="this month" unit="days" />
        </div>
        <div style={{ marginTop: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>Next repair 🛠</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>
              {inCycle} / {cycle} days
            </span>
          </div>
          <div style={{ height: 6, borderRadius: 999, backgroundColor: 'var(--surface)', overflow: 'hidden', border: '1px solid var(--hairline)' }}>
            <div style={{ height: '100%', width: `${Math.round((inCycle / cycle) * 100)}%`, backgroundColor: 'var(--accent)' }} />
          </div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '6px 0 0', lineHeight: 1.5 }}>
            Practice {remaining} more day{remaining === 1 ? '' : 's'} to earn {earnedAny ? 'another' : 'your first'} repair.
          </p>
        </div>
      </div>
    </div>
  )
}

function StatTile({ value, label, unit }: { value: number; label: string; unit?: string }) {
  return (
    <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-input)', border: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

function DayCell({
  label,
  state,
  isToday,
  canRepair,
  pending,
  disabled,
  onRepair,
}: {
  label: number | null
  state: DayState
  isToday: boolean
  canRepair: boolean
  pending: boolean
  disabled: boolean
  onRepair: () => void
}) {
  if (label === null) return <div />

  const base: React.CSSProperties = {
    // Slightly taller than wide so the month grid reads larger vertically.
    aspectRatio: '1 / 1.12',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    borderRadius: 8,
    border: '1px solid transparent',
    position: 'relative',
  }

  let style: React.CSSProperties = { ...base, color: 'var(--text-muted)' }
  if (state === 'done') {
    style = { ...base, backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }
  } else if (state === 'repaired') {
    style = { ...base, backgroundColor: 'var(--success)', color: 'var(--success-ink, #fff)' }
  } else if (state === 'repairable') {
    style = {
      ...base,
      color: 'var(--text)',
      border: '1px dashed var(--hairline)',
      backgroundColor: 'var(--surface)',
    }
  } else if (state === 'missed') {
    style = { ...base, color: 'var(--text-muted)', opacity: 0.55 }
  } else if (state === 'future') {
    style = { ...base, color: 'var(--text-muted)', opacity: 0.3 }
  }

  // Outline today in black on top of whatever state color it already has.
  if (isToday) style = { ...style, boxShadow: '0 0 0 2px #000', zIndex: 1 }

  if (canRepair) {
    return (
      <button
        onClick={onRepair}
        disabled={disabled}
        title="Spend a repair to restore this day"
        style={{ ...style, cursor: disabled ? 'default' : 'pointer' }}
      >
        {pending ? '…' : label}
      </button>
    )
  }

  return <div style={style}>{label}</div>
}

function NavBtn({
  label,
  dir,
  onClick,
  disabled,
}: {
  label: string
  dir: 'prev' | 'next'
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--hairline)',
        backgroundColor: 'var(--surface)',
        color: 'var(--text-muted)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d={dir === 'prev' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

function LegendDot({ color, label, ring }: { color?: string; label: string; ring?: boolean }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: 3,
          backgroundColor: ring ? 'transparent' : color,
          border: ring ? '1px dashed var(--hairline)' : 'none',
        }}
      />
      {label}
    </span>
  )
}
