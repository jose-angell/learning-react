import { Square } from "./square"

export const Modal = ({ winner, resetGame }) => {
    console.log('Modal', winner)
    if (winner == null ) return
    return (
        <section className="winner">
            <div className='text'>
              <h2>
                {
                  winner === false
                  ? 'Empate'
                  : 'Gano ' + winner
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
    )
}