'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const LensDistortion = dynamic(() => import('@/components/LensDistortion'), { ssr: false })

const CRTEffect = () => {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Отключить CRT эффект на mobile для производительности
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
      {/* Lens Distortion Effect */}
      <LensDistortion />

      {/* CRT Screen Curvature */}
      <div
        className="crt-screen"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
          overflow: 'hidden'
        }}
      >
        {/* Screen curvature mask - создает эффект выпуклого экрана */}
        <div
          className="crt-curvature"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '1.5%',
            boxShadow: `
              inset 0 0 80px rgba(0, 0, 0, 0.95),
              inset 0 0 120px rgba(0, 0, 0, 0.7),
              inset 0 0 160px rgba(0, 0, 0, 0.5),
              inset 0 0 200px rgba(0, 0, 0, 0.3)
            `,
            pointerEvents: 'none',
            zIndex: 9999
          }}
        />

        {/* Vignette effect - DISABLED */}
        {/* <div 
          className="crt-vignette"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(54, 166, 137, 0.02) 20%,
                rgba(54, 166, 137, 0.05) 35%,
                rgba(54, 166, 137, 0.1) 50%,
                rgba(0, 0, 0, 0.3) 65%,
                rgba(0, 0, 0, 0.6) 80%,
                rgba(0, 0, 0, 0.9) 100%
              )
            `,
            pointerEvents: 'none',
            zIndex: 10000,
            filter: 'blur(0.5px)',
            mixBlendMode: 'multiply'
          }}
        /> */}

        {/* Lens distortion effect - DISABLED */}
        {/* <div 
          className="crt-lens-distortion"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(
                ellipse 85% 65% at 50% 50%,
                rgba(54, 166, 137, 0.12) 0%,
                rgba(54, 166, 137, 0.08) 25%,
                rgba(54, 166, 137, 0.04) 45%,
                transparent 65%
              ),
              radial-gradient(
                ellipse 70% 85% at 50% 50%,
                transparent 0%,
                rgba(54, 166, 137, 0.06) 35%,
                rgba(54, 166, 137, 0.15) 60%,
                rgba(54, 166, 137, 0.08) 75%,
                rgba(0, 0, 0, 0.5) 100%
              ),
              radial-gradient(
                ellipse 50% 50% at 50% 50%,
                rgba(54, 166, 137, 0.05) 0%,
                transparent 50%
              )
            `,
            pointerEvents: 'none',
            zIndex: 10000,
            filter: 'blur(1.5px)',
            mixBlendMode: 'screen',
            opacity: 0.8,
            transform: 'perspective(1000px) rotateX(0deg)',
            animation: 'lens-pulse 4s ease-in-out infinite'
          }}
        /> */}

        {/* Additional depth effect - DISABLED */}
        {/* <div 
          className="crt-depth"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(54, 166, 137, 0.03) 30%,
                rgba(54, 166, 137, 0.08) 50%,
                rgba(0, 0, 0, 0.2) 70%,
                rgba(0, 0, 0, 0.6) 90%,
                rgba(0, 0, 0, 0.9) 100%
              )
            `,
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'multiply',
            opacity: 0.6
          }}
        /> */}

        {/* Scanlines overlay - горизонтальные линии как на старом мониторе */}
        <div
          className="crt-scanlines"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.12) 0px,
                rgba(0, 0, 0, 0.12) 1px,
                transparent 1px,
                transparent 2px
              )
            `,
            pointerEvents: 'none',
            zIndex: 10001,
            opacity: 0.5
          }}
        />

        {/* Flicker effect - легкое мерцание экрана */}
        <div
          className="crt-flicker"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'transparent',
            pointerEvents: 'none',
            zIndex: 10002,
            animation: 'flicker 0.15s infinite'
          }}
        />

        {/* Screen glow/phosphor effect - DISABLED */}
        {/* <div 
          className="crt-glow"
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(
                ellipse at center,
                rgba(54, 166, 137, 0.04) 0%,
                rgba(54, 166, 137, 0.02) 30%,
                transparent 60%
              )
            `,
            pointerEvents: 'none',
            zIndex: 9997,
            animation: 'crt-glow-pulse 4s ease-in-out infinite'
          }}
        /> */}

        {/* Additional scanline beam - движущийся луч сканирования */}
        <div
          className="crt-scan-beam"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: `
              linear-gradient(
                to bottom,
                transparent,
                rgba(54, 166, 137, 0.15),
                rgba(54, 166, 137, 0.3),
                rgba(54, 166, 137, 0.15),
                transparent
              )
            `,
            boxShadow: '0 0 10px rgba(54, 166, 137, 0.4)',
            pointerEvents: 'none',
            zIndex: 10003,
            animation: 'scanline 8s linear infinite'
          }}
        />

        {/* Lens distortion overlay - DISABLED */}
        {/* <div 
          className="crt-lens-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 10004,
            background: `
              radial-gradient(
                ellipse 90% 70% at 50% 50%,
                transparent 0%,
                transparent 40%,
                rgba(54, 166, 137, 0.03) 50%,
                rgba(54, 166, 137, 0.06) 60%,
                rgba(54, 166, 137, 0.04) 70%,
                transparent 80%
              )
            `,
            mixBlendMode: 'screen',
            opacity: 0.6,
            filter: 'blur(2px)'
          }}
        /> */}
      </div>

      {/* Lens distortion wrapper - применяет искажение ко всему контенту */}
      <div
        className="crt-lens-wrapper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'perspective(1200px) rotateX(2deg)',
          transformStyle: 'preserve-3d'
        }}
      />

      <style jsx>{`
        @keyframes crt-glow-pulse {
          0%, 100% { 
            opacity: 0.3; 
          }
          50% { 
            opacity: 0.5; 
          }
        }

        @keyframes lens-pulse {
          0%, 100% {
            opacity: 0.7;
            transform: perspective(1000px) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: perspective(1000px) scale(1.02);
          }
        }
      `}</style>
    </>
  )
}

export default CRTEffect

