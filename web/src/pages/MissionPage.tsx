import { useNavigate } from 'react-router-dom'

function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      className={className || 'w-5 h-5'}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  )
}

export default function MissionPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: 'var(--color-secondary)', backgroundColor: 'var(--color-primary)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </button>
      </div>

      {/* Top row — Why + Inequality side by side */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Why This Exists */}
        <div
          className="rounded-xl border border-black/10 p-6 lg:w-1/2"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <Icon path="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Why This Exists</h3>
          </div>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
            <p>
              Academy of Testers was born from a simple observation: access to quality education shouldn't depend on where you live or how much your family earns.
            </p>
            <p>
              Growing up, I experienced firsthand the stark differences in educational standards across regions and communities. Some students had test prep tutors, review courses, and stacks of practice materials. Others had a textbook and not much else. The gap isn't about ability. It's about access.
            </p>
          </div>
        </div>

        {/* Education Inequality */}
        <div
          className="rounded-xl border border-black/10 p-6 lg:w-1/2"
          style={{ backgroundColor: 'var(--color-secondary)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
            >
              <Icon path="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">Education Inequality</h3>
          </div>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
            <p>
              Education inequality is a global issue that affects millions. Students in under-resourced schools often lack the materials, guidance, and practice opportunities that their peers in wealthier areas take for granted. Standardized tests like the AP and SAT carry real weight for college admissions and scholarships, yet preparation for these exams is often locked behind expensive courses and paywalls.
            </p>
            <p>
              This creates a cycle: those who already have advantages get more prepared, while those who need the most support get the least. It's not a level playing field, and it's something that can be changed.
            </p>
          </div>
        </div>
      </div>

      {/* What we do about it — full width */}
      <div
        className="rounded-xl border border-black/10 p-6 mb-6"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)' }}
          >
            <Icon path="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold">What We're Doing About It</h3>
        </div>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
          <p>
            Academy of Testers provides completely free, open-access study materials for AP and SAT exams. No accounts, no paywalls, no catches. Every student who has an internet connection can access the same unit reviews, practice problems, scoring rubrics, and AI-powered help that used to be reserved for those who could afford it.
          </p>
          <p>
            This project is built and maintained by students who believe that a quality education should be a right, not a privilege. If even one person scores higher on their exam because of what they found here, it's worth it.
          </p>
        </div>
      </div>

      {/* Closing statement */}
      <div
        className="rounded-xl p-5 text-center"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, var(--color-secondary))',
        }}
      >
        <p className="text-sm font-medium" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
          "Everyone deserves the chance to prove what they're capable of, regardless of circumstance."
        </p>
      </div>
    </div>
  )
}
