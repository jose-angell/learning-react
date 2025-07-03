import {useState, useEffect} from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App () {

    const [fact, setFact] = useState()
    useEffect(() => {
        async function getRandomFact () {
            const rest = await fetch(CAT_ENDPOINT_RANDOM_FACT)
            const json = await  res.json()
            setFact(data.fact)
        }
    }, [])
    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}