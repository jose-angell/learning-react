import { useState } from 'react'
import './App.css'

const TURN = {
  X: 'x',
  O: 'o'
}
const Square = ({ children,isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null) // null es para no hay ganador, false para empate

  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(boardToCheck[a]  //0 -> x u o
        && boardToCheck[a] === boardToCheck[b] 
        && boardToCheck[a] === boardToCheck[c]
      ) { // ganador
          return boardToCheck[a]
      }
    }
    // no hay ganador
    return null
  }

  const updateBoard = (index) => {
    // no actualizamos esta posicion si ya tiene un valor
    if(board[index] || winner ) return 
    //se actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //se cambia el turno
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      alert(`El ganador es: ${newWinner}`)
      setWinner(newWinner)
    }
}
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {board.map((_, index) => {
          return (
            <Square key={index} 
            index={index}
            updateBoard={updateBoard}
            >{board[index]}</Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>
    </main>
  )
}

export default App
