import { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { getExams, getSubjectsByExam, getResourcesBySubject } from '../services/api'
import type { Subject, StudyResource } from '../types/api'
import { examSlug as toExamSlug, subjectSlug as toSubjectSlug } from '../utils/slug'
import { getSubjectIcon } from '../data/subjectIcons'
import { getUnitOverviewBySubjectName } from '../data/unitOverviews'
import LoadingScreen from '../components/LoadingScreen'
import UnitOverviews from '../components/UnitOverviews'
import UnitPractice from '../components/UnitPractice'
import { getUnitBank } from '../data/unitBank/lookup'
import { getVideosBySubjectName, getVideoNoteBySubjectName } from '../data/videoResources'
import VideoResources from '../components/VideoResources'
import FlashCards from '../components/FlashCards'
import FrqPractice from '../components/FrqPractice'
import InterleavedReview from '../components/InterleavedReview'
import MockExam from '../components/MockExam'
import SubjectReference from '../components/SubjectReference'
import { getFrqSetBySubjectName } from '../data/frq'
import { getReferenceBySubjectName } from '../data/reference'
import { getMixedQuestions } from '../data/questionBank'

type ResourceCategory =
  | 'cheat-sheets'
  | 'unit-practice'
  | 'video-resources'
  | 'practice-exams'
  | 'flash-cards'
  | 'frq-practice'
  | 'interleaved-review'
  | 'mock-exam'
  | 'reference'

/** Retired category slugs still living in old links map onto the unified practice surface. */
const LEGACY_CATEGORY_MAP: Record<string, ResourceCategory> = {
  'practice-problems': 'unit-practice',
  'topical-review': 'unit-practice',
}

interface CategoryInfo {
  id: ResourceCategory
  title: string
  description: string
  iconPath: string
}

const BASE_CATEGORIES: CategoryInfo[] = [
  {
    id: 'cheat-sheets',
    title: 'Unit Overviews',
    description: 'High-level summaries of each unit and subunit.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    id: 'unit-practice',
    title: 'Practice Questions',
    description: 'Unit-by-unit multiple choice with difficulty filters, keyboard answering, and explanations.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    id: 'video-resources',
    title: 'Video Resources',
    description: 'Video walkthroughs, concept reviews, and tutorials.',
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  },
  {
    id: 'practice-exams',
    title: 'Practice Exams',
    description: 'Full-length and released practice exams from past years.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    id: 'flash-cards',
    title: 'Flash Cards',
    description: 'Quick-fire flashcards to reinforce key terms and concepts.',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    id: 'reference',
    title: 'Reference & Formulas',
    description: 'Formula sheet, key-terms glossary, and what’s most tested.',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    id: 'frq-practice',
    title: 'FRQ & Essay Practice',
    description: 'Write full free-responses; get AI grading against the official rubric.',
    iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
  {
    id: 'interleaved-review',
    title: 'Mixed Review',
    description: 'Cumulative quiz that interleaves questions from every unit.',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    id: 'mock-exam',
    title: 'Timed Mock Exam',
    description: 'Full timed MCQ mock with a predicted 1–5 AP score.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

/** Which section each resource category belongs to on the subject landing. */
const CARD_GROUP: Record<ResourceCategory, 'learn' | 'practice'> = {
  'cheat-sheets': 'learn',
  'video-resources': 'learn',
  reference: 'learn',
  'unit-practice': 'practice',
  'interleaved-review': 'practice',
  'frq-practice': 'practice',
  'mock-exam': 'practice',
  'practice-exams': 'practice',
  'flash-cards': 'practice',
}

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

export default function ResourcesPage() {
  const { examSlug, subjectSlug } = useParams<{ examSlug: string; subjectSlug: string }>()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [resources, setResources] = useState<StudyResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  // Active resource category is mirrored in the URL (?r=…) so a view is shareable and the
  // browser Back button steps out of it.
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | null>(() => {
    const r = searchParams.get('r')
    if (!r) return null
    return LEGACY_CATEGORY_MAP[r] ?? (r as ResourceCategory)
  })
  // Entered from the AP planner — the Back button should return there, not to the class landing.
  const fromPlanner = searchParams.get('from') === 'planner'

  useEffect(() => {
    const next = new URLSearchParams(searchParams)
    if (activeCategory) next.set('r', activeCategory)
    else next.delete('r')
    // The FRQ prompt param only applies inside FRQ practice.
    if (activeCategory !== 'frq-practice') next.delete('p')
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  const unitBank = useMemo(
    () => (subject ? getUnitBank(subject.name) : undefined),
    [subject]
  )

  const unitOverview = useMemo(
    () => (subject ? getUnitOverviewBySubjectName(subject.name) : undefined),
    [subject]
  )

  const subjectVideos = useMemo(
    () => (subject ? getVideosBySubjectName(subject.name) : undefined),
    [subject]
  )

  const subjectVideoNote = useMemo(
    () => (subject ? getVideoNoteBySubjectName(subject.name) : undefined),
    [subject]
  )

  const frqSet = useMemo(
    () => (subject ? getFrqSetBySubjectName(subject.name) : undefined),
    [subject]
  )

  const reference = useMemo(
    () => (subject ? getReferenceBySubjectName(subject.name) : undefined),
    [subject]
  )

  // Combined MCQ pool that powers Mixed Review + the Mock Exam.
  const questionBank = useMemo(
    () => (subject ? getMixedQuestions(subject.name) : []),
    [subject]
  )

  const isSat = subject ? [30, 31, 32].includes(subject.id) : false

  const hasBank = questionBank.length > 0

  const categories = useMemo(() => {
    return BASE_CATEGORIES.filter((cat) => {
      if (cat.id === 'unit-practice') return !!unitBank
      if (cat.id === 'flash-cards') return !isSat
      // New surfaces show only where their content/bank exists, to keep the grid relevant.
      if (cat.id === 'frq-practice') return !!frqSet
      if (cat.id === 'reference') return !!reference
      if (cat.id === 'interleaved-review' || cat.id === 'mock-exam') return hasBank
      return true
    })
  }, [unitBank, isSat, frqSet, reference, hasBank])

  // Per-card metadata surfaced on the landing so each tile shows real scope
  // (unit / question / video counts) and whether its content exists yet.
  const cardMeta = useMemo<Record<ResourceCategory, { meta?: string; available: boolean }>>(() => {
    const units = unitOverview?.units.length ?? 0
    const subunits = unitOverview?.units.reduce((n, u) => n + u.subunits.length, 0) ?? 0
    const bankQ = unitBank
      ? unitBank.units.reduce((n, u) => n + u.questions.length, 0)
      : 0
    const videos = subjectVideos?.length ?? 0
    const bankCount = questionBank.length
    const refSections =
      (reference?.formulaGroups?.length ? 1 : 0) +
      (reference?.glossary?.length ? 1 : 0) +
      (reference?.frequentlyTested?.length ? 1 : 0)
    const referenceMeta = reference
      ? reference.formulaGroups?.length
        ? 'Formulas · terms'
        : `${refSections} section${refSections === 1 ? '' : 's'}`
      : undefined
    return {
      'cheat-sheets': {
        available: units > 0,
        meta: units > 0 ? `${units} units · ${subunits} topics` : undefined,
      },
      'video-resources': {
        available: videos > 0,
        meta: videos > 0 ? `${videos} videos` : undefined,
      },
      'unit-practice': {
        available: bankQ > 0,
        meta: unitBank ? `${unitBank.units.length} units · ${bankQ} questions` : undefined,
      },
      'frq-practice': {
        available: !!frqSet,
        meta: frqSet
          ? `${frqSet.prompts.length} prompt${frqSet.prompts.length === 1 ? '' : 's'} · AI graded`
          : undefined,
      },
      'interleaved-review': {
        available: bankCount > 0,
        meta: bankCount > 0 ? `${bankCount} questions` : undefined,
      },
      'mock-exam': {
        available: bankCount > 0,
        meta: bankCount > 0 ? `~${Math.min(40, bankCount)} Q · timed` : undefined,
      },
      reference: {
        available: !!reference,
        meta: referenceMeta,
      },
      // Loaded lazily (PDFs / DB-backed) — always enterable; own empty states apply.
      'practice-exams': { available: true },
      'flash-cards': { available: true },
    }
  }, [unitOverview, unitBank, subjectVideos, frqSet, reference, questionBank])

  // Resolve the subject from the exam + subject slugs in the URL.
  useEffect(() => {
    async function resolveSubject() {
      if (!examSlug || !subjectSlug) return

      try {
        setLoading(true)
        setError(null)
        const exams = await getExams()
        const exam = exams.find((e) => toExamSlug(e.name) === examSlug.toLowerCase())
        if (!exam) {
          setError('Subject not found')
          setSubject(null)
          return
        }
        const subjects = await getSubjectsByExam(exam.id)
        const found = subjects.find((s) => toSubjectSlug(s.name) === subjectSlug.toLowerCase())
        if (!found) {
          setError('Subject not found')
          setSubject(null)
          return
        }
        setSubject(found)
        setPage(0)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load subject')
      } finally {
        setLoading(false)
      }
    }

    resolveSubject()
  }, [examSlug, subjectSlug])

  // Fetch resources for the resolved subject (and on page change).
  useEffect(() => {
    async function loadResources() {
      if (!subject) return
      try {
        const resourcesData = await getResourcesBySubject(subject.id, page)
        setResources(resourcesData.content)
        setTotalPages(resourcesData.totalPages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load resources')
      }
    }

    loadResources()
  }, [subject, page])

  if (loading) {
    return <LoadingScreen message="Loading resources" />
  }

  if (error || !subject) {
    return (
      <div className="text-center py-12">
        <div className="text-xl" style={{ color: 'var(--error)' }}>
          Error: {error || 'Subject not found'}
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
      {/* Subject header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-start gap-4 min-w-0">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            <Icon path={getSubjectIcon(subject.name)} className="w-7 h-7" />
          </div>
          <div className="min-w-0">
            {/* Breadcrumb — turns the old static eyebrow into live navigation */}
            <nav
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] mb-1.5"
              style={{ color: 'var(--text-muted)' }}
            >
              <button
                onClick={() => navigate(`/${toExamSlug(subject.examName)}/hub`)}
                className="hover:underline cursor-pointer transition-colors"
              >
                {subject.examName} Exam Hub
              </button>
              <svg className="w-3 h-3 opacity-60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
              <span className="truncate" style={{ color: 'var(--text)' }}>
                {subject.name.replace(/^AP /, '')}
              </span>
            </nav>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-none tracking-tight" style={{ textWrap: 'balance' } as React.CSSProperties}>{subject.name}</h1>
            {subject.description && (
              <p className="text-sm mt-2 max-w-prose" style={{ color: 'var(--text-muted)' }}>
                {subject.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() =>
            fromPlanner
              ? navigate('/ap/planner')
              : activeCategory !== null
                ? setActiveCategory(null)
                : navigate(`/${toExamSlug(subject.examName)}/hub`)
          }
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium cursor-pointer border transition-colors flex-shrink-0 hover:opacity-80"
          style={{ color: 'var(--text)', backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          {fromPlanner ? 'My Planner' : activeCategory !== null ? 'Back' : `${subject.examName} Hub`}
        </button>
      </div>

      {/* Resource Category Cards — grouped into Learn / Practice with real scope */}
      {activeCategory === null && (
        <div className="space-y-8">
          {(['learn', 'practice'] as const).map((group) => {
            const items = categories.filter((cat) => CARD_GROUP[cat.id] === group)
            if (items.length === 0) return null
            return (
              <section key={group}>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-muted)' }}>
                  {group === 'learn' ? 'Learn the material' : 'Practice & test yourself'}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((cat, i) => (
                    <ResourceCategoryCard
                      key={cat.id}
                      cat={cat}
                      index={i}
                      meta={cardMeta[cat.id].meta}
                      available={cardMeta[cat.id].available}
                      onClick={() => setActiveCategory(cat.id)}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}

      {/* Unified unit practice (merged question bank) */}
      {activeCategory === 'unit-practice' && (
        <section>
          <UnitPractice subjectName={subject.name} subjectId={subject.id} />
        </section>
      )}

      {/* Unit Overviews */}
      {activeCategory === 'cheat-sheets' && unitOverview && (
        <section>
          <UnitOverviews overview={unitOverview} onBack={() => setActiveCategory(null)} />
        </section>
      )}

      {/* Flash Cards */}
      {activeCategory === 'flash-cards' && (
        <section>
          <FlashCards subjectId={subject.id} subjectName={subject.name} />
        </section>
      )}

      {/* FRQ / Essay Practice with AI grading */}
      {activeCategory === 'frq-practice' && (
        <section>
          <FrqPractice subjectName={subject.name} />
        </section>
      )}

      {/* Mixed / interleaved cumulative review */}
      {activeCategory === 'interleaved-review' && (
        <section>
          <InterleavedReview subjectName={subject.name} />
        </section>
      )}

      {/* Timed mock exam with predicted score */}
      {activeCategory === 'mock-exam' && (
        <section>
          <MockExam subjectName={subject.name} />
        </section>
      )}

      {/* Reference & formulas */}
      {activeCategory === 'reference' && (
        <section>
          <SubjectReference subjectName={subject.name} />
        </section>
      )}

      {/* Active Category View (categories not rendered by a dedicated component above) */}
      {activeCategory !== null &&
        !(activeCategory === 'unit-practice') &&
        !(activeCategory === 'flash-cards') &&
        !(activeCategory === 'frq-practice') &&
        !(activeCategory === 'interleaved-review') &&
        !(activeCategory === 'mock-exam') &&
        !(activeCategory === 'reference') &&
        !(activeCategory === 'cheat-sheets' && unitOverview) && (
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">
            {categories.find((c) => c.id === activeCategory)?.title}
          </h2>

          {activeCategory === 'video-resources' && subjectVideos ? (
            <VideoResources videos={subjectVideos} note={subjectVideoNote} />
          ) : activeCategory === 'practice-exams' ? (
            <>
              {resources.length === 0 ? (
                <div
                  className="text-center py-12 rounded-2xl border"
                  style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                >
                  <p style={{ color: 'var(--text-muted)' }}>
                    No practice exams available for this subject yet.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <Link
                        key={resource.id}
                        to={`/resources/${resource.id}`}
                        className="group flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                        >
                          <Icon
                            path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            className="w-5 h-5"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold group-hover:underline">{resource.title}</h3>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {resource.description}
                          </p>
                          <div
                            className="flex gap-2 mt-1.5 text-xs"
                            style={{ color: 'var(--text-muted)', opacity: 0.8 }}
                          >
                            {resource.examYear && <span>Year: {resource.examYear}</span>}
                            <span>{resource.fileType}</span>
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                      <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="px-4 py-2 border rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer transition-opacity"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                      >
                        Previous
                      </button>
                      <span
                        className="px-4 py-2 rounded-lg text-sm font-medium"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Page {page + 1} of {totalPages}
                      </span>
                      <button
                        onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                        className="px-4 py-2 border rounded-lg text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 cursor-pointer transition-opacity"
                        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <div
              className="text-center py-16 rounded-2xl border"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                <Icon
                  path={categories.find((c) => c.id === activeCategory)?.iconPath || ''}
                  className="w-7 h-7"
                />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Coming Soon</h3>
              <p
                className="max-w-md mx-auto"
                style={{ color: 'var(--text-muted)' }}
              >
                {categories.find((c) => c.id === activeCategory)?.title} for{' '}
                {subject.name} are being prepared. Check back soon!
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}

function ResourceCategoryCard({
  cat,
  index,
  meta,
  available,
  onClick,
}: {
  cat: CategoryInfo
  index: number
  meta?: string
  available: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="hub-tile-in group flex flex-col p-5 rounded-2xl border text-left cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2"
      style={{
        backgroundColor: 'var(--surface-elevated)',
        borderColor: 'var(--hairline)',
        animationDelay: `${Math.min(index, 8) * 45}ms`,
        opacity: available ? 1 : 0.66,
        ['--tw-ring-color' as string]: 'var(--accent)',
      } as React.CSSProperties}
    >
      <div className="flex items-start justify-between gap-2 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={
            available
              ? { backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }
              : { backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }
          }
        >
          <Icon path={cat.iconPath} className="w-5 h-5" />
        </div>
        {available ? (
          meta && (
            <span
              className="text-[11px] font-semibold px-2 py-1 rounded-full whitespace-nowrap"
              style={{ backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }}
            >
              {meta}
            </span>
          )
        ) : (
          <span
            className="text-[11px] font-semibold px-2 py-1 rounded-full whitespace-nowrap"
            style={{ backgroundColor: 'color-mix(in srgb, var(--text) 8%, transparent)', color: 'var(--text-muted)' }}
          >
            Coming soon
          </span>
        )}
      </div>
      <div className="flex items-center gap-1.5">
        <h3 className="text-sm font-bold group-hover:underline">{cat.title}</h3>
        <svg
          className="w-3.5 h-3.5 opacity-30 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {cat.description}
      </p>
    </button>
  )
}

