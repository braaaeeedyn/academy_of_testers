import { useState, useEffect, type ReactNode } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { setTokenAccessor } from './services/api'
import ClickSpark from './components/ClickSpark'
import LogoLoop from './components/LogoLoop'
import ExamsPage from './pages/ExamsPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'
import ExamHubPage from './pages/ExamHubPage'
import ExamInfoPage from './pages/ExamInfoPage'
import ApPlannerPage from './pages/ApPlannerPage'
import ThemesPage from './pages/ThemesPage'
import AboutPage from './pages/AboutPage'
import MissionPage from './pages/MissionPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import VerifyPage from './pages/VerifyPage'
import SatAdaptivePage from './pages/SatAdaptivePage'
import SatHubPage from './pages/SatHubPage'
import SatPrepPage from './pages/SatPrepPage'
import SatPrepTopicPage from './pages/SatPrepTopicPage'
import AiChat from './components/AiChat'
import { ChatProvider } from './context/ChatContext'
import {
  LegacyExamHubRedirect,
  LegacyExamRedirect,
  LegacyExamInfoRedirect,
  LegacyExamPracticeRedirect,
  LegacySubjectRedirect,
  PracticeToHubRedirect,
} from './pages/LegacyRedirects'


const headerBtnClass = 'nav-hover-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border cursor-pointer'
const mobileMenuBtnClass = 'flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium border cursor-pointer'
const headerBtnStyle = {
  backgroundColor: 'var(--header-text)',
  color: 'var(--header-bg)',
  borderColor: 'var(--header-text)',
}

function NavHoverLayers() {
  return <span className="nav-hover-streak" />
}

const ThemesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
)
const TestyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)
const LogoutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
)
const LoginIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>
)

function AppHeader({ onChatOpen }: { onChatOpen: () => void }) {
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = async () => {
    setMenuOpen(false)
    await logout()
    navigate('/')
  }

  return (
    <header className="py-3 shadow-md relative" style={{ backgroundColor: 'var(--header-bg)', borderBottom: '1px solid var(--hairline)' }}>
      <div className="container mx-auto px-4 flex items-center justify-between gap-2">
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity cursor-pointer min-w-0">
          <svg className="w-7 h-7 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--header-text)' }}>
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
          </svg>
          <span className="font-display text-base sm:text-lg font-bold tracking-tight truncate" style={{ color: 'var(--header-text)' }}>
            Academy of Testers
          </span>
        </Link>

        {/* Desktop / tablet nav */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/themes" className={headerBtnClass} style={headerBtnStyle}>
            <NavHoverLayers />
            <span className="nav-hover-content"><ThemesIcon />Themes</span>
          </Link>
          <button onClick={onChatOpen} className={headerBtnClass} style={headerBtnStyle}>
            <NavHoverLayers />
            <span className="nav-hover-content"><TestyIcon />Testy AI</span>
          </button>
          {isAuthenticated ? (
            <button onClick={handleLogout} className={headerBtnClass} style={headerBtnStyle}>
              <NavHoverLayers />
              <span className="nav-hover-content"><LogoutIcon />{user?.displayName || 'Logout'}</span>
            </button>
          ) : (
            <Link to="/login" className={headerBtnClass} style={headerBtnStyle}>
              <NavHoverLayers />
              <span className="nav-hover-content"><LoginIcon />Log In</span>
            </Link>
          )}
          <a
            href="https://buymeacoffee.com/braaaeeedyn"
            target="_blank"
            rel="noopener noreferrer"
            className="bmc-btn flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer border border-transparent"
            style={{ backgroundColor: '#FFDD00', color: '#000000' }}
          >
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" className="bmc-icon h-5 w-5" />
            <span className="bmc-label">Buy me a coffee</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border cursor-pointer flex-shrink-0"
          style={headerBtnStyle}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute left-0 right-0 top-full z-40 flex flex-col gap-2 p-4 shadow-lg"
          style={{ backgroundColor: 'var(--header-bg)', borderBottom: '1px solid var(--hairline)' }}
        >
          <Link to="/themes" onClick={() => setMenuOpen(false)} className={mobileMenuBtnClass} style={headerBtnStyle}>
            <ThemesIcon />Themes
          </Link>
          <button onClick={() => { setMenuOpen(false); onChatOpen() }} className={mobileMenuBtnClass} style={headerBtnStyle}>
            <TestyIcon />Testy AI
          </button>
          {isAuthenticated ? (
            <button onClick={handleLogout} className={mobileMenuBtnClass} style={headerBtnStyle}>
              <LogoutIcon />{user?.displayName || 'Logout'}
            </button>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className={mobileMenuBtnClass} style={headerBtnStyle}>
              <LoginIcon />Log In
            </Link>
          )}
          <a
            href="https://buymeacoffee.com/braaaeeedyn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer border border-transparent"
            style={{ backgroundColor: '#FFDD00', color: '#000000' }}
          >
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" className="h-5 w-5" />
            Buy me a coffee
          </a>
        </div>
      )}
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
    <footer className="py-4 mt-auto overflow-hidden" style={{ backgroundColor: 'var(--footer-bg)', borderTop: '1px solid var(--footer-border)' }}>
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
          fadeOutColor="var(--footer-bg)"
          ariaLabel="Social links"
          renderItem={(item, key) => {
            const logo = item as (typeof footerLogos)[number]
            if (logo.internal) {
              return (
                <button
                  key={key}
                  onClick={() => navigate(logo.href!)}
                  className="logoloop__link flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
                  style={{ color: 'var(--footer-text)', fontSize: '14px' }}
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
                style={{ color: 'var(--footer-text)', fontSize: '14px' }}
                aria-label={logo.title}
              >
                <span className="logoloop__node">{logo.node}</span>
                <span className="font-medium">{logo.title}</span>
              </a>
            )
          }}
        />
      </div>
      <p className="text-center text-xs mt-2 opacity-60" style={{ color: 'var(--footer-text)' }}>
        Academy of Testers © 2025
      </p>
    </footer>
  )
}

function TokenAccessorBridge() {
  const { accessToken } = useAuth()
  useEffect(() => {
    setTokenAccessor(() => accessToken)
  }, [accessToken])
  return null
}

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <TokenAccessorBridge />
          <ClickSpark sparkColor="var(--accent)" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg)' }}>
              <AppHeader onChatOpen={() => setChatOpen(true)} />

              <main className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8 flex-1">
                <ChatProvider openChat={() => setChatOpen(true)}>
                <Routes>
                  <Route path="/" element={<ExamsPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/verify" element={<VerifyPage />} />
                  <Route path="/resources/:resourceId" element={<ResourceDetailPage />} />
                  {/* Legacy URL redirects */}
                  <Route path="/exams/:examId/hub" element={<LegacyExamHubRedirect />} />
                  <Route path="/exams/:examId/exam-info" element={<LegacyExamInfoRedirect />} />
                  <Route path="/exams/:examId/practice" element={<LegacyExamPracticeRedirect />} />
                  <Route path="/exams/:examId" element={<LegacyExamRedirect />} />
                  <Route path="/subjects/:subjectId" element={<LegacySubjectRedirect />} />
                  {/* Slug-based exam routes */}
                  <Route path="/ap/planner" element={<ApPlannerPage />} />
                  <Route path="/:examSlug/hub" element={<ExamHubPage />} />
                  <Route path="/:examSlug/exam-info" element={<ExamInfoPage />} />
                  <Route path="/:examSlug/practice" element={<PracticeToHubRedirect />} />
                  <Route path="/:examSlug/:subjectSlug" element={<ResourcesPage />} />
                  <Route path="/sat/hub" element={<SatHubPage />} />
                  <Route path="/sat/prep" element={<SatPrepPage />} />
                  <Route path="/sat/prep/:topicId" element={<SatPrepTopicPage />} />
                  <Route path="/sat/adaptive" element={<SatAdaptivePage />} />
                  <Route path="/themes" element={<ThemesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/mission" element={<MissionPage />} />
                </Routes>
                </ChatProvider>
              </main>

              <AppFooter />
            </div>
          </ClickSpark>

          <AiChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
