import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { themes, getThemeById, DEFAULT_THEME_ID, type Theme } from '../types/theme'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'aot-theme-id'

function getDefaultTheme(): Theme {
  const saved = getThemeById(localStorage.getItem(STORAGE_KEY))
  if (saved) return saved
  return getThemeById(DEFAULT_THEME_ID) ?? themes[0]
}

function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme.id)
  root.style.colorScheme = theme.mode
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getDefaultTheme)

  useEffect(() => {
    applyThemeToDOM(theme)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
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
