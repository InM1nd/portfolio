'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface Point {
  x: number
  y: number
}

function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorSmallRef = useRef<HTMLDivElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [prevPoint, setPrevPoint] = useState<Point | null>(null)
  const [currentColor, setCurrentColor] = useState('#36A689')
  const [cursorBorderColor, setCursorBorderColor] = useState('#36A689')
  const [brushSize, setBrushSize] = useState(8)
  const [cursorPosition, setCursorPosition] = useState<Point>({ x: 0, y: 0 })

  const [canvasWidth, setCanvasWidth] = useState(1200)
  const [canvasHeight, setCanvasHeight] = useState(900)

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (context) {
      context.fillStyle = '#000000'
      context.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [canvasWidth, canvasHeight])

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth
      if (viewportWidth <= 500) {
        setCanvasWidth(320)
        setCanvasHeight(600)
      } else if (viewportWidth <= 960) {
        setCanvasWidth(420)
        setCanvasHeight(600)
      } else if (viewportWidth <= 1500) {
        setCanvasWidth(900)
        setCanvasHeight(600)
      } else {
        setCanvasWidth(1200)
        setCanvasHeight(900)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const drawLine = (context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) => {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
  }

  const drawPoint = (context: CanvasRenderingContext2D, x: number, y: number) => {
    context.beginPath()
    context.arc(x, y, brushSize / 2, 0, 2 * Math.PI)
    context.fill()
  }

  // Mouse event handlers
  useEffect(() => {
    const canvas = canvasRef.current
    const cursorSmall = cursorSmallRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    // Set default drawing styles
    context.strokeStyle = currentColor
    context.fillStyle = currentColor
    context.lineWidth = brushSize
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.imageSmoothingEnabled = true

    const getCoordinates = (e: MouseEvent | React.MouseEvent<HTMLCanvasElement>) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      }
    }

    const handleMouseDown = (e: MouseEvent | React.MouseEvent<HTMLCanvasElement>) => {
      const coords = getCoordinates(e)
      setIsDrawing(true)
      setPrevPoint(coords)
      setCursorPosition(coords)
      
      // Draw initial point
      drawPoint(context, coords.x, coords.y)
    }

    const handleMouseMove = (e: MouseEvent | React.MouseEvent<HTMLCanvasElement>) => {
      const coords = getCoordinates(e)
      
      if (cursorSmall) {
        const rect = canvas.getBoundingClientRect()
        cursorSmall.style.left = `${e.clientX - rect.left}px`
        cursorSmall.style.top = `${e.clientY - rect.top}px`
      }

      setCursorPosition(coords)

      if (isDrawing && prevPoint) {
        context.strokeStyle = currentColor
        context.fillStyle = currentColor
        context.lineWidth = brushSize
        drawLine(context, prevPoint.x, prevPoint.y, coords.x, coords.y)
        setPrevPoint(coords)
      }
    }

    const handleMouseUp = () => {
      setIsDrawing(false)
      setPrevPoint(null)
    }

    const handleMouseLeave = () => {
      setIsDrawing(false)
      setPrevPoint(null)
    }

    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown as EventListener)
    canvas.addEventListener('mousemove', handleMouseMove as EventListener)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown as EventListener)
      canvas.removeEventListener('mousemove', handleMouseMove as EventListener)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [brushSize, currentColor, isDrawing, prevPoint])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    context.fillStyle = '#000000'
    context.fillRect(0, 0, canvas.width, canvas.height)
    setPrevPoint(null)
    setIsDrawing(false)
  }

  const colors = [
    { name: 'TERMINAL_GREEN', value: '#36A689', label: 'GREEN' },
    { name: 'TERMINAL_ACCENT', value: '#3FC89C', label: 'ACCENT' },
    { name: 'TERMINAL_DANGER', value: '#DF2E30', label: 'RED' },
    { name: 'TERMINAL_WARNING', value: '#B98C13', label: 'YELLOW' },
    { name: 'ERASER', value: '#000000', label: 'ERASER' },
  ]

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4">
        <div className="font-mono text-xs text-terminal-green/70 mb-4 uppercase tracking-wider">
          DRAWING_TOOLBAR
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Brush Size */}
          <div>
            <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
              BRUSH_SIZE: {brushSize}px
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-terminal-green">MIN: 1</span>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="flex-1 h-2 bg-terminal-dark border border-terminal-green appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #36A689 0%, #36A689 ${((brushSize - 1) / 39) * 100}%, #050905 ${((brushSize - 1) / 39) * 100}%, #050905 100%)`,
                }}
              />
              <span className="font-mono text-xs text-terminal-green">MAX: 40</span>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
              COLOR_PALETTE:
            </div>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    if (color.name === 'ERASER') {
                      setCurrentColor('#000000')
                      setCursorBorderColor('#36A689')
                    } else {
                      setCurrentColor(color.value)
                      setCursorBorderColor(color.value)
                    }
                  }}
                  className={`px-3 py-1 border-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                    currentColor === color.value
                      ? 'border-terminal-green bg-terminal-green text-black shadow-glow'
                      : 'border-terminal-green/50 bg-terminal-dark/50 text-terminal-green hover:bg-terminal-green/20'
                  }`}
                >
                  [{color.label}]
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <Button
            onClick={clearCanvas}
            className="px-4 py-2 border border-terminal-green bg-terminal-dark/50 font-mono text-xs uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300"
          >
            [×] CLEAR_CANVAS
          </Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="border-2 border-terminal-green bg-terminal-dark/20 p-4 relative">
        <div className="font-mono text-xs text-terminal-green/70 mb-2 uppercase tracking-wider">
          CANVAS_AREA:
        </div>
        <div className="relative inline-block">
          <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            className="border border-terminal-green bg-black cursor-crosshair max-w-full h-auto block"
            style={{ imageRendering: 'pixelated' }}
          />
          <div
            ref={cursorSmallRef}
            className="absolute pointer-events-none z-10"
            style={{
              width: brushSize,
              height: brushSize,
              borderRadius: '50%',
              border: `2px solid ${cursorBorderColor}`,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 10px ${cursorBorderColor}`,
              display: 'block',
            }}
          />
        </div>
        {isDrawing && (
          <div className="mt-2 font-mono text-xs text-terminal-green/70">
            DRAWING... X: {Math.round(cursorPosition.x)} Y: {Math.round(cursorPosition.y)}
          </div>
        )}
      </div>
    </div>
  )
}

export default InteractiveCanvas
