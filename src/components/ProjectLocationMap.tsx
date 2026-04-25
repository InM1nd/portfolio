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

  // Map known cities to their exact percentage coordinates on the world.svg
  // world.svg has a viewBox of 0 0 2000 857
  const cityPositions: Record<string, { x: number; y: number }> = {
    'Warsaw': { x: 54.0, y: 18.0 },
    'Berlin': { x: 52.7, y: 18.5 },
    'Wroclaw': { x: 53.5, y: 18.6 },
    'Kyiv': { x: 57.8, y: 20.3 },
    'Prague': { x: 53.0, y: 20.4 },
  }

  // Fallback to a rough Equirectangular projection if city is not in the list
  const fallbackX = ((coordinates.y + 180) / 360) * 100
  const fallbackY = (1 - (coordinates.x + 90) / 180) * 100

  const position = cityPositions[city] || { x: fallbackX, y: fallbackY }
  const mapX = position.x
  const mapY = position.y

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

        <img
          src="/world.svg"
          alt="World Map"
          className="absolute inset-0 w-full h-full opacity-45"
          style={{ objectFit: 'fill' }}
        />

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
