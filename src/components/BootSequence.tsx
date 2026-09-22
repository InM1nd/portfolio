'use client'

import React, { useEffect, useState, useRef } from 'react'

interface BootSequenceProps {
  onComplete?: () => void
  skip?: boolean
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete, skip = false }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const onCompleteRef = useRef(onComplete)
  // set by the running sequence; the SKIP button and Escape call it to jump straight to the handoff
  const finishRef = useRef<() => void>(() => {})

  // Обновляем ref при изменении onComplete
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Вызываем onComplete когда isComplete становится true
  useEffect(() => {
    if (isComplete && onCompleteRef.current) {
      // Ждём, пока экран схлопнется в линию (crt-off), затем PipBoyShell включается (crt-on)
      const timer = setTimeout(() => {
        onCompleteRef.current?.()
      }, 450)
      return () => clearTimeout(timer)
    }
  }, [isComplete])

  // ~0.8s of typing + the 450ms handoff ≈ 1.25s in total
  const CHAR_MS = 3
  const bootSteps = [
    { text: 'INITIALIZING NEXUS OS...', delay: 50 },
    { text: 'LOADING SYSTEM CORE...', delay: 50 },
    { text: 'ESTABLISHING CONNECTION...', delay: 50 },
    { text: 'VERIFYING USER PROFILE...', delay: 50 },
    { text: 'LOADING INTERFACE ENGINE...', delay: 50 },
    { text: 'SYSTEM READY', delay: 50 },
  ]

  useEffect(() => {
    if (skip) {
      setIsComplete(true)
      // onComplete будет вызван через useEffect ниже
      return
    }

    let clockInterval: NodeJS.Timeout
    let cursorBlinkInterval: NodeJS.Timeout
    let lastStep = -1
    let lastText = ''
    let complete = false
    const startAt = performance.now() + 100

    const sync = (step: number, text: string) => {
      if (step !== lastStep) {
        lastStep = step
        setCurrentStep(step)
      }
      if (text !== lastText) {
        lastText = text
        setDisplayText(text)
      }
    }

    const advance = (now: number) => {
      let elapsed = Math.max(0, now - startAt)

      for (let step = 0; step < bootSteps.length; step++) {
        const { text, delay } = bootSteps[step]
        const typingDuration = text.length * CHAR_MS

        if (elapsed < typingDuration) {
          sync(step, text.slice(0, Math.floor(elapsed / CHAR_MS) + 1))
          return
        }

        elapsed -= typingDuration
        if (elapsed < delay) {
          sync(step, text)
          return
        }

        elapsed -= delay
      }

      finish()
    }

    const finish = () => {
      if (complete) return
      complete = true
      clearInterval(clockInterval)
      sync(bootSteps.length, '')
      setIsComplete(true)
    }
    finishRef.current = finish

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') finish()
    }
    window.addEventListener('keydown', onKey)

    // Cursor blink
    cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    clockInterval = setInterval(() => advance(performance.now()), 16)
    advance(performance.now())

    return () => {
      window.removeEventListener('keydown', onKey)
      clearInterval(clockInterval)
      if (cursorBlinkInterval) {
        clearInterval(cursorBlinkInterval)
      }
    }
  }, [skip]) // Убрал onComplete из зависимостей, чтобы избежать перезапуска

  // Не рендерим компонент если пропущен
  if (skip) {
    return null
  }

  return (
    <div
      className="boot-sequence"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Not fully opaque on purpose: an occluded WebGL background never draws, so its shader would
        // compile on the first visible frame and freeze the handoff. 1.5% lets it warm up unseen.
        backgroundColor: 'rgba(0, 0, 0, 0.985)',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-mono), monospace',
        color: '#36A689',
        padding: '2rem'
      }}
    >
      {/* CRT Scanlines overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          pointerEvents: 'none',
          opacity: 0.4
        }}
      />

      {/* Boot text */}
      <div
        className={isComplete ? 'crt-off' : undefined}
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        {/* System header */}
        <div
          style={{
            fontSize: '0.875rem',
            marginBottom: '3rem',
            opacity: 0.7,
            letterSpacing: '0.1em'
          }}
        >
          [NEXUS™ OS^ VERSION 2000]
        </div>

        {/* Boot messages */}
        <div
          style={{
            fontSize: '1.125rem',
            lineHeight: '2',
            minHeight: '200px',
            textAlign: 'left'
          }}
        >
          {bootSteps.slice(0, currentStep).map((step, index) => (
            <div
              key={index}
              style={{
                marginBottom: '0.5rem',
                opacity: 0.8
              }}
            >
              &gt; {step.text}
            </div>
          ))}
          
          {currentStep < bootSteps.length && (
            <div style={{ marginBottom: '0.5rem' }}>
              &gt; {displayText}
              <span style={{ opacity: showCursor ? 1 : 0 }}>▮</span>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div
          style={{
            marginTop: '2rem',
            fontSize: '0.75rem',
            opacity: 0.6
          }}
        >
          {isComplete 
            ? `[${bootSteps.length}/${bootSteps.length}] SYSTEM READY`
            : `[${currentStep}/${bootSteps.length}] INITIALIZING...`
          }
        </div>
      </div>

      {!isComplete && (
      <button
        type="button"
        onClick={() => finishRef.current()}
        className="absolute bottom-6 right-6 z-20 border border-terminal-green/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-terminal-text/70 transition-colors hover:text-terminal-text focus-visible:text-terminal-text"
      >
        SKIP INTRO <span className="text-terminal-text/60">[ESC]</span>
      </button>
      )}

      {/* Flicker effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'transparent',
          pointerEvents: 'none',
          animation: 'flicker 0.15s infinite',
          zIndex: 5
        }}
      />

      {/* Vignette with green tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(
              ellipse at center,
              transparent 0%,
              rgba(54, 166, 137, 0.05) 40%,
              rgba(0, 0, 0, 0.4) 70%,
              rgba(0, 0, 0, 0.8) 100%
            )
          `,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </div>
  )
}

export default BootSequence
