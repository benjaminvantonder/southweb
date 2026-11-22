import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Desktop-only cursor: a lagging ring plus a snappy dot. Pointer events are
 * delegated so links added later are picked up automatically.
 */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!finePointer || reduced) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' })
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2' })

    const onPointerMove = (event: PointerEvent) => {
      // Hide the native cursor only once the custom one has a position.
      document.documentElement.classList.add('custom-cursor')
      ringX(event.clientX)
      ringY(event.clientY)
      dotX(event.clientX)
      dotY(event.clientY)

      gsap.to([ring, dot], {
        opacity: 1,
        duration: 0.2,
        overwrite: 'auto',
      })
    }

    const onPointerOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const isInteractive = Boolean(
        target?.closest('a, button, summary, [data-cursor="hover"]'),
      )

      gsap.to(ring, {
        scale: isInteractive ? 1.7 : 1,
        backgroundColor: isInteractive ? 'rgba(200, 243, 74, 0.7)' : 'rgba(200, 243, 74, 0)',
        duration: 0.25,
        overwrite: 'auto',
      })
      gsap.to(dot, {
        scale: isInteractive ? 0 : 1,
        duration: 0.25,
        overwrite: 'auto',
      })
    }

    const hideCursor = () => {
      gsap.to([ring, dot], { opacity: 0, duration: 0.2, overwrite: 'auto' })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('mouseover', onPointerOver)
    document.documentElement.addEventListener('mouseleave', hideCursor)
    window.addEventListener('blur', hideCursor)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('mouseover', onPointerOver)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('blur', hideCursor)
      document.documentElement.classList.remove('custom-cursor')
      gsap.killTweensOf([ring, dot])
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
