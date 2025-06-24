import { WINNER_COMBOS } from '../constants.js'  

export  const checkWinner = (boardToCheck) => {
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