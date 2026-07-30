import { useMemo, useState } from 'react'
import { getReferenceBySubjectName } from '../data/reference'
import MathText from './MathText'

type Tab = 'formulas' | 'glossary' | 'tested'

export default function SubjectReference({ subjectName }: { subjectName: string }) {
  const ref = useMemo(() => getReferenceBySubjectName(subjectName), [subjectName])

  const tabs = useMemo(() => {
    const t: { id: Tab; label: string }[] = []
    if (ref?.formulaGroups?.length) t.push({ id: 'formulas', label: 'Formula sheet' })
    if (ref?.glossary?.length) t.push({ id: 'glossary', label: 'Key terms' })
    if (ref?.frequentlyTested?.length) t.push({ id: 'tested', label: 'Most tested' })
    return t
  }, [ref])

  const [tab, setTab] = useState<Tab>(tabs[0]?.id ?? 'tested')

  if (!ref || tabs.length === 0) {
    return (
      <div className="text-center py-16 rounded-2xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
        <h3 className="font-display text-xl font-bold mb-2">Reference material is coming soon</h3>
        <p className="max-w-md mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
          A formula sheet, glossary, and exam breakdown for {subjectName} are being prepared.
        </p>
      </div>
    )
  }

  const active = tabs.some((t) => t.id === tab) ? tab : tabs[0].id

  return (
    <div>
      <h2 className="font-display text-2xl font-bold mb-1">Reference & Formulas</h2>
      {ref.note && (
        <p className="text-sm mb-5 max-w-prose" style={{ color: 'var(--text-muted)' }}>
          {ref.note}
        </p>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tabs.map((t) => {
          const on = t.id === active
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-3.5 py-1.5 rounded-full text-sm font-semibold cursor-pointer transition-colors border"
              style={on
                ? { backgroundColor: 'var(--accent)', color: 'var(--accent-ink)', borderColor: 'var(--accent)' }
                : { backgroundColor: 'var(--surface)', color: 'var(--text-muted)', borderColor: 'var(--hairline)' }}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {active === 'formulas' && ref.formulaGroups && (
        <div className="space-y-5">
          {ref.formulaGroups.map((g) => (
            <section key={g.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: 'var(--text-muted)' }}>
                {g.title}
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {g.items.map((f) => (
                  <div key={f.name} className="rounded-xl border p-4" style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--hairline)' }}>
                    <div className="text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>{f.name}</div>
                    <div className="overflow-x-auto">
                      <MathText component="div" className="text-[15px]">{`\\[${f.latex}\\]`}</MathText>
                    </div>
                    {f.note && <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{f.note}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {active === 'glossary' && ref.glossary && (
        <div className="space-y-2">
          {ref.glossary.map((g) => (
            <div key={g.term} className="rounded-xl border p-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
              <h4 className="text-sm font-bold">{g.term}</h4>
              <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{g.definition}</p>
            </div>
          ))}
        </div>
      )}

      {active === 'tested' && ref.frequentlyTested && (
        <div className="space-y-2">
          {ref.frequentlyTested.map((t) => (
            <div key={t.topic} className="rounded-xl border p-4 flex items-start gap-4" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold">{t.topic}</h4>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{t.note}</p>
              </div>
              {t.weight && (
                <span className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
                  {t.weight}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
