'use client'

import React, { useState, useEffect } from 'react'
import TransitionLink from '@/components/TransitionLink'
import dynamic from 'next/dynamic'

const CRTEffect = dynamic(() => import('@/components/CRTEffect'), { ssr: false })
const FaultyTerminal = dynamic(() => import('@/components/FaultyTerminal'), { ssr: false })

const TERMINAL_GRID_MUL: [number, number] = [2, 1]
const TERMINAL_TINT = "#36A689"

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [systemReady, setSystemReady] = useState(false)

  const fullText = "HI. I'M ALEX."
  const subtitle = "WEB DEVELOPER / INTERFACE ENGINEER"

  useEffect(() => {
    // Typing effect for main text
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    // Loading progress bars
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setSystemReady(true), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(progressInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* CRT Effect */}
      <CRTEffect />

      {/* FaultyTerminal Background */}
      <div className="fixed inset-0" style={{ zIndex: 1, pointerEvents: 'none', opacity: 0.4 }}>
        <FaultyTerminal
          scale={1.5}
          gridMul={TERMINAL_GRID_MUL}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint={TERMINAL_TINT}
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={0.6}
        />
      </div>

      {/* Main Terminal Screen */}
      <div
        className="flex items-center justify-center min-h-screen p-4 relative"
        style={{
          zIndex: 50
        }}
      >
        <div className="w-full max-w-4xl border-2 border-terminal-green bg-black/90 shadow-glow p-8 md:p-12 relative z-10">
          {/* Triple frame effect */}
          <div className="absolute inset-0 border border-terminal-green/50 pointer-events-none" style={{ margin: '4px' }} />
          <div className="absolute inset-0 border border-terminal-green/30 pointer-events-none" style={{ margin: '8px' }} />

          <div className="relative z-10 space-y-6">
            {/* Loading Messages */}
            <div className="font-mono text-xs md:text-sm text-terminal-green/80 space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">&gt;</span>
                <span>INITIALIZING INTERFACE...</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-terminal-green">&gt;</span>
                  <span>LOADING USER PROFILE...</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 border border-terminal-green bg-terminal-dark">
                    <div
                      className="h-full bg-terminal-green transition-all duration-300"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <span className="text-[10px]">{loadingProgress}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-terminal-green">&gt;</span>
                <span>CONNECTION ESTABLISHED</span>
                <span className="text-terminal-green">[<span className="inline-block w-4 h-2 bg-terminal-green"></span>]</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="border-2 border-terminal-green p-8 bg-terminal-dark/20 mb-6">
              <div className="text-center space-y-4">
                <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-terminal-green uppercase tracking-wider">
                  {displayText}
                  <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▮</span>
                </h1>
                <p className="font-mono text-lg md:text-xl text-terminal-green/70 uppercase tracking-wider">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* System Status */}
            {systemReady && (
              <div className="space-y-4 animate-fade-in">
                <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
                  <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
                    SYSTEM STATUS
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm text-terminal-green">
                    <span className="text-terminal-green animate-pulse">[●]</span>
                    <span>SYSTEM READY</span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <TransitionLink
                    href="/projects"
                    className="px-6 py-3 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-sm uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                  >
                    [&gt;] EXPLORE PROJECTS
                  </TransitionLink>
                  <TransitionLink
                    href="/about"
                    className="px-6 py-3 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-sm uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow-sm hover:shadow-glow"
                  >
                    [O] SYSTEM INFO
                  </TransitionLink>
                </div>
              </div>
            )}

            {/* Corner Decorations moved to top level */}
          </div>
        </div>
      </div>

      {/* HUD Elements - Removed as per user request */}
    </div>
  )
}
