import { useNavigate } from 'react-router-dom'
import PageBand from '../components/PageBand'
import { EXAM_LOGISTICS } from '../data/examLogistics'

export default function ExamLogisticsPage({ exam }: { exam: 'ap' | 'sat' }) {
  const navigate = useNavigate()
  const guide = EXAM_LOGISTICS[exam]
  const hub = exam === 'ap' ? '/ap/hub' : '/sat/hub'
  const hubLabel = exam === 'ap' ? 'AP hub' : 'SAT hub'

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <PageBand
        crumbs={[{ label: hubLabel, onClick: () => navigate(hub) }, { label: 'Logistics' }]}
        back={{ label: hubLabel, onClick: () => navigate(hub) }}
        watermark={exam.toUpperCase()}
        title={guide.title}
        subtitle={guide.intro}
      />

      <div
        className="mt-8 rounded-xl border px-4 py-3 text-sm leading-relaxed"
        style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)', color: 'var(--text-muted)' }}
      >
        <span className="font-semibold" style={{ color: 'var(--text)' }}>
          Always confirm with College Board.
        </span>{' '}
        This is an independent summary, not an official source. Policies and dates change each year; the{' '}
        <a
          href={guide.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline"
          style={{ color: 'var(--text)' }}
        >
          official site
        </a>{' '}
        has the final word.
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-5">
        {guide.sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="rounded-2xl border p-5"
            style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
          >
            <h2 className="font-display text-lg font-bold tracking-tight">{s.title}</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed list-disc pl-5" style={{ color: 'var(--text)' }}>
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {s.links && s.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {s.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-opacity hover:opacity-80"
                    style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)', color: 'var(--text)' }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
