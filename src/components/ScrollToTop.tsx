import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll to the top on every pathname change (SPA navigation).
 * useLayoutEffect runs before paint so users don't see the previous position.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}
