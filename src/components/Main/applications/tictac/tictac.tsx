'use client'

import { useState } from 'react'

type SquareValue = 'X' | 'O' | null

function Square({
  index,
  value,
  onSquareClick,
}: {
  index: number
  value: SquareValue
  onSquareClick: () => void
}) {
  return (
    <button
      onClick={onSquareClick}
      aria-label={`Square ${index + 1}: ${value ? `marked ${value}` : 'empty'}`}
      className="h-20 w-20 border border-terminal-green/45 bg-terminal-green/[0.03] font-mono text-3xl text-terminal-green transition-colors hover:bg-terminal-green/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green disabled:cursor-default disabled:opacity-100 md:h-24 md:w-24 md:text-4xl"
      disabled={value !== null}
    >
      {value}
    </button>
  )
}

function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean
  squares: SquareValue[]
  onPlay: (squares: SquareValue[]) => void
}) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares)
  let status: string
  let statusClass = 'text-terminal-text'
  
  if (winner) {
    status = `WINNER: ${winner}`
    statusClass = 'text-terminal-online'
  } else if (squares.every(Boolean)) {
    status = 'DRAW'
  } else {
    status = `NEXT_PLAYER: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 border-b border-terminal-green/20 pb-2 font-mono uppercase">
        <span className="text-[11px] tracking-[0.22em] text-terminal-text/60">Game status</span>
        <span className={`text-[13px] tracking-wider ${statusClass}`}>{status}</span>
      </div>
      <div className="mx-auto mt-5 grid w-fit grid-cols-3 gap-2">
        {squares.map((value, index) => (
          <Square key={index} index={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  )
}

const TicTac = () => {
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove)
  }

  function resetGame() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  const moves = history.map((_, move) => {
    let description: string
    if (move > 0) {
      description = `MOVE_#${move}`
    } else {
      description = 'GAME_START'
    }
    return (
      <li key={move}>
        <button
          onClick={() => jumpTo(move)}
          className={`w-full border-l-2 px-3 py-2 text-left font-mono text-[12px] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green ${
            currentMove === move
              ? 'border-terminal-green bg-terminal-green/[0.08] text-terminal-text'
              : 'border-transparent text-terminal-text/60 hover:bg-terminal-green/[0.05] hover:text-terminal-text/80'
          }`}
        >
          {String(move).padStart(2, '0')} / {description}
        </button>
      </li>
    )
  })

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(280px,1fr)_230px] md:gap-0">
      <div className="md:pr-6">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <aside className="border-t border-terminal-green/20 pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
        <div className="mb-2 flex items-baseline justify-between gap-3 font-mono uppercase">
          <h2 className="text-[11px] tracking-[0.22em] text-terminal-text/60">Move history</h2>
          <span className="text-[11px] tabular-nums text-terminal-text/60">{currentMove}/{history.length - 1}</span>
        </div>
        <ol className="space-y-0.5">{moves}</ol>
        <button
          onClick={resetGame}
          className="mt-4 border border-terminal-green/50 px-3 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-terminal-green transition-colors hover:bg-terminal-green hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-terminal-green"
        >
          Reset game
        </button>
      </aside>
    </div>
  )
}

export default TicTac
