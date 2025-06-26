import { TURN } from "../constants"
import { Square } from "./square"

export const Turn = ({turn}) => {
    return (
    <section className='turn'>
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
    </section>
    )
}