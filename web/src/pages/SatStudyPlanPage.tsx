import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageBand from '../components/PageBand'
import StudyPlanWeeks from '../components/StudyPlanWeeks'
import { useAuth } from '../context/AuthContext'
import { getMastery, getUserPrefs, saveUserPrefs } from '../services/api'
import { SAT_PREP_TOPICS } from '../data/satPrepContent'
import type { SkillWeight, UserPrefs } from '../types/adaptive'
import { buildWeekPlan, isValidIso, localDateToIso, weeksUntil } from '../utils/studyPlan'

const STORAGE_KEY = 'aot.studyPlan.sat'

function loadLocalDate(): string {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v && isValidIso(v) ? v : ''
  } catch {
    return ''
  }
}

function saveLocalDate(iso: string) {
  try {
    if (iso) localStorage.setItem(STORAGE_KEY, iso)
    else localStorage.removeItem(STORAGE_KEY)
  } catch {
    // storage blocked: the date just isn't remembered
  }
}

export default function SatStudyPlanPage() {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const [testIso, setTestIso] = useState('')
  const [prefs, setPrefs] = useState<UserPrefs | null>(null)
  const [weights, setWeights] = useState<SkillWeight[] | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)

  useEffect(() => {
    if (authLoading) return
    if (!isAuthenticated) {
      setTestIso(loadLocalDate())
      return
    }
    let cancelled = false
    getUserPrefs()
      .then((p) => {
        if (cancelled) return
        setPrefs(p)
        setTestIso(p.testDate ?? '')
      })
      .catch(() => {})
    // Weights arrive pre-decayed from the server; we only sort by them.
    getMastery()
      .then((w) => {
        if (!cancelled) setWeights(w)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [isAuthenticated, authLoading])

  const topics = useMemo(() => {
    const base = SAT_PREP_TOPICS.map((t) => ({ id: t.id, label: t.name }))
    if (!weights || weights.length === 0) return base
    const byId = new Map(weights.map((w) => [w.skillId, w.weight]))
    // Weakest first; topics without a weight keep their listed order after the weighted ones.
    return base
      .map((t, i) => ({ t, i, w: byId.get(t.id) }))
      .sort((a, b) => {
        if (a.w === undefined && b.w === undefined) return a.i - b.i
        if (a.w === undefined) return 1
        if (b.w === undefined) return -1
        return a.w - b.w || a.i - b.i
      })
      .map((x) => x.t)
  }, [weights])

  const todayIso = localDateToIso(new Date())
  const weeks = useMemo(
    () => (testIso ? buildWeekPlan(testIso, todayIso, topics) : []),
    [testIso, todayIso, topics]
  )
  const weeksLeft = testIso ? weeksUntil(testIso, todayIso) : 0

  const changeDate = (iso: string) => {
    if (iso && !isValidIso(iso)) return
    setTestIso(iso)
    setSaveError(null)
    if (!isAuthenticated) {
      saveLocalDate(iso)
      return
    }
    saveUserPrefs({ testDate: iso || null, weeklyGoal: prefs?.weeklyGoal ?? null })
      .then(setPrefs)
      .catch(() => setSaveError('Could not save your test date. It will reset when you leave this page.'))
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[{ label: 'SAT hub', onClick: () => navigate('/sat/hub') }, { label: 'Study plan' }]}
        back={{ label: 'SAT hub', onClick: () => navigate('/sat/hub') }}
        watermark="PLAN"
        title="Week-by-week SAT Math plan"
        subtitle="Set your test date and the eight Math topics are spread across the weeks you have left, with a full practice test and a final review before test day."
      />

      <div
        className="mt-8 rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-end gap-4"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
      >
        <label>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Test date
          </span>
          <input
            type="date"
            value={testIso}
            onChange={(e) => changeDate(e.target.value)}
            className="px-3 py-2 rounded-lg border text-sm"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          />
        </label>
        <p className="flex-1 text-xs" style={{ color: 'var(--text-muted)' }}>
          {isAuthenticated
            ? weights && weights.length > 0
              ? 'Saved to your account. Topics are ordered weakest first, from your SAT Academy mastery.'
              : 'Saved to your account. Take the SAT Academy diagnostic to order topics weakest first.'
            : 'Saved on this device. Sign in to save it to your account and order topics by your mastery.'}{' '}
          Check College Board for this year's test dates.
        </p>
      </div>
      {saveError && (
        <p className="text-xs mt-2" style={{ color: 'var(--error)' }}>
          {saveError}
        </p>
      )}

      {!testIso ? (
        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          Pick your test date to build a plan.
        </p>
      ) : weeks.length === 0 ? (
        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          That date is today or already past. Set your upcoming test date to build a plan.
        </p>
      ) : (
        <div className="mt-6">
          <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
            <h2 className="font-display text-2xl font-bold">
              {weeksLeft} week{weeksLeft === 1 ? '' : 's'} to go
            </h2>
            <Link to="/sat/adaptive" className="text-sm font-semibold hover:underline" style={{ color: 'var(--text)' }}>
              Open the SAT Academy →
            </Link>
          </div>
          <StudyPlanWeeks
            weeks={weeks}
            topicLink={(id) => `/sat/prep/${id}`}
            practiceLabel="Study"
            extraLinks={[
              { label: 'SAT Academy practice', to: '/sat/adaptive' },
              { label: 'Mistake Notebook', to: '/notebook' },
              { label: 'Desmos guide', to: '/sat/prep/desmos' },
            ]}
          />
        </div>
      )}
    </div>
  )
}
