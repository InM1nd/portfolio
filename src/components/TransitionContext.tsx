'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type TransitionContextType = {
  isBootComplete: boolean
  completeBoot: () => void
  isTransitioning: boolean
  startTransition: () => Promise<void>
  endTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export const useTransition = () => {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider')
  }
  return context
}

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBootComplete, setIsBootComplete] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const completeBoot = React.useCallback(() => setIsBootComplete(true), [])

  // Function to start the transition (animate OUT of current page)
  const startTransition = React.useCallback(() => {
    return new Promise<void>((resolve) => {
      setIsTransitioning(true)
      // Wait for the terminal to collapse (crt-off in globals.css, data-nav="out")
      setTimeout(() => {
        resolve()
      }, 380)
    })
  }, [])

  // Function to end the transition (animate IN to new page)
  const endTransition = React.useCallback(() => {
    // Short delay so the next page paints inside the collapsed screen before it expands.
    setTimeout(() => {
      setIsTransitioning(false)
    }, 80)
  }, [])

  const value = React.useMemo(() => ({
    isBootComplete,
    completeBoot,
    isTransitioning,
    startTransition,
    endTransition
  }), [isBootComplete, completeBoot, isTransitioning, startTransition, endTransition])

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  )
}
