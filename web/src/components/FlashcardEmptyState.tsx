const DEFAULT_ICON =
  'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'

interface Props {
  title: string
  body: string
  iconPath?: string
  action?: React.ReactNode
}

export default function FlashcardEmptyState({ title, body, iconPath = DEFAULT_ICON, action }: Props) {
  return (
    <div
      className="text-center py-16 px-6 rounded-2xl border"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d={iconPath} />
        </svg>
      </div>
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        {body}
      </p>
      {action}
    </div>
  )
}
