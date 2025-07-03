import {useState, useEffect} from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App () {

    const [fact, setFact] = useState()
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }, [])
    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
}