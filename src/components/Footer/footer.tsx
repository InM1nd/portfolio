'use client'

import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentDate(now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }))
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/InM1nd', code: 'CODE-775' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/oleksandr-zabolotnyi1/', code: 'CODE-487' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/sanchezbltn/', code: 'CODE-326' },
    { name: 'TELEGRAM', url: 'https://t.me/InM1nd', code: 'CODE-035' },
  ]

  const quickLinks = [
    { name: 'PROJECTS', url: '/projects' },
    { name: 'ABOUT', url: '/about' },
    { name: 'APPLICATIONS', url: '/applications' },
    { name: 'CONTACT', url: '/contact' },
  ]

  return (
    <footer className="w-full border-t-2 border-terminal-green bg-black/95 mt-14">
      <div className="px-5 md:px-8 py-8 md:py-10">
        <div className="border-2 border-terminal-green bg-black p-4 md:p-6 shadow-glow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="border border-terminal-green/40 bg-terminal-dark/20 p-4">
              <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-wider mb-3 border-b border-terminal-green/30 pb-2">
                NAVIGATION
              </div>
              <ul className="space-y-2 font-mono text-xs md:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="flex items-center justify-between border border-terminal-green/30 px-3 py-2 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all"
                    >
                      <span>[&gt;] {link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-terminal-green/40 bg-terminal-dark/20 p-4">
              <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-wider mb-3 border-b border-terminal-green/30 pb-2">
                CONTACT CHANNELS
              </div>
              <ul className="space-y-2 font-mono text-xs md:text-sm">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-terminal-green/30 px-3 py-2 text-terminal-green hover:bg-terminal-green/10 hover:border-terminal-green transition-all"
                    >
                      <span>[•] {link.name}</span>
                      <span className="text-[10px] text-terminal-green/60">{link.code}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-terminal-green/40 bg-terminal-dark/20 p-4">
              <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-wider mb-3 border-b border-terminal-green/30 pb-2">
                SYSTEM STATUS
              </div>
              <div className="space-y-2 font-mono text-xs md:text-sm text-terminal-green">
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70">DATE:</span>
                  <span>{currentDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70">TIME:</span>
                  <span className="flicker-text">{currentTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-terminal-green/70">USER:</span>
                  <span>InM1nd</span>
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-terminal-green/30">
                  <span className="text-terminal-green/70">STATUS:</span>
                  <span className="flex items-center gap-1">
                    <span className="text-terminal-green animate-pulse">[●]</span>
                    <span>ONLINE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-terminal-green/30 text-center font-mono text-xs text-terminal-green/65">
            © 2026 InM1nd | NEXUS_OS v2000
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
