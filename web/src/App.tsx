import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
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
            AI Helper
          </button>
        </div>
      </div>
    </header>
  )
}

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <ThemeProvider>
      <Router>
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

          <footer className="py-6 mt-auto" style={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="container mx-auto px-4">
              <div className="text-center" style={{ color: 'var(--color-secondary)' }}>
                <p className="text-sm">Academy of Testers © 2025 - Free study resources for students</p>
                <p className="text-xs mt-2 opacity-60">
                  All exam materials are for educational purposes only
                </p>
              </div>
            </div>
          </footer>
        </div>

        <AiChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      </Router>
    </ThemeProvider>
  )
}

export default App
