import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import {Square} from './components/square.jsx'
import { TURN } from './constants.js'
import { checkWinner } from './logic/board.js'
import { Modal } from './components/modal.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(null) // null es para no hay ganador, false para empate

 

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
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
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) // empate
    }
}
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
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
      <Modal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
