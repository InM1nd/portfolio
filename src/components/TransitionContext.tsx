'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type TransitionContextType = {
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
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Function to start the transition (animate OUT of current page)
  const startTransition = () => {
    return new Promise<void>((resolve) => {
      setIsTransitioning(true)
      // Wait for the "curtain down" animation to complete (600ms)
      setTimeout(() => {
        resolve()
      }, 800)
    })
  }

  // Function to end the transition (animate IN to new page)
  const endTransition = () => {
    // Short delay so the next page paints under curtain before lift animation.
    setTimeout(() => {
      setIsTransitioning(false)
    }, 80)
  }

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
    </TransitionContext.Provider>
  )
}
