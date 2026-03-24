'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { TransitionProvider, useTransition } from './TransitionContext'

const BootSequence = dynamic(() => import('@/components/BootSequence'), { ssr: false })
const InterfaceDraw = dynamic(() => import('@/components/InterfaceDraw'), { ssr: false })

// Inner component that consumes the context
const PageTransitionInner = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const { isTransitioning, endTransition } = useTransition()
  const [isBootComplete, setIsBootComplete] = useState(false)
  const [overlayPhase, setOverlayPhase] = useState<'hidden' | 'closing' | 'opening'>('hidden')
  const prevTransitioningRef = useRef(false)
  const prevPathnameRef = useRef(pathname)

  // Boot sequence logic
  useEffect(() => {
    // Check if we should show the boot sequence
    const hasSeenBoot = sessionStorage.getItem('hasSeenBoot') === 'true'

    if (hasSeenBoot || pathname !== '/') {
      setIsBootComplete(true)
    } else {
      setIsBootComplete(false)
    }
  }, []) // Run once on mount

  // End transition only after route actually changed.
  useEffect(() => {
    const routeChanged = prevPathnameRef.current !== pathname
    if (routeChanged && isTransitioning) {
      window.scrollTo(0, 0)
      endTransition()
    }
    prevPathnameRef.current = pathname
  }, [pathname, isTransitioning, endTransition])

  // Control overlay phase to ensure curtain always opens (lifts up)
  useEffect(() => {
    if (isTransitioning) {
      setOverlayPhase('closing')
      prevTransitioningRef.current = true
      return
    }

    if (prevTransitioningRef.current) {
      setOverlayPhase('opening')
      const timer = setTimeout(() => {
        setOverlayPhase('hidden')
        prevTransitioningRef.current = false
      }, 650)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <>
      {/* Boot Sequence */}
      {!isBootComplete && (
        <BootSequence
          onComplete={() => {
            setIsBootComplete(true)
            sessionStorage.setItem('hasSeenBoot', 'true')
          }}
        />
      )}

      {/* Transition Overlay */}
      <div
        className="page-transition-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          visibility: overlayPhase === 'hidden' ? 'hidden' : 'visible',
        }}
      >
        {/* Main Background Panel (The Curtain) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#050505',
            backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(54, 166, 137, 0.15) 0%, rgba(0, 0, 0, 0) 70%),
                linear-gradient(0deg, rgba(0,0,0,0.5) 50%, transparent 50%),
                linear-gradient(90deg, rgba(54, 166, 137, 0.07) 1px, transparent 1px),
                linear-gradient(0deg, rgba(54, 166, 137, 0.07) 1px, transparent 1px)
              `,
            backgroundSize: '100% 100%, 100% 4px, 40px 40px, 40px 40px',

            // CSS Transition Logic
            transform: overlayPhase === 'hidden' ? 'scaleY(0)' : overlayPhase === 'closing' ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: overlayPhase === 'opening' ? 'bottom' : 'top',
            transition: 'transform 0.6s cubic-bezier(0.8, 0, 0.2, 1)',

            animation: overlayPhase !== 'hidden' ? 'cyber-grid-move 20s linear infinite' : 'none',

            borderBottom: '4px solid #36A689',
            boxShadow: '0 0 50px rgba(54, 166, 137, 0.3)'
          }}
        />

        {/* Green Scanline Pulse */}
        <div
          style={{
            position: 'absolute',
            top: overlayPhase === 'closing' ? '100%' : overlayPhase === 'opening' ? '0%' : '100%',
            left: 0,
            width: '100%',
            height: '4px',
            background: '#36A689',
            boxShadow: '0 0 20px #36A689, 0 0 40px #36A689',
            zIndex: 10,
            opacity: overlayPhase === 'hidden' ? 0 : 1,
            transition: 'top 0.6s cubic-bezier(0.8, 0, 0.2, 1), opacity 0.2s',
            transitionDelay: '0s'
          }}
        />

        {/* Text Content */}
        <div
          className="z-20 font-mono text-[#36A689] flex flex-col items-center gap-2"
          style={{
            opacity: overlayPhase === 'hidden' ? 0 : 1,
            transform: overlayPhase === 'hidden' ? 'scale(0.92)' : 'scale(1)',
            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
            transitionDelay: overlayPhase === 'closing' ? '0.2s' : '0s'
          }}
        >
          <div className="text-2xl font-bold bg-black/80 px-6 py-3 border border-[#36A689] shadow-[0_0_15px_rgba(54,166,137,0.4)]">
            SYSTEM REROUTING
          </div>
          <div className="text-xs opacity-70 tracking-[0.2em] animate-pulse">
            PROCESSING REQUEST...
          </div>
        </div>
      </div>

      {/* Content Area */}
      {/* Always render children but hide them if boot is not complete, 
          or simpler: just conditionally render. 
          If we conditionally render, animations might not trigger correctly on mount if they depend on mount.
          But for boot sequence, we usually want to block content.
      */}
      {isBootComplete && <>{children}</>}
    </>
  )
}

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <TransitionProvider>
      <PageTransitionInner>{children}</PageTransitionInner>
    </TransitionProvider>
  )
}

export default PageTransitionWrapper
