export interface Exam {
  id: number
  name: string
  description: string
  createdAt: string
}

export interface Subject {
  id: number
  name: string
  description: string
  examId: number
  examName: string
  createdAt: string
}

export interface StudyResource {
  id: number
  title: string
  description: string
  fileUrl: string
  fileType: string
  examYear: number | null
  subjectId: number
  subjectName: string
  createdAt: string
}

export interface ResourcesResponse {
  content: StudyResource[]
  page: number
  size: number
  totalElements: number
  totalPages: number
  last: boolean
}
