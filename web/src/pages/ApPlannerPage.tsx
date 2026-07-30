import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getExams, getSubjectsByExam, getApCourses, saveApCourses, getProgress } from '../services/api'
import type { Subject } from '../types/api'
import type { CardMastery } from '../types/flashcards'
import type { SubjectUnitBank } from '../data/unitBank/types'
import { subjectSlug } from '../utils/slug'
import { getSubjectIcon } from '../data/subjectIcons'
import { AP_SUBJECT_CATEGORIES } from '../data/apCategories'
import ApExamCountdown from '../components/ApExamCountdown'
import ApMasteryChart, { type ClassMasteryDatum } from '../components/adaptive/ApMasteryChart'
import { computeClassMastery, shortClassLabel } from '../utils/apMastery'
import { getUnitBank } from '../data/unitBank/lookup'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-5 h-5'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

/** A single tier count in the mastery-map summary: swatch + number + label. */
function TierStat({ label, value, fill }: { label: string; value: number; fill: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: fill }} />
      <span className="font-display text-2xl font-bold leading-none">{value}</span>
      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  )
}

export default function ApPlannerPage() {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [savedIds, setSavedIds] = useState<number[]>([])
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set())
  const [editing, setEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (authLoading || !isAuthenticated) {
      setLoading(false)
      return
    }
    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        const exams = await getExams()
        const ap = exams.find((e) => e.name.toUpperCase() === 'AP')
        if (!ap) throw new Error('AP exam not found')
        const [subjectData, courseIds] = await Promise.all([
          getSubjectsByExam(ap.id),
          getApCourses(),
        ])
        if (cancelled) return
        setSubjects(subjectData)
        setSavedIds(courseIds)
        setSelectedIds(new Set(courseIds))
        setEditing(courseIds.length === 0)
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [authLoading, isAuthenticated])

  const subjectById = useMemo(() => {
    const map = new Map<number, Subject>()
    subjects.forEach((s) => map.set(s.id, s))
    return map
  }, [subjects])

  const myClasses = useMemo(
    () => savedIds.map((id) => subjectById.get(id)).filter((s): s is Subject => !!s),
    [savedIds, subjectById]
  )

  // Per-class mastery for the chart: only classes that actually have a practice bank can be
  // measured. Mastery comes from the user's /progress rows for that subject (see apMastery).
  const [masteryData, setMasteryData] = useState<ClassMasteryDatum[]>([])
  const [masteryLoading, setMasteryLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) return
    const withBanks = savedIds
      .map((id) => subjectById.get(id))
      .filter((s): s is Subject => !!s)
      .map((s) => ({ subject: s, bank: getUnitBank(s.name) }))
      .filter((x): x is { subject: Subject; bank: SubjectUnitBank } => !!x.bank)
    if (withBanks.length === 0) {
      setMasteryData([])
      return
    }
    let cancelled = false
    setMasteryLoading(true)
    Promise.all(
      withBanks.map(async ({ subject, bank }) => {
        let progress: CardMastery[] = []
        try {
          progress = await getProgress(subject.id)
        } catch {
          progress = []
        }
        const m = computeClassMastery(bank, progress, subject.id)
        return {
          subjectId: subject.id,
          name: subject.name,
          label: shortClassLabel(subject.name),
          pct: m.pct,
          mastered: m.mastered,
          proficient: m.proficient,
          approaching: m.approaching,
          total: m.total,
        } satisfies ClassMasteryDatum
      })
    ).then((data) => {
      if (!cancelled) {
        setMasteryData(data)
        setMasteryLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [savedIds, subjectById, isAuthenticated])

  const totalMastered = useMemo(() => masteryData.reduce((n, d) => n + d.mastered, 0), [masteryData])
  const totalProficient = useMemo(() => masteryData.reduce((n, d) => n + d.proficient, 0), [masteryData])
  const totalApproaching = useMemo(() => masteryData.reduce((n, d) => n + d.approaching, 0), [masteryData])
  const totalQuestions = useMemo(() => masteryData.reduce((n, d) => n + d.total, 0), [masteryData])

  const categoriesWithSubjects = useMemo(
    () =>
      AP_SUBJECT_CATEGORIES.map((cat) => ({
        ...cat,
        subjects: cat.subjectNames
          .map((name) => subjects.find((s) => s.name === name))
          .filter((s): s is Subject => s !== undefined),
      })).filter((cat) => cat.subjects.length > 0),
    [subjects]
  )

  const toggle = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      const saved = await saveApCourses([...selectedIds])
      setSavedIds(saved)
      setSelectedIds(new Set(saved))
      setEditing(saved.length === 0)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--text-muted)' }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div
          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          <Icon path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" className="w-8 h-8" />
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight mb-3">My AP Planner</h1>
        <p className="text-sm leading-relaxed max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
          Pick the AP classes you're taking and get a personalized hub with every study tool for
          exactly those subjects — unit overviews, review quizzes, FRQ practice, and more.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            Sign in to start
          </Link>
          <Link
            to="/ap/hub"
            className="px-6 py-2.5 rounded-lg text-sm font-medium border"
            style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            Back to AP Hub
          </Link>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--error)' }}>
          Error: {error}
        </div>
        <button
          onClick={() => navigate('/ap/hub')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          Back to AP Hub
        </button>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Personalized
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
            My AP Planner
          </h1>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors"
              style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <Icon path="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" className="w-4 h-4" />
              Edit classes
            </button>
          )}
          <button
            onClick={() => navigate('/ap/hub')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors"
            style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            AP Hub
          </button>
        </div>
      </div>

      {/* CLASS PICKER */}
      {editing ? (
        <div className="mt-8">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {savedIds.length === 0
              ? 'Welcome! Select the AP classes you’re taking this year — your planner will show study tools for exactly those subjects.'
              : 'Add or drop classes, then save.'}
          </p>

          <div className="mt-6 space-y-8">
            {categoriesWithSubjects.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                  >
                    <Icon path={cat.iconPath} className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.1em]" style={{ color: 'var(--text-muted)' }}>
                    {cat.category}
                  </h2>
                </div>
                <div className="grid gap-2 [grid-template-columns:repeat(auto-fill,minmax(232px,1fr))]">
                  {cat.subjects.map((subject) => {
                    const checked = selectedIds.has(subject.id)
                    return (
                      <button
                        key={subject.id}
                        onClick={() => toggle(subject.id)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border text-left cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2"
                        style={{
                          backgroundColor: checked
                            ? 'color-mix(in srgb, var(--accent) 12%, var(--surface))'
                            : 'var(--surface)',
                          borderColor: checked ? 'var(--accent)' : 'var(--hairline)',
                          '--tw-ring-color': 'var(--accent)',
                        } as React.CSSProperties}
                      >
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: checked ? 'var(--accent)' : 'transparent',
                            borderColor: checked ? 'var(--accent)' : 'var(--hairline)',
                            color: 'var(--accent-ink)',
                          }}
                        >
                          {checked && (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm font-semibold leading-snug">{subject.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Save bar */}
          <div
            className="sticky bottom-4 mt-8 flex items-center justify-between gap-4 px-5 py-3.5 rounded-2xl border shadow-lg"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
          >
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {selectedIds.size} class{selectedIds.size !== 1 ? 'es' : ''} selected
            </span>
            <div className="flex items-center gap-2">
              {savedIds.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedIds(new Set(savedIds))
                    setEditing(false)
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium border cursor-pointer"
                  style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                >
                  Cancel
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={saving || selectedIds.size === 0}
                className="px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                {saving ? 'Saving…' : 'Save my classes'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* PERSONALIZED HUB */
        <div className="mt-8 space-y-6">
          {/* MASTERY MAP */}
          <div
            className="rounded-2xl border p-5 sm:p-6"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] mb-1.5" style={{ color: 'var(--text-muted)' }}>
                  <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" className="w-4 h-4" />
                  Your mastery map
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Built from your Unit Practice results — {totalMastered} of {totalQuestions} questions mastered across your classes.
                </p>
              </div>
              {masteryData.length > 0 && (
                <div className="flex items-center gap-4 flex-wrap">
                  <TierStat label="Mastered" value={totalMastered} fill="var(--accent)" />
                  <TierStat label="Proficient" value={totalProficient} fill="color-mix(in srgb, var(--accent) 55%, transparent)" />
                  <TierStat label="Approaching" value={totalApproaching} fill="color-mix(in srgb, var(--accent) 26%, transparent)" />
                </div>
              )}
            </div>

            <div className="mt-5">
              {masteryLoading && masteryData.length === 0 ? (
                <p className="text-sm py-8 text-center" style={{ color: 'var(--text-muted)' }}>
                  Loading your mastery…
                </p>
              ) : masteryData.length === 0 ? (
                <p className="text-sm py-8 text-center" style={{ color: 'var(--text-muted)' }}>
                  None of your classes have practice questions yet. Add a class with a Practice Questions
                  tool to start building your mastery map.
                </p>
              ) : (
                <>
                  <div className="flex justify-center">
                    <ApMasteryChart data={masteryData} />
                  </div>
                  {totalMastered === 0 && (
                    <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-muted)' }}>
                      Answer questions in <span className="font-semibold" style={{ color: 'var(--text)' }}>Unit Practice</span> to
                      fill this in — a question counts as mastered after 3 correct answers, 2 in a row.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0 grid gap-4 content-start [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]">
            {myClasses.map((subject, i) => {
              const slug = subjectSlug(subject.name)
              const hasBank = !!getUnitBank(subject.name)
              return (
                <div
                  key={subject.id}
                  className="hub-tile-in rounded-2xl border p-5 transition-all hover:shadow-md"
                  style={{
                    backgroundColor: 'var(--surface-elevated)',
                    borderColor: 'var(--hairline)',
                    animationDelay: `${Math.min(i, 8) * 45}ms`,
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                    >
                      <Icon path={getSubjectIcon(subject.name)} className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link to={`/ap/${slug}?from=planner`} className="font-display text-lg font-bold leading-tight hover:underline">
                        {subject.name}
                      </Link>
                      {subject.description && (
                        <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-muted)' }}>
                          {subject.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {hasBank && (
                      <Link
                        to={`/ap/${slug}?r=unit-practice&from=planner`}
                        className="flex items-center justify-center gap-2 text-sm font-semibold px-3 py-2.5 rounded-lg transition-all hover:opacity-90 hover:shadow-sm"
                        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                      >
                        <Icon
                          path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          className="w-4 h-4"
                        />
                        Practice Questions
                      </Link>
                    )}
                    <Link
                      to={`/ap/${slug}?from=planner`}
                      className={`flex items-center justify-center gap-2 text-sm font-semibold px-3 py-2.5 rounded-lg border transition-all hover:shadow-sm ${
                        hasBank ? '' : 'col-span-2'
                      }`}
                      style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                    >
                      <Icon
                        path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        className="w-4 h-4"
                      />
                      Review Material
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Study rail */}
          <aside className="lg:w-72 flex-shrink-0 space-y-4">
            <ApExamCountdown />
            <div
              className="rounded-2xl border p-5"
              style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
            >
              <div
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] mb-3"
                style={{ color: 'var(--text-muted)' }}
              >
                <Icon path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" className="w-4 h-4" />
                Your schedule
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold leading-none">{myClasses.length}</span>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  AP class{myClasses.length !== 1 ? 'es' : ''}
                </span>
              </div>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                Taking something new? Use <span className="font-semibold" style={{ color: 'var(--text)' }}>Edit classes</span> to
                keep your planner current.
              </p>
            </div>
          </aside>
          </div>
        </div>
      )}
    </div>
  )
}
