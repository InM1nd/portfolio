'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import TransitionLink from '@/components/TransitionLink'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header = () => {
  const pathname = usePathname()
  const [currentTime, setCurrentTime] = useState('')
  const [systemLoad, setSystemLoad] = useState(98)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(timeString)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/applications', label: 'APPLICATIONS' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ zIndex: 1000 }}>
      <nav className="border-b-2 border-terminal-green bg-black/95 backdrop-blur-md shadow-glow">
        <div className="mx-auto">
          {/* Top bar with system info */}
          <div className="flex items-center justify-between px-4 md:px-6 py-2 border-b border-terminal-green/30">
            <div className="flex items-center gap-2 md:gap-3 font-mono text-xs md:text-sm text-terminal-green">
              <span className="text-terminal-green">[⌘]</span>
              <span className="tracking-widest uppercase hidden sm:inline shimmer-text">NEXUS TERMINAL</span>
              <span className="tracking-widest uppercase sm:hidden shimmer-text">NEXUS</span>
            </div>
            <div className="hidden lg:flex items-center gap-3 md:gap-4 font-mono text-xs md:text-sm text-terminal-green">
              <span>CODE: 487</span>
              <span className="flex items-center gap-1">
                <span className="text-terminal-green animate-pulse">[●]</span>
                <span>ONLINE</span>
              </span>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden border border-terminal-green px-3 py-1 font-mono text-xs text-terminal-green hover:bg-terminal-green hover:text-black transition-all"
            >
              {isMobileMenuOpen ? '[×]' : '[≡]'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between px-4 md:px-6 py-3">
            <div className="flex items-center gap-2 md:gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <TransitionLink
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 md:px-5 py-2 border border-terminal-green",
                      "font-mono text-xs md:text-sm uppercase tracking-wider whitespace-nowrap",
                      "transition-all duration-300",
                      "hover:bg-terminal-green hover:text-black hover:shadow-glow",
                      "glitch-hover",
                      isActive && "bg-terminal-green text-black shadow-glow"
                    )}
                  >
                    {item.label}
                  </TransitionLink>
                )
              })}
            </div>

            {/* System status */}
            <div className="hidden lg:flex items-center gap-3 font-mono text-xs md:text-sm text-terminal-green">
              <div className="flex items-center gap-2">
                <span>LOAD:</span>
                <div className="flex items-center gap-1">
                  <div className="w-12 md:w-16 h-2 border border-terminal-green bg-terminal-dark">
                    <div
                      className="h-full bg-terminal-green transition-all duration-300"
                      style={{ width: `${systemLoad}%` }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs">{systemLoad}%</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>TIME:</span>
                <span className="text-[10px] md:text-xs flicker-text">{currentTime}</span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-terminal-green/30 bg-black/95">
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <TransitionLink
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-2 border border-terminal-green",
                        "font-mono text-xs uppercase tracking-wider",
                        "transition-all duration-300",
                        "hover:bg-terminal-green hover:text-black hover:shadow-glow",
                        isActive && "bg-terminal-green text-black shadow-glow"
                      )}
                    >
                      {item.label}
                    </TransitionLink>
                  )
                })}
                <div className="pt-2 mt-2 border-t border-terminal-green/30">
                  <div className="flex items-center justify-between text-[10px] font-mono text-terminal-green/70">
                    <span>LOAD: {systemLoad}%</span>
                    <span>TIME: {currentTime}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
