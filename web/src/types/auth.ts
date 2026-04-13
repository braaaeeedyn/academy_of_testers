export interface UserInfo {
  id: number
  displayName: string
  email: string
}

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserInfo
}

export interface RegisterData {
  email: string
  password: string
  displayName: string
}

export interface LoginData {
  identifier: string
  password: string
}

export interface VerifyData {
  userId: number
  code: string
}

export interface AiUsageInfo {
  used: number
  limit: number
  remaining: number
  resetsAt: string
}
