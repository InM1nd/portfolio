'use client'

import React, { useState, useEffect } from 'react'

const CornerDecorations = () => {
  const [currentTime, setCurrentTime] = useState('')
  const [systemLoad, setSystemLoad] = useState(78)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Animate system load
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad((prev) => {
        const change = Math.random() * 4 - 2 // -2 to +2
        const newLoad = Math.max(70, Math.min(98, prev + change))
        return Math.round(newLoad)
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Top Left - скрыто на mobile для производительности */}
      <div className="fixed top-4 left-4 z-40 hidden xl:block">
        <div className="border border-terminal-green/50 bg-terminal-dark/30 p-3 font-mono text-[10px] text-terminal-green/70 space-y-1 shadow-glow-sm">
          <div className="text-terminal-green">[⌘] SYSTEM STATUS</div>
          <div>LOAD: {systemLoad}%</div>
          <div>TEMP: 42°C</div>
        </div>
      </div>

      {/* Top Right - скрыто на mobile для производительности */}
      <div className="fixed top-4 right-4 z-40 hidden xl:block">
        <div className="border border-terminal-green/50 bg-terminal-dark/30 p-3 font-mono text-[10px] text-terminal-green/70 space-y-1 text-right shadow-glow-sm">
          <div>TIME: <span className="text-terminal-green flicker-text">{currentTime}</span></div>
          <div>USER: InM1nd</div>
          <div>ID: 487</div>
        </div>
      </div>
    </>
  )
}

export default CornerDecorations

