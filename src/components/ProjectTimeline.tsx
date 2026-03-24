'use client'

import React from 'react'

interface ProjectTimelineProps {
  startDate: string
  endDate?: string
  projectCode: string
}

const ProjectTimeline = ({ startDate, endDate, projectCode }: ProjectTimelineProps) => {
  const formatDateShort = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const now = new Date()
  
  // Calculate timeline metrics
  const totalDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  const currentDays = Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  const progress = endDate 
    ? Math.min(100, Math.max(0, (currentDays / totalDays) * 100))
    : Math.min(100, Math.max(0, (currentDays / (totalDays || 1)) * 100))
  
  const isComplete = endDate && now >= end
  const isInProgress = !endDate || now < end
  const markerProgress = Math.max(6, Math.min(94, progress))
  const durationMarker = Math.max(16, Math.min(90, (totalDays / 240) * 100))
  const activeFill = isInProgress ? markerProgress : durationMarker

  return (
    <div className="border border-terminal-green/50 bg-terminal-dark/20 p-3">
      <div className="flex items-center justify-between font-mono text-[10px] md:text-xs text-terminal-green/70 mb-2 uppercase tracking-wider border-b border-terminal-green/30 pb-1">
        <span>TIMELINE</span>
        <span className={isInProgress ? 'text-terminal-warning' : 'text-terminal-green'}>
          [{isInProgress ? 'ACTIVE' : 'ARCHIVED'}]
        </span>
      </div>

      <div className="relative h-24 border border-terminal-green/30 bg-terminal-dark/50 mb-3 p-3 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#36A689 1px, transparent 1px),
              linear-gradient(90deg, #36A689 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px',
          }}
        />

        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2">
          <div className="relative h-2 border border-terminal-green/40 bg-black/50">
            <div
              className="absolute inset-y-0 left-0 bg-terminal-green/25 transition-all duration-500"
              style={{ width: `${isInProgress ? progress : 100}%` }}
            />
            <div
              className="absolute inset-y-0 left-0 bg-terminal-green transition-all duration-500 progress-fill"
              style={{ width: `${Math.max(2, activeFill)}%` }}
            />

            <div className="absolute -top-2 -translate-x-1/2" style={{ left: '0%' }}>
              <div className="w-4 h-4 bg-terminal-green rounded-full border-2 border-terminal-dark" />
            </div>

            {isInProgress && (
              <div
                className="absolute -top-2 transform -translate-x-1/2 transition-all duration-500"
                style={{ left: `${markerProgress}%` }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-terminal-dark bg-terminal-warning animate-pulse" />
              </div>
            )}

            {!isInProgress && (
              <div
                className="absolute -top-2 transform -translate-x-1/2 transition-all duration-500"
                style={{ left: `${durationMarker}%` }}
              >
                <div className="w-4 h-4 rounded-full border-2 border-terminal-dark bg-terminal-green" />
              </div>
            )}

            <div className="absolute -top-2 -translate-x-1/2" style={{ left: '100%' }}>
              <div className="w-4 h-4 bg-terminal-green/50 rounded-full border-2 border-terminal-dark" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[8px] text-terminal-green/70 uppercase">
          <span>{formatDateShort(startDate)}</span>
          <span>{endDate ? formatDateShort(endDate) : 'ONGOING'}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="border border-terminal-green/30 p-1.5 bg-terminal-dark/30">
          <div className="text-[9px] text-terminal-green/50 mb-0.5 uppercase">START</div>
          <div className="text-terminal-green font-bold text-xs">{formatDateShort(startDate)}</div>
        </div>
        <div className="border border-terminal-green/30 p-1.5 bg-terminal-dark/30">
          <div className="text-[9px] text-terminal-green/50 mb-0.5 uppercase">PROGRESS</div>
          <div className="text-terminal-green font-bold text-xs">{Math.round(progress)}%</div>
        </div>
        <div className="border border-terminal-green/30 p-1.5 bg-terminal-dark/30">
          <div className="text-[9px] text-terminal-green/50 mb-0.5 uppercase">{endDate ? 'END' : 'STATUS'}</div>
          {endDate ? (
            <div className="text-terminal-green font-bold text-xs">{formatDateShort(endDate)}</div>
          ) : (
            <div className="text-terminal-warning font-bold text-xs">IN PROGRESS</div>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-terminal-green/60 uppercase">
        <span>TRACK: {projectCode}</span>
        <span>{isComplete ? 'MISSION CLOSED' : 'EXECUTION PHASE'}</span>
      </div>
    </div>
  )
}

export default ProjectTimeline
