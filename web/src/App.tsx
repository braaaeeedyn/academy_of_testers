import { useState, type ReactNode } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ClickSpark from './components/ClickSpark'
import LogoLoop from './components/LogoLoop'
import ExamsPage from './pages/ExamsPage'
import SubjectsPage from './pages/SubjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ExamHubPage from './pages/ExamHubPage'
import ExamInfoPage from './pages/ExamInfoPage'
import PracticePage from './pages/PracticePage'
import ThemesPage from './pages/ThemesPage'
import ExamTipsPage from './pages/ExamTipsPage'
import AboutPage from './pages/AboutPage'
import MissionPage from './pages/MissionPage'
import AiChat from './components/AiChat'

const SAT_SUBJECT_IDS = new Set(['30', '31', '32', '33'])

const headerBtnClass = 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90 border cursor-pointer'
const headerBtnStyle = {
  backgroundColor: 'var(--color-secondary)',
  color: 'var(--color-primary)',
  borderColor: 'var(--color-secondary)',
}

function AppHeader({ onChatOpen }: { onChatOpen: () => void }) {
  const location = useLocation()
  const pathname = location.pathname

  const apHubMatch = pathname.match(/^\/exams\/(\d+)\/hub$/)
  const subjectMatch = pathname.match(/^\/subjects\/(\d+)$/)

  let showApLinks = false
  let apExamId: string | null = null

  if (apHubMatch) {
    apExamId = apHubMatch[1]
    if (apExamId === '1') showApLinks = true
  } else if (subjectMatch) {
    const subjectId = subjectMatch[1]
    if (!SAT_SUBJECT_IDS.has(subjectId)) {
      showApLinks = true
      apExamId = '1'
    }
  }

  return (
    <header className="py-3 shadow-md" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity cursor-pointer">
          <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-secondary)' }}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
          </svg>
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-secondary)' }}>
            Academy of Testers
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {showApLinks && apExamId && (
            <>
              <Link
                to={`/exams/${apExamId}/exam-info`}
                className={headerBtnClass}
                style={headerBtnStyle}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Scoring
              </Link>
              <Link
                to={`/exams/${apExamId}/tips`}
                className={headerBtnClass}
                style={headerBtnStyle}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Tips
              </Link>
            </>
          )}
          <Link
            to="/themes"
            className={headerBtnClass}
            style={headerBtnStyle}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            Themes
          </Link>
          <button
            onClick={onChatOpen}
            className={headerBtnClass}
            style={headerBtnStyle}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Testy AI
          </button>
          <a
            href="https://buymeacoffee.com/braaaeeedyn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:brightness-105 cursor-pointer border border-transparent"
            style={{ backgroundColor: '#FFDD00', color: '#000000' }}
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
              className="h-5 w-5"
            />
            Buy me a coffee
          </a>
        </div>
      </div>
    </header>
  )
}

const FOOTER_ICON_SIZE = 'w-5 h-5'

const footerLogos: { node: ReactNode; title: string; href?: string; internal?: boolean }[] = [
  {
    node: (
      <svg className={FOOTER_ICON_SIZE} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/braedyn-thompson-67a396284/',
  },
  {
    node: (
      <svg className={FOOTER_ICON_SIZE} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
      </svg>
    ),
    title: 'TikTok',
    href: 'https://www.tiktok.com/@academyoftesters',
  },
  {
    node: (
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
        className={FOOTER_ICON_SIZE}
      />
    ),
    title: 'Buy Me a Coffee',
    href: 'https://buymeacoffee.com/braaaeeedyn',
  },
  {
    node: (
      <svg className={FOOTER_ICON_SIZE} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: 'GitHub',
    href: 'https://github.com/braaaeeedyn',
  },
  {
    node: (
      <svg className={FOOTER_ICON_SIZE} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'About',
    href: '/about',
    internal: true,
  },
]

function AppFooter() {
  const navigate = useNavigate()

  return (
    <footer className="py-4 mt-auto overflow-hidden" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div style={{ height: '40px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={footerLogos}
          speed={40}
          direction="left"
          logoHeight={22}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="var(--color-primary)"
          ariaLabel="Social links"
          renderItem={(item, key) => {
            const logo = item as (typeof footerLogos)[number]
            if (logo.internal) {
              return (
                <button
                  key={key}
                  onClick={() => navigate(logo.href!)}
                  className="logoloop__link flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
                  style={{ color: 'var(--color-secondary)', fontSize: '14px' }}
                  aria-label={logo.title}
                >
                  <span className="logoloop__node">{logo.node}</span>
                  <span className="font-medium">{logo.title}</span>
                </button>
              )
            }
            return (
              <a
                key={key}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="logoloop__link flex items-center gap-2"
                style={{ color: 'var(--color-secondary)', fontSize: '14px' }}
                aria-label={logo.title}
              >
                <span className="logoloop__node">{logo.node}</span>
                <span className="font-medium">{logo.title}</span>
              </a>
            )
          }}
        />
      </div>
      <p className="text-center text-xs mt-2 opacity-40" style={{ color: 'var(--color-secondary)' }}>
        Academy of Testers © 2025
      </p>
    </footer>
  )
}

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <ThemeProvider>
      <Router>
        <ClickSpark sparkColor="var(--color-primary)" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <AppHeader onChatOpen={() => setChatOpen(true)} />

            <main className="container mx-auto px-4 py-8 flex-1">
              <Routes>
                <Route path="/" element={<ExamsPage />} />
                <Route path="/exams/:examId/hub" element={<ExamHubPage />} />
                <Route path="/exams/:examId/exam-info" element={<ExamInfoPage />} />
                <Route path="/exams/:examId/practice" element={<PracticePage />} />
                <Route path="/exams/:examId/tips" element={<ExamTipsPage />} />
                <Route path="/exams/:examId" element={<SubjectsPage />} />
                <Route path="/subjects/:subjectId" element={<ResourcesPage />} />
                <Route path="/resources/:resourceId" element={<ResourceDetailPage />} />
                <Route path="/themes" element={<ThemesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/mission" element={<MissionPage />} />
              </Routes>
            </main>

            <AppFooter />
          </div>
        </ClickSpark>

        <AiChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      </Router>
    </ThemeProvider>
  )
}

export default App
