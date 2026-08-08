export type ThemeMode = 'light' | 'dark'

export interface Theme {
  /** Value written to the `data-theme` attribute and localStorage. */
  id: string
  /** Display name shown in the picker. */
  name: string
  /** One-line description of the design language. */
  tagline: string
  /** Whether the surface is predominantly light or dark. */
  mode: ThemeMode
  /** Swatches used to render a faithful preview card in the picker. */
  preview: {
    bg: string
    surface: string
    text: string
    accent: string
    hairline: string
  }
  /** Font family used for the preview card heading. */
  fontStack: string
}

export const DEFAULT_THEME_ID = 'mintlify'

export const themes: Theme[] = [
  {
    id: 'wired',
    name: 'Ink',
    tagline: 'Stark black-on-white magazine with squared-off type.',
    mode: 'light',
    preview: { bg: '#ffffff', surface: '#f5f5f5', text: '#000000', accent: '#057dbc', hairline: '#e0e0e0' },
    fontStack: "'Playfair Display', serif",
  },
  {
    id: 'mintlify',
    name: 'Mint',
    tagline: 'Airy docs-grade light UI with a signature mint accent.',
    mode: 'light',
    preview: { bg: '#ffffff', surface: '#f7f7f7', text: '#0a0a0a', accent: '#00d4a4', hairline: '#e5e5e5' },
    fontStack: "'Inter', sans-serif",
  },
  {
    id: 'resend',
    name: 'Nocturne',
    tagline: 'Dark-gray canvas, editorial serif, and glowing accents.',
    mode: 'dark',
    preview: { bg: '#16161a', surface: '#26262b', text: '#fcfdff', accent: '#9370ff', hairline: 'rgba(255,255,255,0.14)' },
    fontStack: "'Fraunces', serif",
  },
  {
    id: 'mastercard',
    name: 'Ember',
    tagline: 'Warm cream canvas, pill shapes, and signal-orange energy.',
    mode: 'light',
    preview: { bg: '#f3f0ee', surface: '#ffffff', text: '#141413', accent: '#cf4500', hairline: '#e0dcd6' },
    fontStack: "'Sofia Sans', sans-serif",
  },
  {
    id: 'miro',
    name: 'Canary',
    tagline: 'Playful white workspace with canary-yellow personality.',
    mode: 'light',
    preview: { bg: '#ffffff', surface: '#f7f8fa', text: '#1c1c1e', accent: '#ffd02f', hairline: '#e0e2e8' },
    fontStack: "'Figtree', sans-serif",
  },
  {
    id: 'clickhouse',
    name: 'Voltage',
    tagline: 'High-performance dark-gray UI charged with electric yellow.',
    mode: 'dark',
    preview: { bg: '#18181b', surface: '#26262a', text: '#ffffff', accent: '#faff69', hairline: '#33333a' },
    fontStack: "'Inter', sans-serif",
  },
]

export function getThemeById(id: string | null | undefined): Theme | undefined {
  if (!id) return undefined
  return themes.find((t) => t.id === id)
}
