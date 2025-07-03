import {useState, useEffect} from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App () {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(data.fact)

            const firsThreeWord = fact.split(' ', 3).join(' ');
            fetch(`https://cataas.com/cat/says/${firsThreeWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response;
                //console.log(url);
                setImageUrl(url);
            })
        })
    }, [])
    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first trhee words for ${fact}`} width="300px" />}
        </main>
    )
}