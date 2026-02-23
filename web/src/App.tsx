import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <header className="py-6 shadow-md" style={{ backgroundColor: 'var(--color-primary)' }}>
            <div className="container mx-auto px-4 flex items-center justify-between">
              <Link to="/" className="block hover:opacity-90 transition-opacity cursor-pointer">
                <h1 className="text-3xl font-bold" style={{ color: 'var(--color-secondary)' }}>
                  Academy of Testers
                </h1>
                <p className="text-sm mt-2 opacity-80" style={{ color: 'var(--color-secondary)' }}>
                  Free access to past AP and SAT exam materials
                </p>
              </Link>
              <Link
                to="/themes"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90 border cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-secondary)',
                }}
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
            </div>
          </header>

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
      </Router>
    </ThemeProvider>
  )
}

export default App
