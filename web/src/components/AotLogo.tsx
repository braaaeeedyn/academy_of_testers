import { useState } from 'react'
import CircularText from './CircularText'

/**
 * The Academy of Testers mark: the profile logo inside the spinning "ACADEMY*OF*TESTERS*" ring.
 * Drawn at its native 270px and scaled, so it can be used at any size.
 */
export default function AotLogo({ size = 220 }: { size?: number }) {
  const [broken, setBroken] = useState(false)
  const scale = size / 270
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div
        className="absolute top-0 left-0"
        style={{ width: 270, height: 270, transform: `scale(${scale})`, transformOrigin: '0 0' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularText
            text="ACADEMY*OF*TESTERS*"
            onHover="speedUp"
            spinDuration={20}
            className="circular-text-hero"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {broken ? (
            <div
              className="w-[150px] h-[150px] rounded-full flex items-center justify-center text-3xl font-bold"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-ink)' }}
            >
              AoT
            </div>
          ) : (
            <img
              src="/aotpfp.png"
              alt="Academy of Testers"
              className="w-[160px] h-[160px] rounded-full object-cover shadow-md"
              onError={() => setBroken(true)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
