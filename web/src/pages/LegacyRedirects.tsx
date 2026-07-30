import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getExams, getSubject } from '../services/api'
import { examSlug, subjectSlug } from '../utils/slug'

function RedirectLoading() {
  return (
    <div className="text-center py-12">
      <div className="text-xl" style={{ color: 'var(--text-muted)' }}>Redirecting...</div>
    </div>
  )
}

async function hubPathForExamId(examId: string): Promise<string> {
  const exams = await getExams()
  const exam = exams.find((e) => e.id === parseInt(examId, 10))
  return exam ? `/${examSlug(exam.name)}/hub` : '/'
}

/** /exams/:examId/hub → /ap/hub or /sat/hub */
export function LegacyExamHubRedirect() {
  const { examId } = useParams<{ examId: string }>()
  const [to, setTo] = useState<string | null>(null)

  useEffect(() => {
    if (!examId) {
      setTo('/')
      return
    }
    hubPathForExamId(examId).then(setTo)
  }, [examId])

  if (!to) return <RedirectLoading />
  return <Navigate to={to} replace />
}

/** /exams/:examId → hub */
export function LegacyExamRedirect() {
  return <LegacyExamHubRedirect />
}

/** /exams/:examId/exam-info → /ap/exam-info */
export function LegacyExamInfoRedirect() {
  const { examId } = useParams<{ examId: string }>()
  const [to, setTo] = useState<string | null>(null)

  useEffect(() => {
    if (!examId) {
      setTo('/')
      return
    }
    getExams().then((exams) => {
      const exam = exams.find((e) => e.id === parseInt(examId, 10))
      setTo(exam ? `/${examSlug(exam.name)}/exam-info` : '/')
    })
  }, [examId])

  if (!to) return <RedirectLoading />
  return <Navigate to={to} replace />
}

/** /exams/:examId/practice → hub (the standalone practice page was retired; unit quizzes live on subject pages) */
export function LegacyExamPracticeRedirect() {
  return <LegacyExamHubRedirect />
}

/** /:examSlug/practice → /:examSlug/hub */
export function PracticeToHubRedirect() {
  const { examSlug: slug } = useParams<{ examSlug: string }>()
  return <Navigate to={slug ? `/${slug}/hub` : '/'} replace />
}

/** /subjects/:subjectId → /ap/calculus-ab */
export function LegacySubjectRedirect() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const [to, setTo] = useState<string | null>(null)

  useEffect(() => {
    if (!subjectId) {
      setTo('/')
      return
    }
    getSubject(parseInt(subjectId, 10))
      .then((subject) => {
        setTo(`/${examSlug(subject.examName)}/${subjectSlug(subject.name)}`)
      })
      .catch(() => setTo('/'))
  }, [subjectId])

  if (!to) return <RedirectLoading />
  return <Navigate to={to} replace />
}
