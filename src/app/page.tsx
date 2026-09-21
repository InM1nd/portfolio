'use client'

import { useEffect, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { useTransition } from '@/components/TransitionContext'

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
          <h1 className="font-mono text-4xl uppercase tracking-[0.1em] text-terminal-green sm:text-5xl md:text-6xl xl:text-7xl">
            <span className="sr-only">{fullText}</span>
            <span aria-hidden="true">
              {displayText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▮</span>
            </span>
          </h1>
          <p className="font-mono text-sm uppercase tracking-[0.14em] text-terminal-text/80 sm:text-base md:text-lg">
            {subtitle}
          </p>
          <p className="max-w-2xl font-mono text-xs leading-relaxed text-terminal-text/80 sm:text-sm">
            I build production web products end to end — retention platforms, dashboards and
            developer tooling. React, Next.js, TypeScript.
          </p>
          <TransitionLink
            href="/projects"
            className="terminal-button inline-flex border border-terminal-green bg-terminal-green px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-black transition-colors hover:bg-terminal-green/80"
          >
            [▸] OPEN WORK
          </TransitionLink>
        </div>
      </div>

      <footer className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 border-t border-terminal-green/20 pt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-terminal-text/70">
        <a href="mailto:iamzabolotnyi@gmail.com" className="hover:text-terminal-green">
          EMAIL
        </a>
        <a href="https://github.com/InM1nd" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green">
          GITHUB
        </a>
        <a href="https://www.linkedin.com/in/oleksandr-zabolotnyi1/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green">
          LINKEDIN
        </a>
      </footer>
    </section>
  )
}
