import { useState } from 'react';
import styles from "./tictac.module.scss";



// SQUARE COMPONENT //

function Square({value, onSquareClick}) {

  return <button 
    className={styles.btn}
    onClick={onSquareClick}>
    {value}
    </button>;
}


// CALCULATIONS //

function calculateWinner(squares) { 
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares [a];
    }
  }
  return null;
}

// BOARD COMPONENT //

function Board ({xIsNext, squares, onPlay}) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);

    console.log('clicked!');
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
    <div className={styles.wrapper}>
    <section className={styles.board}>
      <>
      <div className={styles.row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className={styles.row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className={styles.row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
      <div className={styles.result}>{status}</div>
    </>
    </section>
    </div>
  );
};



// COMPONENT //


const TicTac = () => {

  
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  }


  function jumpTo (nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map ((squares, move) => {
    let description; 
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return ( 
      <li className={styles.li} key={move}>
        <button className={styles.reset} onClick={() => jumpTo(move)}>{description}</button>
      </li>
      
    )
  })

  return (
    <div className={styles.tictac}>
    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
    <div className={styles.steps} >
      <ol className={styles.list}>{moves}</ol>
      </div>
    </div>
  )
}

export default TicTac

