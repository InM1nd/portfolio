'use client'

import React from 'react'

interface ProjectLocationMapProps {
  coordinates: { x: number; y: number; z: number }
  distortion: number
  projectCode: string
  city: string
}

const ProjectLocationMap = ({ coordinates, distortion, projectCode, city }: ProjectLocationMapProps) => {
  const getStatusColor = (dist: number) => {
    if (dist < 5) return '#36A689' // STABLE - green
    if (dist < 15) return '#B98C13' // CORRECTION NEEDED - orange
    return '#DF2E30' // INSTABILITY - red
  }

  const getStatusLabel = (dist: number) => {
    if (dist < 5) return 'STABLE'
    if (dist < 15) return 'CORRECTION NEEDED'
    return 'INSTABILITY'
  }

  const statusColor = getStatusColor(distortion)
  const statusLabel = getStatusLabel(distortion)

  // Normalize coordinates to map viewport.
  const normalize = (value: number) => ((value % 100) + 100) % 100
  const mapX = normalize(coordinates.x)
  const mapY = normalize(coordinates.y)

  return (
    <div className="border border-terminal-green/50 bg-terminal-dark/20 p-3">
      <div className="flex items-center justify-between font-mono text-[10px] md:text-xs text-terminal-green/70 mb-2 uppercase tracking-wider border-b border-terminal-green/30 pb-1">
        <span>WORLD MAP</span>
        <span style={{ color: statusColor }}>[{statusLabel}]</span>
      </div>

      <div className="relative h-40 border border-terminal-green/30 bg-terminal-dark/50 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(#36A689 1px, transparent 1px),
              linear-gradient(90deg, #36A689 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M91 174l21-18 49 4 30 31-8 37-32 20-14 23-31 10-32-9-11-20 3-39 25-39z" fill="#36A68920" stroke="#36A689AA" strokeWidth="2" />
          <path d="M195 252l33 15 23 34-6 51-32 72-23-4 6-67-23-44 8-31 14-26z" fill="#36A6891A" stroke="#36A689AA" strokeWidth="2" />
          <path d="M438 136l42-17 56 20 13 35-35 22-48 7-28-20 0-47z" fill="#36A68920" stroke="#36A689AA" strokeWidth="2" />
          <path d="M485 205l38 7 36 51-8 72-45 91-44 0-25-80 10-77 38-64z" fill="#36A68918" stroke="#36A689AA" strokeWidth="2" />
          <path d="M556 118l61-17 117 17 118 45 53 64-12 56-52 22-78-12-72 12-74-28-55-50-21-58 15-51z" fill="#36A6891E" stroke="#36A689AA" strokeWidth="2" />
          <path d="M827 320l43 10 38 29-11 44-41 15-43-19-7-42 21-37z" fill="#36A6891C" stroke="#36A689AA" strokeWidth="2" />
          <path d="M390 93l26-9 19 9-5 17-30 8-15-8 5-17z" fill="#36A68924" stroke="#36A689AA" strokeWidth="2" />
          <path d="M528 98l27-8 22 9-9 15-25 8-18-7 3-17z" fill="#36A68924" stroke="#36A689AA" strokeWidth="2" />
        </svg>

        <div 
          className="absolute w-full h-0.5 border-t border-dashed"
          style={{ 
            top: `${mapY}%`,
            borderColor: `${statusColor}60`,
          }}
        />
        <div 
          className="absolute h-full w-0.5 border-l border-dashed"
          style={{ 
            left: `${mapX}%`,
            borderColor: `${statusColor}60`,
          }}
        />
        
        <div
          className="absolute z-10"
          style={{
            left: `${mapX}%`,
            top: `${mapY}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="absolute rounded-full animate-pulse"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              border: `2px solid ${statusColor}`,
              backgroundColor: `${statusColor}20`,
              boxShadow: `0 0 15px ${statusColor}`,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '8px',
              height: '8px',
              backgroundColor: statusColor,
              boxShadow: `0 0 10px ${statusColor}`,
            }}
          />
        </div>

        <div className="absolute top-2 left-2 font-mono text-[9px] text-terminal-green/70 uppercase tracking-wider">
          CITY: <span className="text-terminal-green">{city}</span>
        </div>
        <div className="absolute top-2 right-2 font-mono text-[9px] text-terminal-green/60 uppercase">
          ID: {projectCode}
        </div>
        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-terminal-green/60 uppercase">
          LAT: {coordinates.x.toFixed(1)}
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-terminal-green/60 uppercase">
          LON: {coordinates.y.toFixed(1)}
        </div>
      </div>
    </div>
  )
}

export default ProjectLocationMap
