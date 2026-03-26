import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { lightThemes, darkThemes, type Theme } from '../types/theme'
import { useTheme } from '../context/ThemeContext'

type View = 'categories' | 'light' | 'dark'

function ThemeCard({
  t,
  isActive,
  onSelect,
}: {
  t: Theme
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={`text-left rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 cursor-pointer ${
        isActive
          ? 'ring-4 ring-offset-2'
          : 'border-transparent'
      }`}
      style={isActive ? { ringColor: 'var(--color-primary)', borderColor: 'var(--color-primary)', '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties : undefined}
    >
      <div className="flex h-24">
        <div
          className="flex-1 flex items-center justify-center"
          style={{ backgroundColor: t.primary }}
        >
          <span
            className="text-xs font-mono font-semibold px-2 py-1 rounded bg-black/20"
            style={{ color: t.secondary }}
          >
            {t.primary}
          </span>
        </div>
        <div
          className="flex-1 flex items-center justify-center"
          style={{ backgroundColor: t.secondary }}
        >
          <span
            className="text-xs font-mono font-semibold px-2 py-1 rounded bg-black/10"
            style={{ color: t.primary }}
          >
            {t.secondary}
          </span>
        </div>
      </div>

      <div
        className="h-20 px-3 py-2 flex flex-col gap-1.5"
        style={{ backgroundColor: t.secondary }}
      >
        <div
          className="h-3 rounded-full w-3/4"
          style={{ backgroundColor: t.primary, opacity: 0.8 }}
        />
        <div
          className="h-2 rounded-full w-1/2"
          style={{ backgroundColor: t.primary, opacity: 0.4 }}
        />
        <div className="flex gap-1.5 mt-auto">
          <div
            className="h-5 rounded px-2 flex items-center"
            style={{ backgroundColor: t.primary }}
          >
            <span
              className="text-[8px] font-semibold"
              style={{ color: t.secondary }}
            >
              Button
            </span>
          </div>
          <div
            className="h-5 rounded px-2 flex items-center border"
            style={{ borderColor: t.primary }}
          >
            <span
              className="text-[8px] font-semibold"
              style={{ color: t.primary }}
            >
              Link
            </span>
          </div>
        </div>
      </div>

      <div
        className="p-4"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>{t.name}</h3>
          {isActive && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              Active
            </span>
          )}
        </div>
        <div className="flex gap-3 mt-2 text-xs font-mono" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full border"
              style={{ backgroundColor: t.primary, borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
            />
            {t.primary}
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block w-3 h-3 rounded-full border"
              style={{ backgroundColor: t.secondary, borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)' }}
            />
            {t.secondary}
          </span>
        </div>
      </div>
    </button>
  )
}

function MiniPreview({
  primary,
  secondary,
}: {
  primary: string
  secondary: string
}) {
  return (
    <div
      className="rounded-lg overflow-hidden border shadow-sm"
      style={{ borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)', width: 260 }}
    >
      {/* Mini header */}
      <div
        className="px-3 py-2 flex items-center justify-between"
        style={{ backgroundColor: primary }}
      >
        <span
          className="text-[10px] font-bold"
          style={{ color: secondary }}
        >
          Academy of Testers
        </span>
        <div className="flex gap-1">
          <span
            className="text-[7px] px-1.5 py-0.5 rounded"
            style={{ backgroundColor: secondary, color: primary }}
          >
            Themes
          </span>
          <span
            className="text-[7px] px-1.5 py-0.5 rounded"
            style={{ backgroundColor: secondary, color: primary }}
          >
            AI
          </span>
        </div>
      </div>

      {/* Mini body */}
      <div className="px-3 py-3 space-y-2" style={{ backgroundColor: secondary }}>
        <div
          className="h-2.5 rounded-full w-3/4"
          style={{ backgroundColor: primary, opacity: 0.7 }}
        />
        <div
          className="h-2 rounded-full w-1/2"
          style={{ backgroundColor: primary, opacity: 0.35 }}
        />
        <div
          className="h-2 rounded-full w-2/3"
          style={{ backgroundColor: primary, opacity: 0.35 }}
        />
        <div className="flex gap-1.5 pt-1">
          <div
            className="h-4 rounded px-2 flex items-center"
            style={{ backgroundColor: primary }}
          >
            <span
              className="text-[7px] font-semibold"
              style={{ color: secondary }}
            >
              Button
            </span>
          </div>
          <div
            className="h-4 rounded px-2 flex items-center border"
            style={{ borderColor: primary }}
          >
            <span
              className="text-[7px] font-semibold"
              style={{ color: primary }}
            >
              Link
            </span>
          </div>
        </div>
      </div>

      {/* Mini footer */}
      <div className="px-3 py-1.5" style={{ backgroundColor: primary }}>
        <div
          className="h-1.5 rounded-full w-1/2 mx-auto"
          style={{ backgroundColor: secondary, opacity: 0.4 }}
        />
      </div>
    </div>
  )
}

const HEX_RE = /^#[0-9A-Fa-f]{6}$/

function CustomThemeModal({ onClose }: { onClose: () => void }) {
  const { theme: activeTheme, setTheme } = useTheme()
  const [primary, setPrimary] = useState(
    activeTheme.id === 'custom' ? activeTheme.primary : '#2D3436',
  )
  const [secondary, setSecondary] = useState(
    activeTheme.id === 'custom' ? activeTheme.secondary : '#DFE6E9',
  )

  const validPrimary = HEX_RE.test(primary)
  const validSecondary = HEX_RE.test(secondary)
  const canApply = validPrimary && validSecondary && primary !== secondary

  const applyCustom = () => {
    if (!canApply) return
    setTheme({ id: 'custom', name: 'Custom', primary, secondary })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden"
        style={{ backgroundColor: 'var(--color-secondary)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <h2
            className="text-lg font-bold"
            style={{ color: 'var(--color-secondary)' }}
          >
            Custom Theme
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:opacity-70 transition-opacity cursor-pointer"
            style={{ color: 'var(--color-secondary)' }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: 'var(--color-primary)' }}
              >
                Primary (header / text)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={validPrimary ? primary : '#000000'}
                  onChange={(e) => setPrimary(e.target.value.toUpperCase())}
                  className="w-9 h-9 rounded cursor-pointer border-0 p-0"
                />
                <input
                  type="text"
                  value={primary}
                  onChange={(e) => setPrimary(e.target.value.toUpperCase())}
                  maxLength={7}
                  placeholder="#2D3436"
                  className={`flex-1 px-2 py-1.5 text-xs font-mono rounded border outline-none ${
                    !validPrimary && primary.length > 1
                      ? 'border-red-400'
                      : ''
                  }`}
                  style={{
                    borderColor:
                      !validPrimary && primary.length > 1
                        ? undefined
                        : 'var(--color-primary)',
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-secondary)',
                  }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-semibold mb-1.5"
                style={{ color: 'var(--color-primary)' }}
              >
                Secondary (background)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={validSecondary ? secondary : '#FFFFFF'}
                  onChange={(e) => setSecondary(e.target.value.toUpperCase())}
                  className="w-9 h-9 rounded cursor-pointer border-0 p-0"
                />
                <input
                  type="text"
                  value={secondary}
                  onChange={(e) => setSecondary(e.target.value.toUpperCase())}
                  maxLength={7}
                  placeholder="#DFE6E9"
                  className={`flex-1 px-2 py-1.5 text-xs font-mono rounded border outline-none ${
                    !validSecondary && secondary.length > 1
                      ? 'border-red-400'
                      : ''
                  }`}
                  style={{
                    borderColor:
                      !validSecondary && secondary.length > 1
                        ? undefined
                        : 'var(--color-primary)',
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-secondary)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div>
            <p
              className="text-xs font-semibold mb-2"
              style={{ color: 'var(--color-primary)' }}
            >
              Preview
            </p>
            <div className="flex justify-center">
              <MiniPreview
                primary={validPrimary ? primary : '#2D3436'}
                secondary={validSecondary ? secondary : '#DFE6E9'}
              />
            </div>
          </div>

          {/* Apply button */}
          <button
            onClick={applyCustom}
            disabled={!canApply}
            className="w-full py-2.5 rounded-lg font-semibold text-sm transition-opacity disabled:opacity-30 cursor-pointer"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-secondary)',
            }}
          >
            Apply Custom Theme
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ThemesPage() {
  const { theme: activeTheme, setTheme } = useTheme()
  const navigate = useNavigate()
  const [view, setView] = useState<View>('categories')
  const [showCustom, setShowCustom] = useState(false)

  const renderThemeGrid = (list: Theme[]) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((t) => (
        <ThemeCard
          key={t.id}
          t={t}
          isActive={t.id === activeTheme.id}
          onSelect={() => setTheme(t)}
        />
      ))}
    </div>
  )

  if (view !== 'categories') {
    const isDark = view === 'dark'
    const list = isDark ? darkThemes : lightThemes
    return (
      <div>
        <button
          onClick={() => setView('categories')}
          className="hover:underline mb-4 flex items-center cursor-pointer"
          style={{ color: 'var(--color-primary)' }}
        >
          ← Back to categories
        </button>

        <h1 className="text-4xl font-bold mb-2">
          {isDark ? 'Dark' : 'Light'} Themes
        </h1>
        <p className="mb-8" style={{ color: 'var(--color-primary)', opacity: 0.65 }}>
          {isDark
            ? 'Rich dark backgrounds with vibrant accents for low-light viewing.'
            : 'Bright, clean backgrounds with bold accent colors.'}
        </p>

        {renderThemeGrid(list)}
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="hover:underline mb-4 flex items-center cursor-pointer"
        style={{ color: 'var(--color-primary)' }}
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-2">Color Schemes</h1>
      <p className="mb-8" style={{ color: 'var(--color-primary)', opacity: 0.65 }}>
        Choose a category to browse themes, or create your own custom palette.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {/* Light themes card */}
        <button
          onClick={() => setView('light')}
          className="text-left rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent cursor-pointer group"
        >
          <div className="flex h-28">
            <div className="flex-1" style={{ backgroundColor: '#02343F' }} />
            <div className="flex-1" style={{ backgroundColor: '#00539C' }} />
            <div className="flex-1" style={{ backgroundColor: '#2772A0' }} />
          </div>
          <div className="flex h-10">
            <div className="flex-1" style={{ backgroundColor: '#F0EDCC' }} />
            <div className="flex-1" style={{ backgroundColor: '#EEA47F' }} />
            <div className="flex-1" style={{ backgroundColor: '#CCDDEA' }} />
          </div>
          <div
            className="p-5"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <h3 className="font-bold text-xl group-hover:underline" style={{ color: 'var(--color-primary)' }}>
              Light Themes
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
              9 bright and clean color palettes
            </p>
          </div>
        </button>

        {/* Dark themes card */}
        <button
          onClick={() => setView('dark')}
          className="text-left rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent cursor-pointer group"
        >
          <div className="flex h-28">
            <div className="flex-1" style={{ backgroundColor: '#1A2037' }} />
            <div className="flex-1" style={{ backgroundColor: '#0D0D0D' }} />
            <div className="flex-1" style={{ backgroundColor: '#1C1C1E' }} />
          </div>
          <div className="flex h-10">
            <div className="flex-1" style={{ backgroundColor: '#3A97D4' }} />
            <div className="flex-1" style={{ backgroundColor: '#B388FF' }} />
            <div className="flex-1" style={{ backgroundColor: '#FF6B35' }} />
          </div>
          <div
            className="p-5"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <h3 className="font-bold text-xl group-hover:underline" style={{ color: 'var(--color-primary)' }}>
              Dark Themes
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
              9 rich and moody color palettes
            </p>
          </div>
        </button>

        {/* Custom theme card */}
        <button
          onClick={() => setShowCustom(true)}
          className="text-left rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent cursor-pointer group"
        >
          <div
            className="h-[152px] flex items-center justify-center"
            style={{
              background:
                'conic-gradient(from 0deg, #FF6B6B, #FFC857, #6BCB77, #4D96FF, #9B59B6, #FF6B6B)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.9 }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: 'var(--color-primary)' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <div
            className="p-5"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            <h3 className="font-bold text-xl group-hover:underline" style={{ color: 'var(--color-primary)' }}>
              Custom Theme
            </h3>
            <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.5 }}>
              Pick your own primary &amp; secondary colors
            </p>
          </div>
        </button>
      </div>

      {showCustom && <CustomThemeModal onClose={() => setShowCustom(false)} />}
    </div>
  )
}
