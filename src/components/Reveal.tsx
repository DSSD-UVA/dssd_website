import type { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import '../styles/reveal.css'

export type RevealVariant =
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-pop'
  | 'swing-in-left'
  | 'swing-in-right'
  | 'rise-blur'
  | 'skew-up'

interface RevealProps {
  children: ReactNode
  variant?: RevealVariant
  /** Extra delay after entering view (ms) — use for staggering siblings */
  delayMs?: number
  /** Override default motion duration (ms) */
  durationMs?: number
  /** Longer, more dramatic timing */
  slow?: boolean
  className?: string
}

export default function Reveal({
  children,
  variant = 'fade-up',
  delayMs = 0,
  durationMs,
  slow,
  className = '',
}: RevealProps) {
  const { ref, visible } = useReveal()

  const style = {
    '--reveal-delay': `${delayMs}ms`,
    ...(durationMs != null ? { '--reveal-duration': `${durationMs}ms` } : {}),
  } as CSSProperties

  const cls = [
    'reveal',
    `reveal--${variant}`,
    visible ? 'reveal--visible' : '',
    slow ? 'reveal--slow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  )
}
