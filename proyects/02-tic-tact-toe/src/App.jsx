import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURN } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { Modal } from './components/modal.jsx'
import { Turn } from './components/Turn.jsx'
import { Board } from './components/Board.jsx'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    // si no hay nada en el localStorage, inicializamos el tablero
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURN.X
  })
  const [winner, setWinner] = useState(null) // null es para no hay ganador, false para empate

 
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
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
    //buarder  qui pardida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
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
      <Board board={board} updateBoard={updateBoard}/>
      <Turn turn={turn}/>
      <Modal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
