import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-deep-cream-dark text-deep-cream-light py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Academy of Testers</h1>
            <p className="text-sm mt-2">Free access to past exam materials</p>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white py-6 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>Academy of Testers © 2024 - Free study resources for students</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Academy of Testers</h2>
      <p className="text-gray-700">
        Browse past AP and SAT exam materials. Coming soon!
      </p>
    </div>
  )
}

export default App
