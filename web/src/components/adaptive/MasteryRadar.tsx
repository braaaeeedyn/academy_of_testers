import { useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import type { SkillWeight } from '../../types/adaptive'

interface Props {
  weights: SkillWeight[]
  size?: number
  /** Optional previous vector to render as a faint reference (before/after). */
  previous?: SkillWeight[]
}

const MASTERY = 0.85
const RINGS = [0.25, 0.5, 0.75, 1.0]

/** Compact human duration since an epoch-ms instant, e.g. "just now", "3 hours", "2 days". */
function relTime(ms: number): string {
  const mins = Math.floor((Date.now() - ms) / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins} min${mins === 1 ? '' : 's'}`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs} hour${hrs === 1 ? '' : 's'}`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days} day${days === 1 ? '' : 's'}`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months} month${months === 1 ? '' : 's'}`
  const years = Math.floor(days / 365)
  return `${years} year${years === 1 ? '' : 's'}`
}

/** Short labels so the axis text fits around the octagon. */
const SHORT: Record<string, string> = {
  'arithmetic-percentages': 'Arithmetic',
  'algebra-equations': 'Algebra',
  'linear-functions': 'Linear',
  'systems-of-equations': 'Systems',
  'quadratics-polynomials': 'Quadratics',
  'exponential-functions': 'Exponential',
  'data-statistics': 'Data & Stats',
  'geometry-trigonometry': 'Geometry',
}

/** Hand-rolled radar: eight fixed axes, weight ∝ radius. No charting library. */
export default function MasteryRadar({ weights, size = 360, previous }: Props) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 54 // leave room for labels
  const [hover, setHover] = useState<number | null>(null)
  const [maxHover, setMaxHover] = useState<number | null>(null)

  const axes = useMemo(
    () => [...weights].sort((a, b) => a.displayOrder - b.displayOrder),
    [weights]
  )
  const n = axes.length || 8

  // angle for axis i: start at top (12 o'clock), go clockwise
  const angle = (i: number) => -Math.PI / 2 + (2 * Math.PI * i) / n
  const point = (i: number, radius: number) => {
    const a = angle(i)
    return [cx + radius * r * Math.cos(a), cy + radius * r * Math.sin(a)] as const
  }

  const polygonPoints = (vals: number[]) =>
    vals.map((v, i) => point(i, Math.max(0.04, v)).join(',')).join(' ')

  const current = axes.map((a) => a.weight)
  const maxVals = axes.map((a) => a.maxWeight)
  const prev = previous
    ? [...previous].sort((a, b) => a.displayOrder - b.displayOrder).map((a) => a.weight)
    : null

  // Hover is resolved by pointer distance (not per-dot hit areas) so the current and max
  // markers stay independently hoverable even when they nearly coincide.
  const svgRef = useRef<SVGSVGElement>(null)
  const handleMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * size
    const my = ((e.clientY - rect.top) / rect.height) * size
    let best = { d: Infinity, i: -1, isMax: false }
    axes.forEach((a, i) => {
      const [cxi, cyi] = point(i, Math.max(0.04, a.weight))
      const [mxi, myi] = point(i, Math.max(0.04, a.maxWeight))
      const dc = Math.hypot(mx - cxi, my - cyi)
      const dm = Math.hypot(mx - mxi, my - myi)
      if (dc < best.d) best = { d: dc, i, isMax: false }
      if (dm < best.d) best = { d: dm, i, isMax: true } // strictly closer; ties favor current
    })
    if (best.i >= 0 && best.d <= 16) {
      if (best.isMax) {
        if (maxHover !== best.i) setMaxHover(best.i)
        if (hover !== null) setHover(null)
      } else {
        if (hover !== best.i) setHover(best.i)
        if (maxHover !== null) setMaxHover(null)
      }
    } else {
      if (hover !== null) setHover(null)
      if (maxHover !== null) setMaxHover(null)
    }
  }
  const handleLeave = () => {
    setHover(null)
    setMaxHover(null)
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{ maxWidth: '100%', height: 'auto', overflow: 'visible' }}
      role="img"
      aria-label="Per-skill mastery radar chart"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* grid rings */}
      {RINGS.map((ring) => (
        <polygon
          key={ring}
          points={Array.from({ length: n }, (_, i) => point(i, ring).join(',')).join(' ')}
          fill="none"
          stroke="var(--hairline)"
          strokeWidth={1}
          opacity={ring === 1 ? 0.8 : 0.4}
        />
      ))}

      {/* mastery threshold ring */}
      <polygon
        points={Array.from({ length: n }, (_, i) => point(i, MASTERY).join(',')).join(' ')}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        opacity={0.7}
      />

      {/* spokes + labels */}
      {axes.map((a, i) => {
        const [x, y] = point(i, 1)
        const [lx, ly] = point(i, 1.16)
        const anchor = Math.abs(lx - cx) < 4 ? 'middle' : lx > cx ? 'start' : 'end'
        return (
          <g key={a.skillId}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke="var(--hairline)" strokeWidth={1} opacity={0.5} />
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fontSize={11}
              fontWeight={600}
              fill={a.mastered ? 'var(--accent)' : 'var(--text-muted)'}
            >
              {SHORT[a.skillId] ?? a.skillName}
            </text>
          </g>
        )
      })}

      {/* previous vector (faint) */}
      {prev && (
        <polygon points={polygonPoints(prev)} fill="none" stroke="var(--text-muted)" strokeWidth={1.5} strokeDasharray="3 3" opacity={0.5} />
      )}

      {/* max (peak) vector: dotted outline + lighter fill, sitting behind the current one */}
      <polygon
        points={polygonPoints(maxVals)}
        fill="var(--accent)"
        fillOpacity={0.08}
        stroke="var(--accent)"
        strokeWidth={1.5}
        strokeDasharray="4 3"
        opacity={0.55}
      />

      {/* current vector */}
      <motion.polygon
        key={polygonPoints(current)}
        points={polygonPoints(current)}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        fill="var(--accent)"
        fillOpacity={0.18}
        stroke="var(--accent)"
        strokeWidth={2}
      />

      {/* max (peak) vertices — hollow markers */}
      {axes.map((a, i) => {
        const [x, y] = point(i, Math.max(0.04, a.maxWeight))
        const active = maxHover === i
        return (
          <circle key={a.skillId} cx={x} cy={y} r={active ? 4.5 : 3} fill="none" stroke="var(--accent)" strokeWidth={active ? 2 : 1.5} opacity={0.75} pointerEvents="none" />
        )
      })}

      {/* current vertices — solid markers */}
      {axes.map((a, i) => {
        const [x, y] = point(i, Math.max(0.04, a.weight))
        const active = hover === i
        return (
          <circle key={a.skillId} cx={x} cy={y} r={active ? 5.5 : 3.5} fill="var(--accent)" pointerEvents="none" />
        )
      })}

      {/* point hover: current mastery only */}
      {hover !== null && axes[hover] && (() => {
        const a = axes[hover]
        const [px, py] = point(hover, Math.max(0.04, a.weight))
        const pct = Math.round(a.weight * 100)
        const name = SHORT[a.skillId] ?? a.skillName
        const masteryLine = `${pct}% mastery${a.mastered ? ' · mastered' : ''}`
        const w = Math.max(112, Math.max(name.length, masteryLine.length) * 6.6 + 24)
        const h = 42
        let bx = px - w / 2
        const by = py - h - 12
        bx = Math.max(2, Math.min(size - w - 2, bx))
        const topY = by < 2 ? py + 12 : by
        return (
          <g pointerEvents="none">
            <rect x={bx} y={topY} width={w} height={h} rx={8} fill="var(--surface-elevated)" stroke="var(--hairline)" strokeWidth={1} />
            <text x={bx + w / 2} y={topY + 16} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text)">
              {name}
            </text>
            <text x={bx + w / 2} y={topY + 32} textAnchor="middle" fontSize={12} fontWeight={700} fill={a.mastered ? 'var(--accent)' : 'var(--text-muted)'}>
              {masteryLine}
            </text>
          </g>
        )
      })()}

      {/* max-dot hover: peak (max) mastery detail */}
      {maxHover !== null && axes[maxHover] && (() => {
        const a = axes[maxHover]
        const [px, py] = point(maxHover, Math.max(0.04, a.maxWeight))
        const pct = Math.round(a.weight * 100)
        const maxPct = Math.round(a.maxWeight * 100)
        // "At max" when the displayed current mastery equals their displayed best.
        const atMax = pct >= maxPct
        const when = a.maxWeightAt ? relTime(a.maxWeightAt) : null
        const heldText = when === 'just now' ? 'Just reached your maximum' : `At your maximum for ${when}`
        const reachedText = when === 'just now' ? 'Reached just now' : `Reached ${when} ago`
        // Peak only — the current mastery is shown by hovering the solid dot instead.
        const rows: { text: string; fill: string; size: number }[] = [
          { text: `${maxPct}% Mastery`, fill: atMax ? '#e0a800' : 'var(--text-muted)', size: 12 },
          ...(when ? [{ text: atMax ? heldText : reachedText, fill: 'var(--text-muted)', size: 11 }] : []),
        ]
        const lines = [SHORT[a.skillId] ?? a.skillName, ...rows.map((r) => r.text)]
        const longest = lines.reduce((m, s) => Math.max(m, s.length), 0)
        const w = Math.max(128, longest * 6.6 + 24)
        const h = 24 + rows.length * 16
        let bx = px - w / 2
        const by = py - h - 12
        bx = Math.max(2, Math.min(size - w - 2, bx))
        const topY = by < 2 ? py + 12 : by
        return (
          <g pointerEvents="none">
            <rect x={bx} y={topY} width={w} height={h} rx={8} fill="var(--surface-elevated)" stroke="var(--hairline)" strokeWidth={1} />
            <text x={bx + w / 2} y={topY + 16} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text)">
              {SHORT[a.skillId] ?? a.skillName}
            </text>
            {rows.map((r, i) => (
              <text key={i} x={bx + w / 2} y={topY + 32 + i * 16} textAnchor="middle" fontSize={r.size} fontWeight={700} fill={r.fill}>
                {r.text}
              </text>
            ))}
          </g>
        )
      })()}
    </svg>
  )
}
