'use client'

import React, { useEffect, useState } from 'react'

const Scanline = () => {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Отключить scanline на mobile для производительности
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

  return <div className="scanline" />
}

export default Scanline

