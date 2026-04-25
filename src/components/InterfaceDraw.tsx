'use client'

import React, { useEffect, useState } from 'react'

interface InterfaceDrawProps {
  isActive: boolean
  children: React.ReactNode
  onComplete?: () => void
}

const InterfaceDraw: React.FC<InterfaceDrawProps> = ({ isActive, children, onComplete }) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isActive && !hasPlayed) {
      setHasPlayed(true)
      setShowContent(true)

      // Animation duration is 1.5s
      const timer = setTimeout(() => {
        onComplete?.()
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isActive, hasPlayed, onComplete])

  // If not active and hasn't played, we should hide content
  // If active or has played, we show content
  if (!isActive && !hasPlayed) {
    return null
  }

  return (
    <div className="interface-draw-container">
      <div className={`interface-content ${isActive ? 'animate-turn-on' : ''}`}>
        {children}
      </div>

      <style jsx>{`
        .interface-draw-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background-color: #000;
        }

        .interface-content {
          width: 100%;
          height: 100%;
          transform-origin: center;
        }

        .animate-turn-on {
          animation: turn-on 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes turn-on {
          0% {
            transform: scale(0.1, 0.002);
            opacity: 0;
            filter: brightness(2.5);
          }
          30% {
            transform: scale(1, 0.002);
            opacity: 1;
            filter: brightness(2.5);
          }
          60% {
            transform: scale(1, 0.002);
            filter: brightness(2);
          }
          100% {
            transform: scale(1, 1);
            filter: brightness(1);
          }
        }
      `}</style>
    </div>
  )
}

export default InterfaceDraw
