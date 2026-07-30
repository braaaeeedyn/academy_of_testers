import { motion } from 'motion/react'

/** One class's mastery, split into tiers, ready to plot. */
export interface ClassMasteryDatum {
  subjectId: number
  name: string
  label: string
  /** mastered / total, in [0,1] — the primary rating. */
  pct: number
  mastered: number
  proficient: number
  approaching: number
  total: number
}

interface Props {
  data: ClassMasteryDatum[]
}

/** Classes at/above this share of questions mastered read as "strong". */
const THRESHOLD = 0.85

/** Tier fill colors, layered from strongest (mastered) to lightest (approaching). */
const TIER_FILL = {
  mastered: 'var(--accent)',
  proficient: 'color-mix(in srgb, var(--accent) 55%, transparent)',
  approaching: 'color-mix(in srgb, var(--accent) 26%, transparent)',
}

/**
 * AP mastery visual for the planner: three thin bars per class — one each for mastered,
 * proficient (2 correct), and approaching (1 correct) — so every tier is visualized separately
 * against a 100% cap track.
 */
export default function ApMasteryChart({ data }: Props) {
  return (
    <div className="w-full">
      <Bars data={data} />
      <Legend />
    </div>
  )
}

function Legend() {
  const items: { key: keyof typeof TIER_FILL; label: string }[] = [
    { key: 'mastered', label: 'Mastered · 3 correct' },
    { key: 'proficient', label: 'Proficient · 2 correct' },
    { key: 'approaching', label: 'Approaching · 1 correct' },
  ]
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 mt-4">
      {items.map((it) => (
        <span key={it.key} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: TIER_FILL[it.key] }} />
          {it.label}
        </span>
      ))}
    </div>
  )
}

function TierBar({ label, count, total, fill }: { label: string; count: number; total: number; fill: string }) {
  const frac = total === 0 ? 0 : count / total
  return (
    <div className="flex items-stretch gap-2.5">
      <span className="w-[74px] flex-shrink-0 flex items-center text-[11px] font-medium leading-none" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
      <div className="flex-1 h-3 overflow-hidden" style={{ backgroundColor: 'color-mix(in srgb, var(--text) 10%, transparent)' }}>
        <motion.div
          className="h-full"
          initial={{ width: 0 }}
          animate={{ width: `${frac * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ backgroundColor: fill }}
        />
      </div>
      <span className="w-9 flex-shrink-0 flex items-center justify-end text-[11px] font-semibold tabular-nums leading-none" style={{ color: 'var(--text-muted)' }}>
        {count}
      </span>
    </div>
  )
}

function Bars({ data }: { data: ClassMasteryDatum[] }) {
  return (
    <div className="w-full space-y-6 py-2">
      {data.map((d) => {
        const pct = Math.round(d.pct * 100)
        const strong = d.pct >= THRESHOLD
        return (
          <div key={d.subjectId}>
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <span className="text-sm font-semibold truncate" title={d.name}>
                {d.label}
              </span>
              <span className="text-sm font-bold flex-shrink-0" style={{ color: strong ? 'var(--accent)' : 'var(--text-muted)' }}>
                {pct}% mastered{' '}
                <span className="font-medium" style={{ color: 'var(--text-muted)' }}>
                  · {d.mastered}/{d.total}
                </span>
              </span>
            </div>
            {/* three thin bars stacked flush, each vs the 100% cap track, so tiers are comparable */}
            <div className="overflow-hidden rounded-md">
              <TierBar label="Mastered" count={d.mastered} total={d.total} fill={TIER_FILL.mastered} />
              <TierBar label="Proficient" count={d.proficient} total={d.total} fill={TIER_FILL.proficient} />
              <TierBar label="Approaching" count={d.approaching} total={d.total} fill={TIER_FILL.approaching} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
