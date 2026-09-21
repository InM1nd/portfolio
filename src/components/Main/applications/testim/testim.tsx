'use client'

import { useEffect, useRef, useState } from 'react'

type Point = { x: number; y: number }

const COLORS = [
  { name: 'GREEN', value: '#36A689' },
  { name: 'LIGHT', value: '#8FDCC2' },
  { name: 'AMBER', value: '#FFB642' },
  { name: 'WHITE', value: '#D6EAE3' },
  { name: 'ERASER', value: '#000000' },
] as const

/** Map pointer → CSS pixels of the canvas box. Bitmap is sized to that box × DPR, so 1 CSS px = 1 drawing unit. */
const pointFromEvent = (e: PointerEvent, canvas: HTMLCanvasElement): Point => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
}

function InteractiveCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const last = useRef<Point | null>(null)
  const colorRef = useRef('#36A689')
  const sizeRef = useRef(8)

  const [color, setColor] = useState('#36A689')
  const [brush, setBrush] = useState(8)
  const [hover, setHover] = useState(false)
  const [cursor, setCursor] = useState<Point>({ x: 0, y: 0 })
  const [surface, setSurface] = useState({ w: 0, h: 0 })
  const [inking, setInking] = useState(false)

  colorRef.current = color
  sizeRef.current = brush

  /** Bitmap matches the visible box. No CSS stretch → no cursor/brush drift. */
  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const fit = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      const cssW = Math.max(1, Math.floor(wrap.clientWidth))
      const cssH = Math.max(1, Math.floor(wrap.clientHeight))
      if (canvas.width === Math.round(cssW * dpr) && canvas.height === Math.round(cssH * dpr)) {
        return
      }

      const snapshot = document.createElement('canvas')
      snapshot.width = canvas.width
      snapshot.height = canvas.height
      const snapCtx = snapshot.getContext('2d')
      if (snapCtx && canvas.width > 0 && canvas.height > 0) {
        snapCtx.drawImage(canvas, 0, 0)
      }

      canvas.width = Math.round(cssW * dpr)
      canvas.height = Math.round(cssH * dpr)
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      if (snapshot.width > 0 && snapshot.height > 0) {
        ctx.drawImage(snapshot, 0, 0)
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      setSurface({ w: cssW, h: cssH })
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const stroke = (from: Point, to: Point) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.strokeStyle = colorRef.current
      ctx.fillStyle = colorRef.current
      ctx.lineWidth = sizeRef.current
      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
      ctx.stroke()
    }

    const dot = (p: Point) => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.fillStyle = colorRef.current
      ctx.beginPath()
      ctx.arc(p.x, p.y, sizeRef.current / 2, 0, Math.PI * 2)
      ctx.fill()
    }

    const onDown = (e: PointerEvent) => {
      if (e.button !== undefined && e.button !== 0) return
      e.preventDefault()
      canvas.setPointerCapture(e.pointerId)
      const p = pointFromEvent(e, canvas)
      drawing.current = true
      last.current = p
      setInking(true)
      setHover(true)
      setCursor(p)
      dot(p)
    }

    const onMove = (e: PointerEvent) => {
      const p = pointFromEvent(e, canvas)
      setCursor(p)
      setHover(true)
      if (!drawing.current || !last.current) return
      stroke(last.current, p)
      last.current = p
    }

    const onUp = (e: PointerEvent) => {
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId)
      drawing.current = false
      last.current = null
      setInking(false)
    }

    const onLeave = () => {
      if (!drawing.current) setHover(false)
    }

    canvas.addEventListener('pointerdown', onDown)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointercancel', onUp)
    canvas.addEventListener('pointerleave', onLeave)
    return () => {
      canvas.removeEventListener('pointerdown', onDown)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointercancel', onUp)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    drawing.current = false
    last.current = null
    setInking(false)
  }

  const ringColor = color === '#000000' ? '#36A689' : color

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <section className="shrink-0 border-b border-terminal-green/20 pb-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <label htmlFor="brush-size" className="font-mono text-[11px] uppercase tracking-wider text-terminal-text/60">
              Brush <span className="text-terminal-text">{brush}px</span>
            </label>
            <div className="mt-1 flex items-center gap-3">
              <span className="font-mono text-[11px] text-terminal-text/60">1</span>
              <input
                id="brush-size"
                type="range"
                min="1"
                max="40"
                step="1"
                value={brush}
                onChange={(e) => setBrush(Number(e.target.value))}
                className="h-1 flex-1 cursor-pointer appearance-none border-0 accent-terminal-green"
                style={{
                  background: `linear-gradient(to right, #36A689 0%, #36A689 ${((brush - 1) / 39) * 100}%, #050905 ${((brush - 1) / 39) * 100}%, #050905 100%)`,
                }}
              />
              <span className="font-mono text-[11px] text-terminal-text/60">40</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {COLORS.map((c) => (
              <button
                key={c.name}
                type="button"
                aria-pressed={color === c.value}
                onClick={() => setColor(c.value)}
                className={`border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  color === c.value
                    ? 'border-terminal-green bg-terminal-green text-black'
                    : 'border-terminal-green/30 bg-transparent text-terminal-text/70 hover:border-terminal-green/60 hover:text-terminal-text'
                }`}
              >
                {c.name}
              </button>
            ))}
            <button
              type="button"
              onClick={clearCanvas}
              className="border border-terminal-green/45 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-terminal-green hover:bg-terminal-green hover:text-black"
            >
              Clear
            </button>
          </div>
        </div>
      </section>

      <section className="flex min-h-[min(56dvh,28rem)] flex-1 flex-col md:min-h-0">
        <div className="mb-1.5 flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-terminal-text/60">
          <h2>Surface</h2>
          <span className="tabular-nums">
            {surface.w} × {surface.h}
            {inking ? ` · ${Math.round(cursor.x)},${Math.round(cursor.y)}` : ''}
          </span>
        </div>

        <div
          ref={wrapRef}
          className="relative min-h-0 flex-1 overflow-hidden border border-terminal-green/35 bg-black"
        >
          <span className="pointer-events-none absolute left-0 top-0 z-10 h-2.5 w-2.5 border-l border-t border-terminal-green/55" />
          <span className="pointer-events-none absolute right-0 top-0 z-10 h-2.5 w-2.5 border-r border-t border-terminal-green/55" />
          <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-2.5 w-2.5 border-b border-l border-terminal-green/55" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-2.5 w-2.5 border-b border-r border-terminal-green/55" />

          <canvas
            ref={canvasRef}
            aria-label="Drawing canvas"
            className="absolute inset-0 h-full w-full touch-none cursor-none"
          />

          {hover && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full"
              style={{
                width: brush,
                height: brush,
                left: cursor.x,
                top: cursor.y,
                transform: 'translate(-50%, -50%)',
                border: `1.5px solid ${ringColor}`,
                boxShadow: `0 0 8px ${ringColor}`,
              }}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default InteractiveCanvas
