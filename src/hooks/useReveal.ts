import { useEffect, useRef, useState } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const reducedMotionRef = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reducedMotionRef.current) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        obs.disconnect()
      },
      { threshold: 0.08, rootMargin: '0px 0px -7% 0px' },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return { ref, visible }
}
