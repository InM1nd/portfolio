'use client'

import { useEffect, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { useTransition } from '@/components/TransitionContext'
import PipBoyShell from '@/components/pipboy/PipBoyShell'

const fullText = 'OLEKSANDR ZABOLOTNYI'
const subtitle = 'FRONTEND / PRODUCT ENGINEER — VIENNA'

export default function Home() {
  const { isBootComplete } = useTransition()
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [systemReady, setSystemReady] = useState(false)

  useEffect(() => {
    if (!isBootComplete) return

    const startAt = performance.now()
    const typingDuration = fullText.length * 100
    const readyAt = 25 * 30 + 200

    const advance = () => {
      const elapsed = performance.now() - startAt
      setDisplayText(fullText.slice(0, Math.min(fullText.length, Math.floor(elapsed / 100))))
      setLoadingProgress(Math.min(100, Math.floor(elapsed / 30) * 4))

      if (elapsed >= readyAt) setSystemReady(true)
      if (elapsed >= Math.max(typingDuration, readyAt)) clearInterval(animationInterval)
    }

    const animationInterval = setInterval(advance, 30)
    advance()

    const cursorInterval = setInterval(() => setShowCursor((visible) => !visible), 530)

    return () => {
      clearInterval(animationInterval)
      clearInterval(cursorInterval)
    }
  }, [isBootComplete])

  return (
    <PipBoyShell meter={<span className="text-terminal-green/45">HOME / IDENTITY</span>}>
      <section className="flex min-h-0 flex-1 flex-col p-4 sm:p-6 md:p-8">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-terminal-green/20 pb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/45">
          <span>PERSONAL TERMINAL</span>
          <span className={systemReady ? 'text-terminal-online' : undefined}>
            {systemReady ? 'SYSTEM READY' : `SYNC ${loadingProgress}%`}
          </span>
        </header>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(16rem,.55fr)]">
          <div className="flex min-h-0 flex-col justify-center py-8 lg:pr-10">
            <div className="space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-terminal-green/55">
                &gt; PORTFOLIO ACCESS GRANTED
              </p>
              <h1 className="font-mono text-4xl uppercase tracking-[0.1em] text-terminal-green sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="sr-only">{fullText}</span>
                <span aria-hidden="true">
                  {displayText}
                  <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▮</span>
                </span>
              </h1>
              <p className="font-mono text-sm uppercase tracking-[0.14em] text-terminal-green/70 sm:text-base md:text-lg">
                {subtitle}
              </p>
              <p className="max-w-2xl font-mono text-xs leading-relaxed text-terminal-green/60 sm:text-sm">
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

          <aside className="flex shrink-0 flex-col border-t border-terminal-green/20 py-5 lg:border-l lg:border-t-0 lg:py-8 lg:pl-8">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-terminal-green/40">
              DIRECTORY
            </div>
            <div className="border-t border-terminal-green/20">
              <TransitionLink
                href="/projects"
                className="terminal-button flex items-center justify-between border-b border-terminal-green/20 py-3 font-mono text-xs uppercase tracking-[0.14em] text-terminal-green transition-colors hover:bg-terminal-green hover:px-3 hover:text-black"
              >
                <span>[►] WORK</span>
                <span className="text-terminal-green/45">PROJECTS</span>
              </TransitionLink>
              <TransitionLink
                href="/about"
                className="terminal-button flex items-center justify-between border-b border-terminal-green/20 py-3 font-mono text-xs uppercase tracking-[0.14em] text-terminal-green/75 transition-colors hover:bg-terminal-green hover:px-3 hover:text-black"
              >
                <span>[O] PROFILE</span>
                <span className="text-terminal-green/45">ABOUT</span>
              </TransitionLink>
              <TransitionLink
                href="/contact"
                className="terminal-button flex items-center justify-between border-b border-terminal-green/20 py-3 font-mono text-xs uppercase tracking-[0.14em] text-terminal-green/75 transition-colors hover:bg-terminal-green hover:px-3 hover:text-black"
              >
                <span>[@] CONTACT</span>
                <span className="text-terminal-green/45">MESSAGE</span>
              </TransitionLink>
            </div>

            <div className="mt-auto hidden pt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-terminal-green/40 lg:block">
              <p>&gt; INITIALIZING INTERFACE</p>
              <p className="mt-2">&gt; CONNECTION ESTABLISHED</p>
            </div>
          </aside>
        </div>

        <footer className="flex shrink-0 flex-wrap gap-x-4 gap-y-2 border-t border-terminal-green/20 pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-terminal-green/45">
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
    </PipBoyShell>
  )
}
