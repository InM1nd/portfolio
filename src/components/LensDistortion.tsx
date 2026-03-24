'use client'

import React, { useEffect, useState } from 'react'

const LensDistortion = () => {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Отключить эффект на mobile для производительности
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setShouldRender(!isMobile && !prefersReducedMotion)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!shouldRender) return null

  return (
    <>
      {/* SVG фильтр для искажения линзы */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="lens-distortion" x="0%" y="0%" width="100%" height="100%">
            {/* Barrel distortion - создает эффект выпуклой линзы */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offset" />
            <feComponentTransfer in="offset" result="transfer">
              <feFuncA type="discrete" tableValues="0 1" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Overlay для визуального искажения */}
      <div
        className="lens-distortion-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10005,
          background: `
            radial-gradient(
              ellipse 95% 75% at 50% 50%,
              transparent 0%,
              transparent 45%,
              rgba(54, 166, 137, 0.02) 50%,
              rgba(54, 166, 137, 0.04) 55%,
              rgba(54, 166, 137, 0.06) 60%,
              rgba(54, 166, 137, 0.04) 65%,
              rgba(54, 166, 137, 0.02) 70%,
              transparent 75%
            )
          `,
          mixBlendMode: 'screen',
          opacity: 0.5,
          filter: 'blur(1px)',
          transform: 'perspective(1000px)',
          animation: 'lens-distortion-pulse 5s ease-in-out infinite'
        }}
      />

      {/* Дополнительный слой искажения по краям */}
      <div
        className="lens-edge-distortion"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10004,
          background: `
            radial-gradient(
              ellipse 100% 80% at 50% 50%,
              transparent 0%,
              transparent 30%,
              rgba(54, 166, 137, 0.03) 40%,
              rgba(54, 166, 137, 0.08) 50%,
              rgba(54, 166, 137, 0.12) 60%,
              rgba(54, 166, 137, 0.08) 70%,
              rgba(54, 166, 137, 0.03) 80%,
              transparent 90%
            )
          `,
          mixBlendMode: 'multiply',
          opacity: 0.4,
          filter: 'blur(2px)'
        }}
      />

      <style jsx>{`
        @keyframes lens-distortion-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: perspective(1000px) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: perspective(1000px) scale(1.01);
          }
        }
      `}</style>
    </>
  )
}

export default LensDistortion

