import type { Exam, Subject, StudyResource, ResourcesResponse } from '../types/api'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

async function fetchAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
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
