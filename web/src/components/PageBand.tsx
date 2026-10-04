import type { ReactNode } from 'react'

/**
 * The site's page header: a full-bleed accent band carrying the page title (the home page's
 * "badge" look). Optional pieces:
 *  - `crumbs`   breadcrumb trail above the title; items with onClick are links
 *  - `back`     a quiet pill button in the band's top-right corner
 *  - `watermark` oversized faded letters behind the title ("AP", "SAT")
 *  - `badge`    a round element pinned across the band's bottom edge (a logo or subject icon)
 * The band breaks out of the page's padded column with a 100vw width; `body { overflow-x: hidden }`
 * in index.css stops the scrollbar's width from causing a sideways scroll.
 */

export interface Crumb {
  label: string
  onClick?: () => void
}

interface PageBandProps {
  title: ReactNode
  subtitle?: ReactNode
  crumbs?: Crumb[]
  back?: { label: string; onClick: () => void }
  watermark?: string
  badge?: ReactNode
  align?: 'left' | 'center'
  /** Content width inside the band — match the page column so the title lines up with the content. */
  width?: string
  /** 'hero' is the home page's oversized title, 'page' every other page, and 'compact' a slim
   * band for when a tool is open below it and vertical space matters. */
  size?: 'page' | 'hero' | 'compact'
  children?: ReactNode
}

export default function PageBand({
  title,
  subtitle,
  crumbs,
  back,
  watermark,
  badge,
  align = 'left',
  width = 'max-w-5xl',
  size = 'page',
  children,
}: PageBandProps) {
  const hero = size === 'hero'
  const compact = size === 'compact'
  const centered = align === 'center'
  return (
    <>
      <section
        className={`relative left-1/2 -translate-x-1/2 w-screen overflow-hidden -mt-6 sm:-mt-8 px-4 sm:px-8 ${hero ? 'pt-14 sm:pt-20' : compact ? 'pt-5' : 'pt-8 sm:pt-10'} ${badge ? (hero ? 'pb-36' : 'pb-20 sm:pb-24') : compact ? 'pb-6' : 'pb-10 sm:pb-12'}`}
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        {watermark && (
          <span
            aria-hidden="true"
            className="absolute -bottom-8 sm:-bottom-12 right-[4vw] font-display font-bold leading-none select-none pointer-events-none"
            style={{
              fontSize: 'clamp(8rem, 24vw, 19rem)',
              color: 'color-mix(in srgb, var(--accent-ink) 10%, transparent)',
            }}
          >
            {watermark}
          </span>
        )}

        <div className={`relative mx-auto ${width} ${centered ? 'text-center' : ''}`}>
          {(crumbs?.length || back) && (
            <div
              className={`flex items-center gap-4 ${compact ? 'mb-3' : 'mb-5'} ${centered ? 'justify-center' : 'justify-between'}`}
            >
              {crumbs?.length ? (
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-1.5 text-sm min-w-0 opacity-80"
                >
                  {crumbs.map((c, i) => (
                    <span key={i} className="flex items-center gap-1.5 min-w-0">
                      {i > 0 && (
                        <svg
                          className="w-3.5 h-3.5 flex-shrink-0 opacity-60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                      {c.onClick ? (
                        <button
                          onClick={c.onClick}
                          className="hover:underline underline-offset-2 cursor-pointer whitespace-nowrap"
                        >
                          {c.label}
                        </button>
                      ) : (
                        <span className="truncate font-semibold">{c.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              ) : (
                <span />
              )}
              {back && (
                <button
                  onClick={back.onClick}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium cursor-pointer flex-shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2"
                  style={
                    {
                      border: '1px solid color-mix(in srgb, var(--accent-ink) 35%, transparent)',
                      borderRadius: 'var(--radius-btn)',
                      ['--tw-ring-color' as string]: 'var(--accent-ink)',
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  {back.label}
                </button>
              )}
            </div>
          )}

          <h1
            className={`font-display font-bold tracking-tight ${hero ? 'leading-[0.9]' : 'leading-[0.95]'}`}
            style={
              {
                fontSize: hero
                  ? 'clamp(3rem, 9vw, 7.5rem)'
                  : compact
                    ? 'clamp(1.75rem, 4vw, 2.5rem)'
                    : 'clamp(2.5rem, 6vw, 4.5rem)',
                textWrap: 'balance',
              } as React.CSSProperties
            }
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-base sm:text-lg mt-4 max-w-2xl opacity-80 leading-relaxed ${centered ? 'mx-auto' : ''}`}
            >
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </section>

      {badge && (
        <div
          className={`relative mx-auto ${width} flex ${centered ? 'justify-center' : ''} ${hero ? '-mt-[130px]' : '-mt-12 sm:-mt-14'} mb-2`}
        >
          <div className="rounded-full p-2" style={{ backgroundColor: 'var(--bg)' }}>
            {badge}
          </div>
        </div>
      )}
    </>
  )
}

/** A round accent disc with an icon — the default `badge` for subject pages. */
export function IconBadge({ path }: { path: string }) {
  return (
    <div
      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: 'var(--surface)',
        color: 'var(--accent)',
        border: '1px solid var(--hairline)',
      }}
    >
      <svg
        className="w-9 h-9 sm:w-10 sm:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={path} />
      </svg>
    </div>
  )
}
