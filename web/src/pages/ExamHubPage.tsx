import { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getExams, getSubjectsByExam } from '../services/api'
import type { Exam, Subject } from '../types/api'
import { examSlug as toExamSlug, subjectSlug } from '../utils/slug'
import { getSubjectIcon } from '../data/subjectIcons'
import { AP_SUBJECT_CATEGORIES } from '../data/apCategories'
import ApExamCountdown from '../components/ApExamCountdown'

// The College Board 5-point AP score scale and what each score means.
const AP_SCORE_SCALE: { score: number; label: string; qualifying: boolean }[] = [
  { score: 5, label: 'Extremely well qualified', qualifying: true },
  { score: 4, label: 'Well qualified', qualifying: true },
  { score: 3, label: 'Qualified', qualifying: true },
  { score: 2, label: 'Possibly qualified', qualifying: false },
  { score: 1, label: 'No recommendation', qualifying: false },
]

// General AP strategy tips that rotate in the study rail.
const STUDY_TIPS = [
  'There’s no penalty for wrong multiple-choice answers — never leave a question blank.',
  'On free response, check each part’s point value and spend your time in proportion.',
  'Show your work on math and science FRQs — you can earn partial credit even with a wrong final answer.',
  'For source-based questions, tie every claim to specific evidence; graders reward explicit support.',
  'A 3 is passing at most colleges, but always check each school’s AP credit policy.',
  'Practice with official released FRQs and their rubrics so you know exactly what graders look for.',
]


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

export default function ExamHubPage() {
  const { examSlug } = useParams<{ examSlug: string }>()
  const navigate = useNavigate()
  const [exam, setExam] = useState<Exam | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      if (!examSlug) return

      try {
        setLoading(true)
        const exams = await getExams()
        const found = exams.find((e) => toExamSlug(e.name) === examSlug.toLowerCase())
        setExam(found || null)
        if (found) {
          const subjectData = await getSubjectsByExam(found.id)
          setSubjects(subjectData)
        } else {
          setError('Exam not found')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [examSlug])

  const isAP = exam?.name.toUpperCase() === 'AP'

  const allSubjects = useMemo(
    () => subjects.filter((s) => s.name.toLowerCase() !== 'sat essay'),
    [subjects]
  )

  const categoriesWithSubjects = useMemo(() => {
    if (!isAP) return []
    return AP_SUBJECT_CATEGORIES.map((cat) => ({
      ...cat,
      subjects: cat.subjectNames
        .map((name) => subjects.find((s) => s.name === name))
        .filter((s): s is Subject => s !== undefined),
    })).filter((cat) => cat.subjects.length > 0)
  }, [isAP, subjects])

  const activeCategory = useMemo(
    () => categoriesWithSubjects.find((c) => c.category === selectedCategory) ?? null,
    [categoriesWithSubjects, selectedCategory]
  )

  const query = search.toLowerCase().trim()

  const searchResults = useMemo(() => {
    if (!query) return []
    return allSubjects.filter((s) => s.name.toLowerCase().includes(query))
  }, [allSubjects, query])

  // View resolution: search wins, then a drilled-in category, else the hub grid.
  const mode: 'search' | 'category' | 'grid' | 'flat' = query
    ? 'search'
    : activeCategory
      ? 'category'
      : isAP
        ? 'grid'
        : 'flat'

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--text-muted)' }}>
          Loading...
        </div>
      </div>
    )
  }

  if (error || !exam) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--error)' }}>
          Error: {error || 'Exam not found'}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--text)' }}
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Exam Hub
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-none tracking-tight">
            {exam.name} Exams
          </h1>
        </div>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0"
          style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </button>
      </div>

      {/* Ways to study — planner first, then exam facts (AP only) */}
      {isAP && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-6">
          <Link
            to="/ap/planner"
            className="group sm:col-span-3 flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            <div
              className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'color-mix(in srgb, var(--accent-ink) 14%, transparent)' }}
            >
              <Icon
                path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                className="w-6 h-6"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg font-bold leading-tight">My AP Planner</h3>
              <p className="text-xs mt-0.5 opacity-85">
                Pick your classes — get a personalized hub with every study tool for your subjects
              </p>
            </div>
            <svg
              className="flex-shrink-0 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="sm:col-span-2">
            <ActionCard
              iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              title="Scoring & Structure"
              subtitle="Score breakdowns & section timing"
              to={`/${examSlug}/exam-info`}
            />
          </div>
        </div>
      )}

      {/* Results (left) + study rail (right) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-8">
        <div className="flex-1 min-w-0">
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
          style={{ color: 'var(--text-muted)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search all ${exam.name} subjects...`}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-shadow"
          style={{
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            borderColor: 'var(--hairline)',
            '--tw-ring-color': 'var(--accent)',
          } as React.CSSProperties}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:opacity-70 cursor-pointer"
            style={{ color: 'var(--text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* HUB LANDING — compact category grid, no long scroll */}
      {mode === 'grid' && (
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-4" style={{ color: 'var(--text-muted)' }}>
            Browse by category
          </p>
          <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(232px,1fr))]">
            {categoriesWithSubjects.map((cat, i) => (
              <CategoryTile
                key={cat.category}
                index={i}
                iconPath={cat.iconPath}
                label={cat.category}
                count={cat.subjects.length}
                preview={cat.subjects.map((s) => s.name.replace(/^AP /, '')).join(' · ')}
                onClick={() => setSelectedCategory(cat.category)}
              />
            ))}
          </div>
        </div>
      )}

      {/* CATEGORY DETAIL — drilled into one category */}
      {mode === 'category' && activeCategory && (
        <div className="mt-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            All categories
          </button>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              <Icon path={activeCategory.iconPath} className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl font-bold">{activeCategory.category}</h2>
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }}
            >
              {activeCategory.subjects.length}
            </span>
          </div>
          <div className="space-y-2">
            {activeCategory.subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        </div>
      )}

      {/* SEARCH RESULTS — flat list across all subjects */}
      {mode === 'search' && (
        <div className="mt-6">
          <p className="text-xs font-medium mb-4" style={{ color: 'var(--text-muted)' }}>
            {searchResults.length} subject{searchResults.length !== 1 ? 's' : ''} matching "
            <span className="font-bold">{search}</span>"
          </p>
          {searchResults.length > 0 ? (
            <div className="space-y-2">
              {searchResults.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          ) : (
            <div
              className="text-center py-12 rounded-2xl border"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <div className="flex justify-center mb-3" style={{ color: 'var(--text-muted)' }}>
                <Icon path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" className="w-10 h-10 opacity-50" />
              </div>
              <p className="font-semibold mb-1">No subjects found</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Try a different search term
              </p>
              <button
                onClick={() => setSearch('')}
                className="mt-4 text-sm font-semibold underline cursor-pointer"
                style={{ color: 'var(--accent)' }}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      )}

      {/* NON-AP FALLBACK — flat subject list */}
      {mode === 'flat' && (
        <div className="mt-6 space-y-2">
          {allSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      )}
        </div>

        {/* Study rail — countdown + popular subjects (AP only) */}
        {isAP && (
          <aside className="lg:w-72 flex-shrink-0 space-y-4">
            <ApExamCountdown />
            <ScoreScale />
            <StudyTipCarousel />
          </aside>
        )}
      </div>
    </div>
  )
}

function CategoryTile({
  index,
  iconPath,
  label,
  count,
  preview,
  onClick,
}: {
  index: number
  iconPath: string
  label: string
  count: number
  preview: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="hub-tile-in group flex flex-col gap-3 px-4 py-8 rounded-2xl border text-left cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2"
      style={{
        backgroundColor: 'var(--surface-elevated)',
        borderColor: 'var(--hairline)',
        animationDelay: `${Math.min(index, 8) * 45}ms`,
        '--tw-ring-color': 'var(--accent)',
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
        >
          <Icon path={iconPath} className="w-5 h-5" />
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }}
        >
          {count}
        </span>
      </div>
      <div>
        <h3 className="font-display text-base font-bold leading-snug group-hover:underline">{label}</h3>
        <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
          {preview}
        </p>
      </div>
    </button>
  )
}

function SubjectCard({ subject }: { subject: Subject }) {
  const iconPath = getSubjectIcon(subject.name)

  return (
    <Link
      to={`/${toExamSlug(subject.examName)}/${subjectSlug(subject.name)}`}
      className="group flex items-center gap-4 px-5 py-3.5 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        <Icon path={iconPath} className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold group-hover:underline">
          {subject.name}
        </h4>
        {subject.description && (
          <p
            className="text-xs mt-0.5"
            style={{ color: 'var(--text-muted)' }}
          >
            {subject.description}
          </p>
        )}
      </div>
      <svg
        className="flex-shrink-0 w-4 h-4 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

function ActionCard({
  iconPath,
  title,
  subtitle,
  to,
  onClick,
}: {
  iconPath: string
  title: string
  subtitle: string
  to?: string
  onClick?: () => void
}) {
  const className =
    'group flex items-center gap-3 w-full h-full text-left p-4 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5'
  const style = {
    backgroundColor: 'var(--surface-elevated)',
    borderColor: 'var(--hairline)',
  } as React.CSSProperties
  const inner = (
    <>
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        <Icon path={iconPath} className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold leading-tight">{title}</h3>
        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
          {subtitle}
        </p>
      </div>
      <svg
        className="flex-shrink-0 w-4 h-4 opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        {inner}
      </Link>
    )
  }
  return (
    <button type="button" onClick={onClick} className={`${className} cursor-pointer`} style={style}>
      {inner}
    </button>
  )
}

function ScoreScale() {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
    >
      <div
        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] mb-3"
        style={{ color: 'var(--text-muted)' }}
      >
        <Icon
          path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          className="w-4 h-4"
        />
        AP score scale
      </div>
      <ul className="space-y-1.5">
        {AP_SCORE_SCALE.map((row) => (
          <li key={row.score} className="flex items-center gap-2.5">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={
                row.qualifying
                  ? { backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }
                  : {
                      backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)',
                      color: 'var(--text-muted)',
                    }
              }
            >
              {row.score}
            </span>
            <span className="text-xs" style={{ color: 'var(--text)' }}>
              {row.label}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-xs mt-3 pt-3" style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--hairline)' }}>
        Most colleges grant credit for a <span className="font-semibold" style={{ color: 'var(--text)' }}>3 or higher</span>.
      </p>
    </div>
  )
}

function StudyTipCarousel() {
  const [index, setIndex] = useState(0)
  const go = (next: number) => setIndex((next + STUDY_TIPS.length) % STUDY_TIPS.length)

  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % STUDY_TIPS.length), 9000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="rounded-2xl border p-5"
      style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]"
          style={{ color: 'var(--text-muted)' }}
        >
          <Icon
            path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            className="w-4 h-4"
          />
          Study tip
        </div>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next tip"
          className="p-1 rounded-md cursor-pointer transition-colors hover:opacity-70"
          style={{ color: 'var(--text-muted)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p key={index} className="hub-fade text-sm leading-relaxed min-h-[3.75rem]" style={{ color: 'var(--text)' }}>
        {STUDY_TIPS[index]}
      </p>
      <div className="flex items-center gap-1.5 mt-3">
        {STUDY_TIPS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Tip ${i + 1}`}
            className="h-1.5 rounded-full transition-all cursor-pointer"
            style={{
              width: i === index ? '1.25rem' : '0.375rem',
              backgroundColor: i === index ? 'var(--accent)' : 'color-mix(in srgb, var(--text) 18%, transparent)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
