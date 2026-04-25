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

    let stepIndex = 0
    let charIndex = 0
    let cursorBlinkInterval: NodeJS.Timeout
    let isCancelled = false

    const typeText = () => {
      if (isCancelled) return

      if (stepIndex >= bootSteps.length) {
        setIsComplete(true)
        setCurrentStep(bootSteps.length)
        return
      }

      const currentStepData = bootSteps[stepIndex]
      const fullText = currentStepData.text

      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeText, 50) // Скорость печати
      } else {
        // Переход к следующему шагу
        setTimeout(() => {
          if (isCancelled) return
          stepIndex++
          charIndex = 0
          setCurrentStep(stepIndex)
          setDisplayText('')
          if (stepIndex < bootSteps.length) {
            typeText()
          } else {
            // Все шаги завершены
            setIsComplete(true)
          }
        }, currentStepData.delay)
      }
    }

    // Cursor blink
    cursorBlinkInterval = setInterval(() => {
      if (!isCancelled) {
        setShowCursor((prev) => !prev)
      }
    }, 530)

    // Начинаем анимацию
    const startTimer = setTimeout(() => {
      if (!isCancelled) {
        typeText()
      }
    }, 200)

    return () => {
      isCancelled = true
      clearTimeout(startTimer)
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
        transition: 'opacity 1s ease-out, visibility 0s linear 1s'
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

