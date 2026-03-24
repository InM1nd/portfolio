'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Head = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [systemInfo, setSystemInfo] = useState({
    osVersion: 'NEXUS OS VERSION 2000',
    lastUpdate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
  })

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
    <section className="flex justify-center items-center flex-col mt-[180px] md:mt-[150px] mb-[100px] md:mb-[80px] px-4 relative z-20">
      {/* System Info Panel */}
      <div className="w-full max-w-4xl mb-8">
        <div className="border border-terminal-green/50 bg-terminal-dark/30 p-4 font-mono text-xs text-terminal-green/70">
          <div className="flex flex-col md:flex-row md:justify-between gap-2">
            <div>{systemInfo.osVersion}</div>
            <div>LAST UPDATE: {systemInfo.lastUpdate}</div>
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="w-full max-w-4xl border-2 border-terminal-green bg-black/80 shadow-glow p-6 md:p-8 relative">
        {/* Triple frame effect */}
        <div className="absolute inset-0 border border-terminal-green/50 pointer-events-none" style={{ margin: '4px' }} />
        <div className="absolute inset-0 border border-terminal-green/30 pointer-events-none" style={{ margin: '8px' }} />

        {/* Loading messages */}
        <div className="mb-6 font-mono text-xs md:text-sm text-terminal-green/80 space-y-2">
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
              <div className="w-20 h-2 border border-terminal-green bg-terminal-dark">
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
            <span className="text-terminal-green">[████]</span>
          </div>
        </div>

        {/* Main content box */}
        <div className="border-2 border-terminal-green p-6 md:p-8 bg-terminal-dark/20 mb-6">
          <div className="space-y-4">
            <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-terminal-green uppercase tracking-wider">
              {displayText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▮</span>
            </h1>
            <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-terminal-green/90 uppercase tracking-wider">
              {subtitle}
            </h2>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-sm uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow-sm hover:shadow-glow"
          >
            [▸] EXPLORE PROJECTS
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-sm uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 shadow-glow-sm hover:shadow-glow"
          >
            [⚙] SYSTEM INFO
          </Link>
        </div>
      </div>

      {/* Corner decorations - скрыты на mobile для лучшей производительности */}
      <div className="absolute top-4 left-4 hidden xl:block font-mono text-[10px] text-terminal-green/50 space-y-1">
        <div>[⌘] SYSTEM STATUS</div>
        <div>LOAD: 78%</div>
        <div>TEMP: 42°C</div>
      </div>
      <div className="absolute top-4 right-4 hidden xl:block font-mono text-[10px] text-terminal-green/50 space-y-1 text-right">
        <div>TIME: {new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}</div>
        <div>USER: InM1nd</div>
        <div>ID: 487</div>
      </div>
    </section>
  )
}

export default Head
