'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { TransitionProvider, useTransition } from './TransitionContext'

const BootSequence = dynamic(() => import('@/components/BootSequence'), { ssr: false })

// Inner component that consumes the context
const PageTransitionInner = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const { completeBoot, isTransitioning, endTransition } = useTransition()
  // true from the first frame on "/" so the overlay never arrives after the content paints
  const [showBoot, setShowBoot] = useState(pathname === '/')
  const wasTransitioningRef = useRef(false)
  const prevPathnameRef = useRef(pathname)

  // Boot sequence runs client-only, as an overlay on top of already-rendered content,
  // so the markup stays in the prerendered HTML.
  useEffect(() => {
    if (pathname !== '/' || sessionStorage.getItem('hasSeenBoot') === 'true') {
      setShowBoot(false)
      completeBoot()
    }
  }, [pathname, completeBoot])

  // End transition only after route actually changed.
  useEffect(() => {
    const routeChanged = prevPathnameRef.current !== pathname
    if (routeChanged && isTransitioning) {
      window.scrollTo(0, 0)
      endTransition()
    }
    prevPathnameRef.current = pathname
  }, [pathname, isTransitioning, endTransition])

  // Navigation plays inside the terminal only: <main> collapses into a line (data-nav="out"),
  // the route swaps underneath, then the new page expands out of the line (data-nav="in").
  // Keyframes live in globals.css next to the boot handoff they share.
  useEffect(() => {
    const root = document.documentElement

    if (isTransitioning) {
      root.dataset.nav = 'out'
      wasTransitioningRef.current = true
      // Safety net: never leave the screen collapsed if the route change doesn't land.
      const safetyTimer = setTimeout(endTransition, 5000)
      return () => clearTimeout(safetyTimer)
    }

    if (wasTransitioningRef.current) {
      wasTransitioningRef.current = false
      root.dataset.nav = 'in'
      const timer = setTimeout(() => delete root.dataset.nav, 550)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning, endTransition])

  return (
    <>
      {/* Boot Sequence — fixed fullscreen overlay, z-index 999999 */}
      {showBoot && (
        <BootSequence
          onComplete={() => {
            // Plays the shell's power-on (globals.css, html[data-boot='enter']) right as the boot overlay unmounts
            const root = document.documentElement
            root.dataset.boot = 'enter'
            setTimeout(() => delete root.dataset.boot, 1600)
            setShowBoot(false)
            sessionStorage.setItem('hasSeenBoot', 'true')
            completeBoot()
          }}
        />
      )}

      {children}
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
