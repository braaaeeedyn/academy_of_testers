import type { Exam, Subject, StudyResource, ResourcesResponse } from '../types/api'
import type { AiUsageInfo } from '../types/auth'
import type { Flashcard, Stack, StackCardRef, CardMastery } from '../types/flashcards'

/**
 * Same-origin `/api` uses the Vite dev/preview proxy (see vite.config.ts).
 * Set `VITE_API_URL` to a remote API for production (e.g. Vercel → your server).
 *
 * If `.env` still has `http://localhost:8080/...` but you open the app as
 * `http://127.0.0.1:5173`, the browser would cross-origin request localhost and
 * CORS would block it — so we always use `/api` when the configured host is loopback.
 */
function resolveApiBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_URL?.trim()
  if (!fromEnv) return '/api'

  const normalized = fromEnv.replace(/\/$/, '')
  try {
    const withScheme = /^https?:\/\//i.test(normalized) ? normalized : `http://${normalized}`
    const url = new URL(withScheme)
    if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
      return '/api'
    }
  } catch {
    return normalized
  }
  return normalized
}

export const API_BASE_URL = resolveApiBaseUrl()

// Token accessor — set by AuthContext so api.ts doesn't import context directly
let getAccessToken: (() => string | null) | null = null

export function setTokenAccessor(fn: () => string | null) {
  getAccessToken = fn
}

// The backend runs on Render's free tier, which sleeps after ~15 min idle and cold-starts in
// 60–90s. During that window the Vercel proxy returns 502/503/504 (gateway couldn't reach the
// app). We transparently retry idempotent (GET/HEAD) requests through the cold start so the app
// waits and succeeds instead of failing. Non-idempotent requests are never retried, to avoid
// double-submitting (e.g. registering twice) when a response is merely delayed.
const RETRYABLE_STATUSES = new Set([502, 503, 504])
const MAX_RETRIES = 12

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function isIdempotent(options: RequestInit): boolean {
  const method = (options.method ?? 'GET').toUpperCase()
  return method === 'GET' || method === 'HEAD'
}

async function request(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const headers: Record<string, string> = {
    ...options.headers as Record<string, string>,
  }

  const token = getAccessToken?.()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const retryable = isIdempotent(options)
  const maxAttempts = retryable ? MAX_RETRIES : 0

  for (let attempt = 0; ; attempt++) {
    let response: Response
    try {
      response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers })
    } catch (err) {
      // Network-level failure (proxy dropped the connection mid cold-start, etc.).
      if (retryable && attempt < maxAttempts) {
        await sleep(Math.min(1500 * (attempt + 1), 8000))
        continue
      }
      throw err
    }

    if (response.ok) return response

    if (retryable && RETRYABLE_STATUSES.has(response.status) && attempt < maxAttempts) {
      await sleep(Math.min(1500 * (attempt + 1), 8000))
      continue
    }

    const data = await response.json().catch(() => ({}))
    throw new Error(data.message || `API Error: ${response.status} ${response.statusText}`)
  }
}

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await request(endpoint, options)
  return response.json()
}

/** For endpoints that answer 204 No Content, where parsing a body would throw. */
async function fetchNoContent(endpoint: string, options: RequestInit = {}): Promise<void> {
  await request(endpoint, options)
}

const JSON_HEADERS = { 'Content-Type': 'application/json' }

/**
 * In-memory cache for the catalog endpoints (exams / subjects / a subject's resources). These are
 * static reference data that don't change within a session, yet every subject-page navigation
 * re-fetched them against a slow backend. We cache the *promise* (not just the resolved value) so
 * concurrent callers dedupe onto one in-flight request; on failure the entry is evicted so the next
 * attempt retries. The cache lives for the tab's lifetime — a full page reload gets fresh data.
 */
const catalogCache = new Map<string, Promise<unknown>>()

function cached<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const existing = catalogCache.get(key) as Promise<T> | undefined
  if (existing) return existing
  const promise = fetcher().catch((err) => {
    catalogCache.delete(key)
    throw err
  })
  catalogCache.set(key, promise)
  return promise
}

export async function getExams(): Promise<Exam[]> {
  return cached('exams', () => fetchAPI<Exam[]>('/exams'))
}

export async function getSubjectsByExam(examId: number): Promise<Subject[]> {
  return cached(`subjects:${examId}`, () =>
    fetchAPI<Subject[]>(`/exams/${examId}/subjects`)
  )
}

export async function getSubject(id: number): Promise<Subject> {
  return fetchAPI<Subject>(`/subjects/${id}`)
}

export async function getResourcesBySubject(
  subjectId: number,
  page: number = 0,
  size: number = 20,
  query?: string
): Promise<ResourcesResponse> {
  const params = new URLSearchParams({
    subjectId: subjectId.toString(),
    page: page.toString(),
    size: size.toString(),
  })

  if (query) {
    params.append('q', query)
  }

  // A search query is user-driven and shouldn't be cached; the plain subject listing is.
  if (query) {
    return fetchAPI<ResourcesResponse>(`/resources?${params.toString()}`)
  }
  return cached(`resources:${subjectId}:${page}:${size}`, () =>
    fetchAPI<ResourcesResponse>(`/resources?${params.toString()}`)
  )
}

export async function getResource(id: number): Promise<StudyResource> {
  return fetchAPI<StudyResource>(`/resources/${id}`)
}

export async function searchResources(
  query: string,
  page: number = 0,
  size: number = 20
): Promise<ResourcesResponse> {
  const params = new URLSearchParams({
    q: query,
    page: page.toString(),
    size: size.toString(),
  })

  return fetchAPI<ResourcesResponse>(`/resources?${params.toString()}`)
}

// AI Chat (authenticated)
export async function sendAiMessage(
  messages: { role: string; content: string }[]
): Promise<{ content: string; remaining: number }> {
  return fetchAPI('/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  })
}

export async function getAiUsage(): Promise<AiUsageInfo> {
  return fetchAPI<AiUsageInfo>('/ai/chat/usage')
}

// FRQ / essay grading (authenticated; shares the AI usage budget with chat)
import type { FrqRubricRow } from '../data/frq/types'

export interface FrqRowScore {
  name: string
  earned: number
  max: number
  justification: string
}

export interface FrqGrade {
  earned: number
  possible: number
  rows: FrqRowScore[]
  overallFeedback: string
  strengths: string[]
  improvements: string[]
  strictnessNote: string
}

export interface FrqGradeInput {
  subjectName: string
  essayType: string
  promptText: string
  sourceText?: string
  rubric: FrqRubricRow[]
  studentResponse: string
}

export async function gradeFrq(
  input: FrqGradeInput
): Promise<{ grade: FrqGrade; remaining: number }> {
  return fetchAPI('/ai/frq/grade', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(input),
  })
}

// Flashcards (authenticated) — premade cards are client-side and never hit these.
export async function getFlashcards(subjectId: number): Promise<Flashcard[]> {
  return fetchAPI<Flashcard[]>(`/flashcards?subjectId=${subjectId}`)
}

export async function createFlashcard(
  subjectId: number,
  question: string,
  answer: string
): Promise<Flashcard> {
  return fetchAPI<Flashcard>('/flashcards', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ subjectId, question, answer }),
  })
}

export async function updateFlashcard(
  id: number,
  question: string,
  answer: string
): Promise<Flashcard> {
  return fetchAPI<Flashcard>(`/flashcards/${id}`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify({ question, answer }),
  })
}

export async function deleteFlashcard(id: number): Promise<void> {
  return fetchNoContent(`/flashcards/${id}`, { method: 'DELETE' })
}

// Stacks (authenticated)
export async function getStacks(subjectId: number): Promise<Stack[]> {
  return fetchAPI<Stack[]>(`/stacks?subjectId=${subjectId}`)
}

export async function createStack(
  subjectId: number,
  name: string,
  cards: StackCardRef[]
): Promise<Stack> {
  return fetchAPI<Stack>('/stacks', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ subjectId, name, cards }),
  })
}

export async function updateStack(
  id: number,
  subjectId: number,
  name: string,
  cards: StackCardRef[]
): Promise<Stack> {
  return fetchAPI<Stack>(`/stacks/${id}`, {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify({ subjectId, name, cards }),
  })
}

export async function deleteStack(id: number): Promise<void> {
  return fetchNoContent(`/stacks/${id}`, { method: 'DELETE' })
}

// Training mastery (authenticated)
export async function getProgress(subjectId: number): Promise<CardMastery[]> {
  return fetchAPI<CardMastery[]>(`/progress?subjectId=${subjectId}`)
}

export async function recordAttempt(
  subjectId: number,
  cardKey: string,
  correct: boolean
): Promise<CardMastery> {
  return fetchAPI<CardMastery>('/progress', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ subjectId, cardKey, correct }),
  })
}

export async function resetProgress(subjectId: number): Promise<void> {
  return fetchNoContent(`/progress?subjectId=${subjectId}`, { method: 'DELETE' })
}

// AP planner (authenticated). Stores which AP classes the user has added.
export async function getApCourses(): Promise<number[]> {
  return fetchAPI<number[]>('/ap/courses')
}

export async function saveApCourses(subjectIds: number[]): Promise<number[]> {
  return fetchAPI<number[]>('/ap/courses', {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify({ subjectIds }),
  })
}

// SAT adaptive engine (authenticated). See server com.aot.sat.
import type {
  AdaptiveStatus,
  DiagnosticStep,
  DiagnosticAnswerResult,
  SessionStep,
  AnswerResult,
  SessionSummary,
  SkillWeight,
  DashboardData,
  SkillCatalog,
  UserPrefs,
} from '../types/adaptive'

export async function getAdaptiveStatus(): Promise<AdaptiveStatus> {
  return fetchAPI<AdaptiveStatus>('/sat/adaptive/status')
}

export async function getMastery(): Promise<SkillWeight[]> {
  return fetchAPI<SkillWeight[]>('/sat/adaptive/mastery')
}

export async function startDiagnostic(): Promise<DiagnosticStep> {
  return fetchAPI<DiagnosticStep>('/sat/adaptive/diagnostic', { method: 'POST' })
}

export async function answerDiagnostic(
  questionId: string,
  selectedIndex: number
): Promise<DiagnosticAnswerResult> {
  return fetchAPI<DiagnosticAnswerResult>('/sat/adaptive/diagnostic/answer', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ questionId, selectedIndex }),
  })
}

export interface PracticeConfig {
  length?: number
  focusSkillId?: string
  topics?: string[]
  difficulty?: string
}

/** Returns the session step, or the string 'DIAGNOSTIC_REQUIRED' on a 409. */
export async function startSession(
  config: PracticeConfig = {}
): Promise<SessionStep | 'DIAGNOSTIC_REQUIRED'> {
  const params = new URLSearchParams()
  if (config.length) params.set('length', String(config.length))
  if (config.focusSkillId) params.set('focusSkillId', config.focusSkillId)
  if (config.topics) config.topics.forEach((t) => params.append('topics', t))
  if (config.difficulty && config.difficulty !== 'any') params.set('difficulty', config.difficulty)
  const qs = params.toString() ? `?${params.toString()}` : ''
  const headers: Record<string, string> = {}
  const token = getAccessToken?.()
  if (token) headers['Authorization'] = `Bearer ${token}`
  const res = await fetch(`${API_BASE_URL}/sat/adaptive/session${qs}`, { method: 'POST', headers })
  if (res.status === 409) return 'DIAGNOSTIC_REQUIRED'
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(data.message || `API Error: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

/** The results board for a given month (`month` is yyyy-MM). The current day is resolved
 * server-side in UTC, so no device date is sent. */
export async function getDashboard(month: string): Promise<DashboardData> {
  return fetchAPI<DashboardData>(`/sat/adaptive/dashboard?month=${month}`)
}

/** Per-skill active-question counts by difficulty, for the custom practice builder. */
export async function getCatalog(): Promise<SkillCatalog[]> {
  return fetchAPI<SkillCatalog[]>('/sat/adaptive/catalog')
}

/** The signed-in user's saved test date and weekly goal. */
export async function getUserPrefs(): Promise<UserPrefs> {
  return fetchAPI<UserPrefs>('/sat/adaptive/prefs')
}

/** Persists the user's test date and weekly goal; returns the saved (normalized) values. */
export async function saveUserPrefs(prefs: UserPrefs): Promise<UserPrefs> {
  return fetchAPI<UserPrefs>('/sat/adaptive/prefs', {
    method: 'PUT',
    headers: JSON_HEADERS,
    body: JSON.stringify(prefs),
  })
}

/** Spends a repair to restore one past missed day; requires today already practiced.
 * "Today" is resolved server-side in UTC. */
export async function repairStreak(date: string): Promise<void> {
  await fetchAPI<void>('/sat/adaptive/streak/repair', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ date }),
  })
}

export async function getCurrentSession(): Promise<SessionStep> {
  return fetchAPI<SessionStep>('/sat/adaptive/session/current')
}

export async function answerSession(
  sessionId: number,
  questionId: string,
  selectedIndex: number,
  msElapsed?: number
): Promise<AnswerResult> {
  return fetchAPI<AnswerResult>(`/sat/adaptive/session/${sessionId}/answer`, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify({ questionId, selectedIndex, msElapsed }),
  })
}

export async function getSessionSummary(sessionId: number): Promise<SessionSummary> {
  return fetchAPI<SessionSummary>(`/sat/adaptive/session/${sessionId}/summary`)
}

/** Ends the session early; grades on completed questions and returns updated mastery weights. */
export async function endSession(sessionId: number): Promise<SkillWeight[]> {
  return fetchAPI<SkillWeight[]>(`/sat/adaptive/session/${sessionId}/end`, { method: 'POST' })
}
