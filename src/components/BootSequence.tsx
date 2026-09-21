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

  // Обновляем ref при изменении onComplete
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Вызываем onComplete когда isComplete становится true
  useEffect(() => {
    if (isComplete && onCompleteRef.current) {
      // Небольшая задержка перед вызовом для завершения анимации
      const timer = setTimeout(() => {
        onCompleteRef.current?.()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isComplete])

  const bootSteps = [
    { text: 'INITIALIZING NEXUS OS...', delay: 300 },
    { text: 'LOADING SYSTEM CORE...', delay: 400 },
    { text: 'ESTABLISHING CONNECTION...', delay: 300 },
    { text: 'VERIFYING USER PROFILE...', delay: 400 },
    { text: 'LOADING INTERFACE ENGINE...', delay: 500 },
    { text: 'SYSTEM READY', delay: 200 },
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
    const startAt = performance.now() + 200

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
        const typingDuration = text.length * 50

        if (elapsed < typingDuration) {
          sync(step, text.slice(0, Math.floor(elapsed / 50) + 1))
          return
        }

        elapsed -= typingDuration
        if (elapsed < delay) {
          sync(step, text)
          return
        }

        elapsed -= delay
      }

      if (!complete) {
        complete = true
        clearInterval(clockInterval)
        sync(bootSteps.length, '')
        setIsComplete(true)
      }
    }

    // Cursor blink
    cursorBlinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    clockInterval = setInterval(() => advance(performance.now()), 50)
    advance(performance.now())

    return () => {
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
        backgroundColor: '#000000',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-mono), monospace',
        color: '#36A689',
        padding: '2rem',
        opacity: isComplete ? 0 : 1,
        visibility: isComplete ? 'hidden' : 'visible',
        transition: 'opacity 500ms ease-out, visibility 0s linear 500ms'
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
