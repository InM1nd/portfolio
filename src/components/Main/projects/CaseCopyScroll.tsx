'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

const THUMB = 24

/** Desktop copy column. Scrollbars are hidden site-wide, so a position track shows that this pane scrolls. */
const CaseCopyScroll = ({ children }: { children: ReactNode }) => {
  const scroller = useRef<HTMLDivElement>(null)
  const [hint, setHint] = useState({ over: false, top: 0, more: false })

  useEffect(() => {
    const el = scroller.current
    if (!el) return

    let frame = 0
    let cancelled = false
    const measure = () => {
      if (cancelled) return
      const max = el.scrollHeight - el.clientHeight
      const over = max > 2
      const ratio = over ? el.scrollTop / max : 0
      const travel = Math.max(0, 100 - (THUMB / el.clientHeight) * 100)
      const top = Math.round(ratio * travel * 10) / 10
      const more = over && el.scrollTop < max - 2
      setHint((prev) => (prev.over === over && prev.top === top && prev.more === more ? prev : { over, top, more }))
    }

    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    schedule()
    document.fonts?.ready.then(schedule)
    el.addEventListener('scroll', schedule, { passive: true })
    const observer = new ResizeObserver(schedule)
    observer.observe(el)
    if (el.firstElementChild) observer.observe(el.firstElementChild)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', schedule)
      observer.disconnect()
    }
  }, [children])

  return (
    <div className="relative min-h-0 lg:flex lg:flex-1">
      <div
        ref={scroller}
        className="px-4 py-4 sm:px-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:px-6 lg:py-5"
        style={
          hint.more
            ? {
                maskImage: 'linear-gradient(to bottom, #000 0, #000 calc(100% - 2.75rem), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, #000 0, #000 calc(100% - 2.75rem), transparent 100%)',
              }
            : undefined
        }
      >
        {children}
      </div>
      {hint.over && (
        <div className="pointer-events-none absolute inset-y-3 right-1.5 hidden w-3 lg:block" aria-hidden="true">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-terminal-green/25" />
          <div
            className="absolute left-1/2 h-6 w-[3px] -translate-x-1/2 bg-terminal-green"
            style={{ top: `${hint.top}%`, boxShadow: '0 0 8px #36A689' }}
          />
        </div>
      )}
    </div>
  )
}

export default CaseCopyScroll
