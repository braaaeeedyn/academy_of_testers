import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ExamsPage from './pages/ExamsPage'
import SubjectsPage from './pages/SubjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import ResourceDetailPage from './pages/ResourceDetailPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-deep-cream-dark text-deep-cream-light py-6 shadow-md">
          <div className="container mx-auto px-4">
            <Link to="/" className="block hover:opacity-90 transition-opacity">
              <h1 className="text-3xl font-bold">Academy of Testers</h1>
              <p className="text-sm mt-2">Free access to past AP and SAT exam materials</p>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-1">
          <Routes>
            <Route path="/" element={<ExamsPage />} />
            <Route path="/exams/:examId" element={<SubjectsPage />} />
            <Route path="/subjects/:subjectId" element={<ResourcesPage />} />
            <Route path="/resources/:resourceId" element={<ResourceDetailPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm">Academy of Testers © 2025 - Free study resources for students</p>
              <p className="text-xs text-gray-400 mt-2">
                All exam materials are for educational purposes only
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
