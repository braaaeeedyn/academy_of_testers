import { Link } from 'react-router-dom'
import AotLogo from '../components/AotLogo'
import PageBand from '../components/PageBand'
import WatermarkCard from '../components/WatermarkCard'
import { AP_SUBJECT_CATEGORIES } from '../data/apCategories'

const AP_SUBJECT_COUNT = AP_SUBJECT_CATEGORIES.reduce((n, c) => n + c.subjectNames.length, 0)

const EXAMS = [
  {
    key: 'AP',
    title: 'AP Exams',
    to: '/ap/hub',
    blurb: 'Unit reviews, real 2025 free-response questions, and timed mock exams.',
    meta: `${AP_SUBJECT_COUNT} subjects`,
  },
  {
    key: 'SAT',
    title: 'SAT',
    to: '/sat/hub',
    blurb: 'Adaptive practice, topic lessons, and full-length practice tests.',
    meta: '5 sections',
  },
]

const DEVELOPER = {
  name: 'Braedyn Thompson',
  photo: '/developer.png',
  line: 'UC Berkeley CS & Data Science student, building free tools for students.',
}

const SOCIALS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@academyoftesters',
    path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/braedyn-thompson-67a396284/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/braaaeeedyn',
    path: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
  },
]

export default function ExamsPage() {
  return (
    <div className="pb-12">
      <PageBand
        size="hero"
        align="center"
        title="Academy of Testers"
        subtitle="Where every tester has the opportunity to excel."
        badge={<AotLogo size={240} />}
      />

      <section className="max-w-5xl mx-auto mt-10">
        <h2 className="text-center font-display text-2xl font-bold mb-6">Choose your exam</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {EXAMS.map((e) => (
            <WatermarkCard
              key={e.key}
              to={e.to}
              watermark={e.key}
              meta={e.meta}
              title={e.title}
              blurb={e.blurb}
            />
          ))}
        </div>
      </section>

      <section
        className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-10 pt-10"
        style={{ borderTop: '1px solid var(--hairline)' }}
      >
        <div className="flex items-start gap-5">
          <img
            src={DEVELOPER.photo}
            alt=""
            className="w-20 h-20 object-cover flex-shrink-0"
            style={{ borderRadius: 'var(--radius-card)' }}
          />
          <div>
            <h2 className="font-display text-xl font-bold">Meet the developer</h2>
            <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span className="font-semibold" style={{ color: 'var(--text)' }}>
                {DEVELOPER.name}
              </span>
              . {DEVELOPER.line}
            </p>
            <Link
              to="/about"
              className="inline-block text-sm font-semibold mt-2 underline underline-offset-4"
            >
              Read about Braedyn
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Follow Academy of Testers</h2>
          <p className="text-sm mt-1.5" style={{ color: 'var(--text-muted)' }}>
            New resources and study tips, as they’re made.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium hover:opacity-80"
                style={{ border: '1px solid var(--hairline)', borderRadius: 'var(--radius-btn)' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
