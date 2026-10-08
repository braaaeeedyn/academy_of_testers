import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import PageBand from '../components/PageBand'
import StudyPlanWeeks from '../components/StudyPlanWeeks'
import { getUnitBank, subjectsWithUnitBank } from '../data/unitBank/lookup'
import { AP_EXAM_START } from '../data/apCategories'
import { subjectSlug } from '../utils/slug'
import { buildWeekPlan, isValidIso, localDateToIso, weeksUntil } from '../utils/studyPlan'

const storageKey = (subject: string) => `aot.studyPlan.ap.${subjectSlug(subject)}`

function loadDate(subject: string): string | null {
  try {
    const v = localStorage.getItem(storageKey(subject))
    return v && isValidIso(v) ? v : null
  } catch {
    return null
  }
}

function saveDate(subject: string, iso: string | null) {
  try {
    if (iso) localStorage.setItem(storageKey(subject), iso)
    else localStorage.removeItem(storageKey(subject))
  } catch {
    // storage blocked: the date just isn't remembered
  }
}

export default function ApStudyPlanPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const subjects = useMemo(() => subjectsWithUnitBank(), [])
  const param = searchParams.get('subject') ?? ''
  const subject = subjects.includes(param) ? param : ''
  const bank = subject ? getUnitBank(subject) : undefined

  const defaultIso = localDateToIso(AP_EXAM_START)
  const [examIso, setExamIso] = useState(defaultIso)
  const [customDate, setCustomDate] = useState(false)

  useEffect(() => {
    if (!subject) return
    const saved = loadDate(subject)
    setExamIso(saved ?? defaultIso)
    setCustomDate(saved !== null)
  }, [subject, defaultIso])

  const todayIso = localDateToIso(new Date())
  const topics = useMemo(
    () => (bank ? bank.units.map((u) => ({ id: String(u.unitNumber), label: `Unit ${u.unitNumber}: ${u.title}` })) : []),
    [bank]
  )
  const weeks = useMemo(() => buildWeekPlan(examIso, todayIso, topics), [examIso, todayIso, topics])
  const weeksLeft = weeksUntil(examIso, todayIso)
  const slug = subject ? subjectSlug(subject) : ''

  const pickSubject = (name: string) => {
    const next = new URLSearchParams(searchParams)
    if (name) next.set('subject', name)
    else next.delete('subject')
    setSearchParams(next, { replace: true })
  }

  const changeDate = (iso: string) => {
    if (!isValidIso(iso)) return
    setExamIso(iso)
    setCustomDate(true)
    saveDate(subject, iso)
  }

  const resetDate = () => {
    setExamIso(defaultIso)
    setCustomDate(false)
    saveDate(subject, null)
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[{ label: 'AP hub', onClick: () => navigate('/ap/hub') }, { label: 'Study plan' }]}
        back={{ label: 'AP hub', onClick: () => navigate('/ap/hub') }}
        watermark="PLAN"
        title="Week-by-week AP study plan"
        subtitle="Pick a class and your exam date. Units are spread across the weeks you have left, with a mock exam and a final review before test day."
      />

      <div
        className="mt-8 rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-end gap-4"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
      >
        <label className="flex-1 min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--text-muted)' }}>
            Class
          </span>
          <select
            value={subject}
            onChange={(e) => pickSubject(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border text-sm cursor-pointer"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            <option value="">Choose a class…</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        {subject && (
          <label>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--text-muted)' }}>
              Exam date
            </span>
            <input
              type="date"
              value={examIso}
              onChange={(e) => changeDate(e.target.value)}
              className="px-3 py-2 rounded-lg border text-sm"
              style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
            />
          </label>
        )}
      </div>

      {subject && (
        <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          {customDate ? (
            <>
              Using the date you set.{' '}
              <button type="button" onClick={resetDate} className="underline font-semibold cursor-pointer" style={{ color: 'var(--text)' }}>
                Reset to the start of the exam window
              </button>
            </>
          ) : (
            'Defaulting to the first day of the AP exam window. Your exam may fall later in the two-week window; set your exact date from your AP schedule.'
          )}
        </p>
      )}

      {!subject ? (
        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          Choose a class to build its plan.
        </p>
      ) : weeks.length === 0 ? (
        <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          That date is today or already past. Set your upcoming exam date to build a plan.
        </p>
      ) : (
        <div className="mt-6">
          <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4">
            <h2 className="font-display text-2xl font-bold">
              {weeksLeft} week{weeksLeft === 1 ? '' : 's'} to go
            </h2>
            <Link to={`/ap/${slug}?r=unit-practice`} className="text-sm font-semibold hover:underline" style={{ color: 'var(--text)' }}>
              Open {subject} practice →
            </Link>
          </div>
          <StudyPlanWeeks
            weeks={weeks}
            topicLink={() => `/ap/${slug}?r=unit-practice`}
            practiceLabel="Practice"
            extraLinks={[
              { label: 'Mixed review', to: `/ap/${slug}?r=interleaved-review` },
              { label: 'Timed mock exam', to: `/ap/${slug}?r=mock-exam` },
              { label: 'Mistake Notebook', to: '/notebook' },
            ]}
          />
        </div>
      )}
    </div>
  )
}
