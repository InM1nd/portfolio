'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

type SquareValue = 'X' | 'O' | null

function Square({
  value,
  onSquareClick,
}: {
  value: SquareValue
  onSquareClick: () => void
}) {
  return (
    <button
      onClick={onSquareClick}
      className="w-20 h-20 md:w-24 md:h-24 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-3xl md:text-4xl font-bold text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
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
  let statusClass = 'text-terminal-green'
  
  if (winner) {
    status = `WINNER: ${winner}`
    statusClass = 'text-terminal-green animate-pulse'
  } else {
    status = `NEXT_PLAYER: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="space-y-4">
      <div className="font-mono text-sm text-terminal-green/70 uppercase tracking-wider border-b border-terminal-green/30 pb-2">
        GAME_STATUS: <span className={statusClass}>{status}</span>
      </div>
      <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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

  const moves = history.map((squares, move) => {
    let description: string
    if (move > 0) {
      description = `MOVE_#${move}`
    } else {
      description = 'GAME_START'
    }
    return (
      <li key={move} className="mb-2">
        <Button
          onClick={() => jumpTo(move)}
          className={`px-3 py-1 border border-terminal-green font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
            currentMove === move
              ? 'bg-terminal-green text-black shadow-glow'
              : 'bg-terminal-dark/50 text-terminal-green hover:bg-terminal-green/20'
          }`}
        >
          [▸] {description}
        </Button>
      </li>
    )
  })

  return (
    <div className="space-y-6">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      
      <div className="border-t border-terminal-green/30 pt-4">
        <div className="font-mono text-xs text-terminal-green/70 mb-3 uppercase tracking-wider">
          MOVE_HISTORY:
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {moves}
        </div>
        <Button
          onClick={resetGame}
          className="px-4 py-2 border-2 border-terminal-green bg-terminal-dark/50 font-mono text-xs uppercase tracking-wider text-terminal-green hover:bg-terminal-green hover:text-black transition-all duration-300"
        >
          [↻] RESET_GAME
        </Button>
      </div>
    </div>
  )
}

export default TicTac
