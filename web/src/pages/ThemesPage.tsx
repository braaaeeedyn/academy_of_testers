import { useNavigate } from 'react-router-dom'
import { themes } from '../types/theme'
import { useTheme } from '../context/ThemeContext'

export default function ThemesPage() {
  const { theme: activeTheme, setTheme } = useTheme()
  const navigate = useNavigate()

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
      <p className="text-gray-600 mb-8">
        Choose a color scheme that will be applied across all pages. Your selection is saved automatically.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((t) => {
          const isActive = t.id === activeTheme.id
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t)}
              className={`text-left rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 cursor-pointer ${
                isActive ? 'ring-4 ring-offset-2 ring-blue-500 border-blue-500' : 'border-transparent'
              }`}
            >
              {/* Color preview bar */}
              <div className="flex h-24">
                <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: t.primary }}>
                  <span
                    className="text-xs font-mono font-semibold px-2 py-1 rounded bg-black/20"
                    style={{ color: t.secondary }}
                  >
                    {t.primary}
                  </span>
                </div>
                <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: t.secondary }}>
                  <span
                    className="text-xs font-mono font-semibold px-2 py-1 rounded bg-black/10"
                    style={{ color: t.primary }}
                  >
                    {t.secondary}
                  </span>
                </div>
              </div>

              {/* Sample UI preview */}
              <div className="h-20 px-3 py-2 flex flex-col gap-1.5" style={{ backgroundColor: t.secondary }}>
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
                    <span className="text-[8px] font-semibold" style={{ color: t.secondary }}>
                      Button
                    </span>
                  </div>
                  <div
                    className="h-5 rounded px-2 flex items-center border"
                    style={{ borderColor: t.primary }}
                  >
                    <span className="text-[8px] font-semibold" style={{ color: t.primary }}>
                      Link
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                  {isActive && (
                    <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <div className="flex gap-3 mt-2 text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-3 h-3 rounded-full border border-gray-300"
                      style={{ backgroundColor: t.primary }}
                    />
                    {t.primary}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="inline-block w-3 h-3 rounded-full border border-gray-300"
                      style={{ backgroundColor: t.secondary }}
                    />
                    {t.secondary}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
