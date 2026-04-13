import type { Exam, Subject, StudyResource, ResourcesResponse } from '../types/api'
import type { AiUsageInfo } from '../types/auth'

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

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    ...options.headers as Record<string, string>,
  }

  const token = getAccessToken?.()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.message || `API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export async function getExams(): Promise<Exam[]> {
  return fetchAPI<Exam[]>('/exams')
}

export async function getSubjectsByExam(examId: number): Promise<Subject[]> {
  return fetchAPI<Subject[]>(`/exams/${examId}/subjects`)
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
  
  return fetchAPI<ResourcesResponse>(`/resources?${params.toString()}`)
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
