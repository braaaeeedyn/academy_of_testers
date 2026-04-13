import type { AuthResponse, RegisterData, LoginData, VerifyData } from '../types/auth'
import { API_BASE_URL } from './api'

async function authFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || data.messages?.join(', ') || `Error: ${response.status}`)
  }

  return data
}

export async function register(data: RegisterData): Promise<{ message: string; userId: number }> {
  return authFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function login(data: LoginData): Promise<AuthResponse> {
  return authFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function verify(data: VerifyData): Promise<{ message: string }> {
  return authFetch('/auth/verify', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function resendVerification(userId: number): Promise<{ message: string }> {
  return authFetch('/auth/verify/resend', {
    method: 'POST',
    body: JSON.stringify({ userId }),
  })
}

export async function refreshToken(refreshTokenStr: string): Promise<AuthResponse> {
  return authFetch('/auth/refresh', {
    method: 'POST',
    body: JSON.stringify({ refreshToken: refreshTokenStr }),
  })
}

export async function logout(refreshTokenStr: string): Promise<void> {
  await authFetch('/auth/logout', {
    method: 'POST',
    body: JSON.stringify({ refreshToken: refreshTokenStr }),
  })
}
