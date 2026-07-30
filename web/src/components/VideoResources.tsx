import { useCallback, useEffect, useRef, useState } from 'react'
import type { ParsedVideo, SubjectVideo } from '../data/videoResources'

const PLAY_ICON = 'M14.752 11.168l-5.197-3.03A1 1 0 008 9.002v5.996a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z'
const EXPAND_ICON = 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4'
const EXTERNAL_ICON = 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
const PLAYLIST_ICON = 'M4 6h16M4 10h16M4 14h10m-10 4h10m6-4v6m3-3h-6'
const CLOSE_ICON = 'M6 18L18 6M6 6l12 12'

function Icon({ path, className = 'w-4 h-4' }: { path: string; className?: string }) {
  return (
    <svg
      className={className}
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

/** Adds autoplay to an embed URL, preserving any query string it already has. */
function autoplayUrl(embedUrl: string): string {
  const separator = embedUrl.includes('?') ? '&' : '?'
  return `${embedUrl}${separator}autoplay=1&rel=0`
}

function Player({ source, title }: { source: Extract<ParsedVideo, { kind: 'video' | 'playlist' }>; title: string }) {
  return (
    <iframe
      src={autoplayUrl(source.embedUrl)}
      title={title}
      className="absolute inset-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

/** Full-screen lightbox. Closes on Escape or backdrop click, and traps focus on the close button. */
function VideoOverlay({
  video,
  onClose,
}: {
  video: SubjectVideo
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  if (video.source.kind === 'external') return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.label}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {video.label}
            </div>
            <div className="text-sm mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {video.description}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={video.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <Icon path={EXTERNAL_ICON} />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close video"
              className="flex items-center justify-center w-9 h-9 rounded-lg cursor-pointer transition-colors"
              style={{ color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <Icon path={CLOSE_ICON} className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: '16 / 9', backgroundColor: '#000000' }}
        >
          <Player source={video.source} title={video.label} />
        </div>
      </div>
    </div>
  )
}

function VideoCard({
  video,
  isPlaying,
  onPlay,
  onExpand,
}: {
  video: SubjectVideo
  isPlaying: boolean
  onPlay: () => void
  onExpand: () => void
}) {
  const { source } = video
  const embeddable = source.kind !== 'external'

  return (
    <div
      className="flex flex-col rounded-2xl border overflow-hidden"
      style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: '16 / 9', backgroundColor: 'var(--surface-elevated, var(--surface))' }}
      >
        {isPlaying && embeddable ? (
          <Player source={source} title={video.label} />
        ) : (
          <button
            onClick={embeddable ? onPlay : undefined}
            disabled={!embeddable}
            aria-label={embeddable ? `Play ${video.label}` : undefined}
            className={`group absolute inset-0 w-full h-full flex items-center justify-center ${
              embeddable ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            {source.kind === 'video' ? (
              <img
                src={source.thumbnailUrl}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: 'var(--text-muted)' }}
              >
                <Icon path={source.kind === 'playlist' ? PLAYLIST_ICON : EXTERNAL_ICON} className="w-10 h-10 opacity-40" />
              </div>
            )}

            {embeddable && (
              <>
                <div
                  className="absolute inset-0 transition-opacity group-hover:opacity-60"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
                />
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
                >
                  <Icon path={PLAY_ICON} className="w-7 h-7" />
                </div>
              </>
            )}

            {source.kind === 'playlist' && (
              <span
                className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#ffffff' }}
              >
                Playlist
              </span>
            )}
          </button>
        )}
      </div>

      <div className="flex items-start justify-between gap-3 p-4">
        <div className="min-w-0">
          <h3 className="text-sm font-bold">{video.label}</h3>
          <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {video.description}
          </p>
          {source.kind === 'external' && (
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--text-muted)', opacity: 0.75 }}>
              Opens {source.host} in a new tab.
            </p>
          )}
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {embeddable && (
            <button
              onClick={onExpand}
              aria-label={`Expand ${video.label}`}
              title="Expand"
              className="flex items-center justify-center w-8 h-8 rounded-lg border cursor-pointer transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--hairline)', color: 'var(--text)' }}
            >
              <Icon path={EXPAND_ICON} />
            </button>
          )}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${video.label} in a new tab`}
            title="Open externally"
            className="flex items-center justify-center w-8 h-8 rounded-lg border transition-colors hover:opacity-80"
            style={{ borderColor: 'var(--hairline)', color: 'var(--text)' }}
          >
            <Icon path={EXTERNAL_ICON} />
          </a>
        </div>
      </div>
    </div>
  )
}

interface Props {
  videos: SubjectVideo[]
  note?: string
}

export default function VideoResources({ videos, note }: Props) {
  const [playingSlot, setPlayingSlot] = useState<string | null>(null)
  const [expandedSlot, setExpandedSlot] = useState<string | null>(null)

  const closeOverlay = useCallback(() => setExpandedSlot(null), [])

  const expandedVideo = videos.find((v) => v.slotId === expandedSlot)

  return (
    <>
      {note && (
        <div
          className="flex items-start gap-3 p-4 mb-4 rounded-xl border"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--hairline)' }}
        >
          <div className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>
            <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {note}
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.slotId}
            video={video}
            isPlaying={playingSlot === video.slotId}
            onPlay={() => setPlayingSlot(video.slotId)}
            onExpand={() => setExpandedSlot(video.slotId)}
          />
        ))}
      </div>

      {expandedVideo && <VideoOverlay video={expandedVideo} onClose={closeOverlay} />}
    </>
  )
}
