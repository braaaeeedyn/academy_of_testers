import { useEffect, useState, useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { getExams, getSubjectsByExam } from '../services/api'
import type { Exam, Subject } from '../types/api'


interface SubjectCategory {
  category: string
  iconPath: string
  subjectNames: string[]
}

const AP_SUBJECT_CATEGORIES: SubjectCategory[] = [
  {
    category: 'AP Capstone Diploma Program',
    iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    subjectNames: ['AP Seminar', 'AP Research'],
  },
  {
    category: 'Arts',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    subjectNames: ['AP Art History', 'AP Music Theory'],
  },
  {
    category: 'English',
    iconPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    subjectNames: ['AP English Language', 'AP English Literature'],
  },
  {
    category: 'History & Social Sciences',
    iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    subjectNames: [
      'AP African American Studies',
      'AP Comparative Government',
      'AP European History',
      'AP Human Geography',
      'AP Macroeconomics',
      'AP Microeconomics',
      'AP Psychology',
      'AP Government',
      'AP US History',
      'AP World History',
    ],
  },
  {
    category: 'Math',
    iconPath: 'M4 7h3m10 0h3M4 12h16M7 17h3m4 0h3M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z',
    subjectNames: [
      'AP Calculus AB',
      'AP Calculus BC',
      'AP Precalculus',
      'AP Statistics',
    ],
  },
  {
    category: 'Computer Science',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    subjectNames: [
      'AP Computer Science A',
      'AP Computer Science Principles',
    ],
  },
  {
    category: 'Sciences',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    subjectNames: [
      'AP Biology',
      'AP Chemistry',
      'AP Environmental Science',
      'AP Physics 1',
      'AP Physics 2',
      'AP Physics C: E&M',
      'AP Physics C: Mechanics',
    ],
  },
]

const SUBJECT_ICONS: Record<string, string> = {
  'AP Seminar': 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  'AP Research':
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'AP Art History': 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  'AP Music Theory': 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
  'AP English Language': 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  'AP English Literature': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'AP African American Studies': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'AP Comparative Government': 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  'AP European History': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'AP Human Geography': 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
  'AP Macroeconomics': 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  'AP Microeconomics': 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  'AP Psychology': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  'AP Government': 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
  'AP US History': 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
  'AP World History': 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'AP Calculus AB': 'M4 7h3m10 0h3M4 12h16M7 17h3m4 0h3M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z',
  'AP Calculus BC': 'M4 7h3m10 0h3M4 12h16M7 17h3m4 0h3M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z',
  'AP Precalculus': 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  'AP Statistics': 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
  'AP Computer Science A': 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'AP Computer Science Principles': 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  'AP Biology': 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  'AP Chemistry': 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  'AP Environmental Science': 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'AP Physics 1': 'M13 10V3L4 14h7v7l9-11h-7z',
  'AP Physics 2': 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'AP Physics C: E&M': 'M13 10V3L4 14h7v7l9-11h-7z',
  'AP Physics C: Mechanics': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
}

function getSubjectIcon(name: string): string {
  return SUBJECT_ICONS[name] || 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
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

export default function ExamHubPage() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const [exam, setExam] = useState<Exam | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [activeCategories, setActiveCategories] = useState<Set<string>>(new Set())

  const isAllSelected = activeCategories.size === 0

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  const selectAll = () => setActiveCategories(new Set())

  useEffect(() => {
    async function loadData() {
      if (!examId) return

      try {
        setLoading(true)
        const [exams, subjectData] = await Promise.all([
          getExams(),
          getSubjectsByExam(parseInt(examId)),
        ])
        const found = exams.find((e) => e.id === parseInt(examId))
        setExam(found || null)
        setSubjects(subjectData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [examId])

  const isAP = exam?.name.toUpperCase() === 'AP'

  const categoriesWithSubjects = useMemo(() => {
    if (!isAP) return []
    return AP_SUBJECT_CATEGORIES.map((cat) => ({
      ...cat,
      subjects: cat.subjectNames
        .map((name) => subjects.find((s) => s.name === name))
        .filter((s): s is Subject => s !== undefined),
    })).filter((cat) => cat.subjects.length > 0)
  }, [isAP, subjects])

  const filteredSubjects = useMemo(() => {
    const q = search.toLowerCase().trim()
    let pool = subjects.filter((s) => s.name.toLowerCase() !== 'sat essay')

    if (activeCategories.size > 0) {
      const allowedNames = new Set<string>()
      for (const catName of activeCategories) {
        const cat = AP_SUBJECT_CATEGORIES.find((c) => c.category === catName)
        if (cat) cat.subjectNames.forEach((n) => allowedNames.add(n.toLowerCase()))
      }
      pool = pool.filter((s) => allowedNames.has(s.name.toLowerCase()))
    }

    if (q) {
      pool = pool.filter((s) => s.name.toLowerCase().includes(q))
    }

    return pool
  }, [subjects, search, activeCategories])

  const visibleCategories = useMemo(() => {
    if (!isAP) return null
    if (search) return null
    if (activeCategories.size === 0) return categoriesWithSubjects
    return categoriesWithSubjects.filter((cat) => activeCategories.has(cat.category))
  }, [isAP, search, activeCategories, categoriesWithSubjects])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div
          className="text-xl"
          style={{ color: 'var(--color-primary)', opacity: 0.65 }}
        >
          Loading...
        </div>
      </div>
    )
  }

  if (error || !exam) {
    return (
      <div className="text-center py-12">
        <div className="text-xl text-red-500">
          Error: {error || 'Exam not found'}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 hover:underline cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Find Your Subject */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">Find Your Subject</h2>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              color: 'var(--color-secondary)',
              backgroundColor: 'var(--color-primary)',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </button>
        </div>
        <p
          className="mb-6"
          style={{ color: 'var(--color-primary)', opacity: 0.65 }}
        >
          Search by name or filter by category to jump straight to your subject
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
            style={{ color: 'var(--color-primary)', opacity: 0.4 }}
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
            placeholder={`Search ${exam.name} subjects...`}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-black/20 text-sm focus:outline-none focus:ring-2 transition-shadow"
            style={{
              backgroundColor: 'var(--color-secondary)',
              color: 'var(--color-primary)',
              '--tw-ring-color': 'var(--color-primary)',
            } as React.CSSProperties}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:opacity-70 cursor-pointer"
              style={{ color: 'var(--color-primary)', opacity: 0.5 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Sidebar + Results layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Vertical Category Sidebar (AP only) */}
          {isAP && (
            <div className="lg:w-64 flex-shrink-0">
              <div
                className="rounded-xl border border-black/15 overflow-hidden sticky top-8"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div
                  className="px-4 py-3 text-xs font-bold uppercase tracking-wide"
                  style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                >
                  Categories
                </div>
                <div className="flex flex-col">
                  <button
                    onClick={selectAll}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer transition-all text-left border-l-4"
                    style={{
                      backgroundColor: isAllSelected
                        ? 'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))'
                        : 'transparent',
                      borderColor: isAllSelected ? 'var(--color-primary)' : 'transparent',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <Icon
                      path="M4 6h16M4 10h16M4 14h16M4 18h16"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span>All Subjects</span>
                    <span
                      className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, var(--color-secondary))',
                      }}
                    >
                      {subjects.filter((s) => s.name.toLowerCase() !== 'sat essay').length}
                    </span>
                  </button>
                  {categoriesWithSubjects.map((cat) => {
                    const isActive = activeCategories.has(cat.category)
                    return (
                      <button
                        key={cat.category}
                        onClick={() => toggleCategory(cat.category)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium cursor-pointer transition-all text-left border-l-4"
                        style={{
                          backgroundColor: isActive
                            ? 'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))'
                            : 'transparent',
                          borderColor: isActive ? 'var(--color-primary)' : 'transparent',
                          color: 'var(--color-primary)',
                        }}
                      >
                        <Icon
                          path={cat.iconPath}
                          className="w-4 h-4 flex-shrink-0"
                        />
                        <span className="flex-1">{cat.category}</span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, var(--color-secondary))',
                          }}
                        >
                          {cat.subjects.length}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Subject Results */}
          <div className="flex-1 min-w-0">
            {/* Results count */}
            {(search || activeCategories.size > 0) && (
              <p
                className="text-xs font-medium mb-4"
                style={{ color: 'var(--color-primary)', opacity: 0.5 }}
              >
                {filteredSubjects.length} subject{filteredSubjects.length !== 1 ? 's' : ''} found
                {activeCategories.size > 0 && !search && (
                  <> in {[...activeCategories].join(', ')}</>
                )}
                {search && <> matching "<span className="font-bold">{search}</span>"</>}
              </p>
            )}

            {/* Grouped view (categories visible — default "all" or specific selections) */}
            {visibleCategories && (
              <div className="space-y-8">
                {visibleCategories.map((cat) => (
                  <div key={cat.category}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
                      >
                        <Icon path={cat.iconPath} className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold">{cat.category}</h3>
                      <span
                        className="text-xs font-medium ml-1 px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, var(--color-secondary))',
                          color: 'var(--color-primary)',
                        }}
                      >
                        {cat.subjects.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {cat.subjects.map((subject) => (
                        <SubjectCard key={subject.id} subject={subject} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Flat filtered view (search active) */}
            {!visibleCategories && filteredSubjects.length > 0 && (
              <div className="space-y-2">
                {filteredSubjects.map((subject) => (
                  <SubjectCard key={subject.id} subject={subject} />
                ))}
              </div>
            )}

            {/* No results */}
            {!visibleCategories && filteredSubjects.length === 0 && (
              <div
                className="text-center py-12 rounded-xl"
                style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-secondary))' }}
              >
                <div className="flex justify-center mb-3">
                  <Icon
                    path="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    className="w-10 h-10 opacity-30"
                  />
                </div>
                <p className="font-semibold mb-1">No subjects found</p>
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                >
                  Try a different search term or clear the filters
                </p>
                <button
                  onClick={() => { setSearch(''); selectAll() }}
                  className="mt-4 text-sm font-semibold underline cursor-pointer"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function SubjectCard({ subject }: { subject: Subject }) {
  const iconPath = getSubjectIcon(subject.name)

  return (
    <Link
      to={`/subjects/${subject.id}`}
      className="group flex items-center gap-4 px-5 py-3.5 rounded-xl hover:shadow-md transition-all border border-black/10 cursor-pointer"
      style={{ backgroundColor: 'var(--color-secondary)' }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
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
            style={{ color: 'var(--color-primary)', opacity: 0.5 }}
          >
            {subject.description}
          </p>
        )}
      </div>
      <svg
        className="flex-shrink-0 w-4 h-4 opacity-20 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
