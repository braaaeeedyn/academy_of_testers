import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { themes, type Theme } from '../types/theme'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'aot-theme-id'
const CUSTOM_THEME_KEY = 'aot-custom-theme'

function getDefaultTheme(): Theme {
  const savedId = localStorage.getItem(STORAGE_KEY)
  if (savedId === 'custom') {
    const raw = localStorage.getItem(CUSTOM_THEME_KEY)
    if (raw) {
      try {
        return JSON.parse(raw) as Theme
      } catch { /* fall through */ }
    }
  }
  if (savedId) {
    const found = themes.find((t) => t.id === savedId)
    if (found) return found
  }
  return themes[0]
}

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement
  root.style.setProperty('--color-primary', theme.primary)
  root.style.setProperty('--color-secondary', theme.secondary)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getDefaultTheme)

  useEffect(() => {
    applyThemeToDOM(theme)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    if (newTheme.id === 'custom') {
      localStorage.setItem(CUSTOM_THEME_KEY, JSON.stringify(newTheme))
    }
    localStorage.setItem(STORAGE_KEY, newTheme.id)
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
