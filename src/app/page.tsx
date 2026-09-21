'use client'

import { useEffect, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { useTransition } from '@/components/TransitionContext'
import { glow, glowStrong } from '@/components/pipboy/PipBoyShell'

const fullText = 'OLEKSANDR ZABOLOTNYI'
const subtitle = 'FRONTEND / PRODUCT ENGINEER — VIENNA'

export default function Home() {
  const { isBootComplete } = useTransition()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!isBootComplete) return

    const startAt = performance.now()

    const advance = () => {
      const typed = Math.min(fullText.length, Math.floor((performance.now() - startAt) / 100))
      setDisplayText(fullText.slice(0, typed))
      if (typed === fullText.length) clearInterval(animationInterval)
    }

    const animationInterval = setInterval(advance, 100)
    advance()

    const cursorInterval = setInterval(() => setShowCursor((visible) => !visible), 530)

    return () => {
      clearInterval(animationInterval)
      clearInterval(cursorInterval)
    }
  }, [isBootComplete])

  return (
    <section className="flex min-h-0 flex-1 flex-col p-4 sm:p-6 md:p-8">
      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto py-8">
        <div className="space-y-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terminal-text/80">
            &gt; PORTFOLIO ACCESS GRANTED
          </p>
          <h1
            className="font-mono text-4xl uppercase tracking-[0.1em] text-terminal-green sm:text-5xl md:text-6xl xl:text-7xl"
            style={glowStrong}
          >
            <span className="sr-only">{fullText}</span>
            <span aria-hidden="true">
              {displayText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▮</span>
            </span>
          </h1>
          <p className="font-mono text-sm uppercase tracking-[0.14em] text-terminal-text/80 sm:text-base md:text-lg" style={glow}>
            {subtitle}
          </p>
          <p className="max-w-2xl font-mono text-xs leading-relaxed text-terminal-text/80 sm:text-sm" style={glow}>
            Shipping React and Next.js since 2021. Bilingual production sites, client portals,
            and products I designed and shipped. I own the UX and the build.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-terminal-text/60">
            Marswalk Media · OBRIO · Quizzley
          </p>
          <div className="flex flex-wrap gap-2">
            <TransitionLink
              href="/projects"
              className="terminal-button inline-flex border border-terminal-green bg-terminal-green px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-black transition-colors hover:bg-terminal-green/80"
            >
              [▸] OPEN WORK
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="terminal-button inline-flex border border-terminal-green/45 bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-terminal-green hover:bg-terminal-green hover:text-black"
            >
              GET IN TOUCH
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
