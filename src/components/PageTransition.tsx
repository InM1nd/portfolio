'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Начальная загрузка - показываем boot sequence
    const isFirstLoad = sessionStorage.getItem('hasLoaded') !== 'true'
    
    if (isFirstLoad) {
      sessionStorage.setItem('hasLoaded', 'true')
      setIsTransitioning(true)
      // Boot sequence будет показан на стартовой странице
      return
    }

    // Переключение между страницами
    setIsTransitioning(true)
    setDisplayChildren(children)

    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800) // Длительность анимации переключения

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <>
      {/* Transition overlay */}
      {isTransitioning && (
        <div 
          className="page-transition-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 99999,
            pointerEvents: 'none'
          }}
        >
          {/* Scan effect */}
          <div 
            className="transition-scan"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `
                linear-gradient(
                  to bottom,
                  rgba(54, 166, 137, 0.3) 0%,
                  transparent 20%,
                  transparent 80%,
                  rgba(54, 166, 137, 0.3) 100%
                )
              `,
              animation: 'page-scan 0.8s ease-in-out',
              pointerEvents: 'none'
            }}
          />

          {/* Glitch effect */}
          <div 
            className="transition-glitch"
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(54, 166, 137, 0.03) 2px,
                  rgba(54, 166, 137, 0.03) 4px
                )
              `,
              animation: 'page-glitch 0.8s ease-in-out',
              pointerEvents: 'none',
              mixBlendMode: 'screen'
            }}
          />

          {/* Fade overlay */}
          <div 
            className="transition-fade"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              animation: 'page-fade 0.8s ease-in-out',
              pointerEvents: 'none'
            }}
          />
        </div>
      )}

      <div className={isTransitioning ? 'page-content-transitioning' : ''}>
        {displayChildren}
      </div>

      <style jsx>{`
        @keyframes page-scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        @keyframes page-glitch {
          0%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            opacity: 0.5;
            transform: translateX(-2px);
          }
          20%, 40%, 60%, 80% {
            opacity: 0.5;
            transform: translateX(2px);
          }
        }

        @keyframes page-fade {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .page-content-transitioning {
          opacity: 0.3;
          filter: blur(2px);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
      `}</style>
    </>
  )
}

export default PageTransition

