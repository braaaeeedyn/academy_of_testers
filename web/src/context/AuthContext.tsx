import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { UserInfo, RegisterData, LoginData, VerifyData } from '../types/auth'
import * as authApi from '../services/authApi'

interface AuthContextType {
  user: UserInfo | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: LoginData) => Promise<void>
  register: (data: RegisterData) => Promise<{ userId: number; message: string }>
  verify: (data: VerifyData) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const REFRESH_TOKEN_KEY = 'aot-refresh-token'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Silent refresh on app load
  useEffect(() => {
    const storedRefresh = localStorage.getItem(REFRESH_TOKEN_KEY)
    if (!storedRefresh) {
      setIsLoading(false)
      return
    }

    authApi
      .refreshToken(storedRefresh)
      .then((res) => {
        setAccessToken(res.accessToken)
        setUser(res.user)
        localStorage.setItem(REFRESH_TOKEN_KEY, res.refreshToken)
      })
      .catch(() => {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
      })
      .finally(() => setIsLoading(false))
  }, [])

  // Auto-refresh access token before expiry (every 13 minutes)
  useEffect(() => {
    if (!accessToken) return

    const interval = setInterval(async () => {
      const storedRefresh = localStorage.getItem(REFRESH_TOKEN_KEY)
      if (!storedRefresh) return

      try {
        const res = await authApi.refreshToken(storedRefresh)
        setAccessToken(res.accessToken)
        setUser(res.user)
        localStorage.setItem(REFRESH_TOKEN_KEY, res.refreshToken)
      } catch {
        setAccessToken(null)
        setUser(null)
        localStorage.removeItem(REFRESH_TOKEN_KEY)
      }
    }, 13 * 60 * 1000)

    return () => clearInterval(interval)
  }, [accessToken])

  const loginFn = useCallback(async (data: LoginData) => {
    const res = await authApi.login(data)
    setAccessToken(res.accessToken)
    setUser(res.user)
    localStorage.setItem(REFRESH_TOKEN_KEY, res.refreshToken)
  }, [])

  const registerFn = useCallback(async (data: RegisterData) => {
    const res = await authApi.register(data)
    return { userId: res.userId, message: res.message }
  }, [])

  const verifyFn = useCallback(async (data: VerifyData) => {
    await authApi.verify(data)
  }, [])

  const logoutFn = useCallback(async () => {
    const storedRefresh = localStorage.getItem(REFRESH_TOKEN_KEY)
    if (storedRefresh) {
      try {
        await authApi.logout(storedRefresh)
      } catch {
        // Logout even if server call fails
      }
    }
    setAccessToken(null)
    setUser(null)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isAuthenticated: !!accessToken && !!user,
        isLoading,
        login: loginFn,
        register: registerFn,
        verify: verifyFn,
        logout: logoutFn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
