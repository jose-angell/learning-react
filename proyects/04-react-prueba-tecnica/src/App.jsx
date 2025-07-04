import {useState, useEffect} from 'react';
import './App.css'
import {getRandonFact} from './services/facts.js';

export function App () {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState();
    

    // para recuperar  la cita al cargar la app
    useEffect(() => {
        getRandonFact().then(setFact)
        //fetch(CAT_ENDPOINT_RANDOM_FACT)
        //.then(res => res.json())
        //.then(data => {
         //   const {fact} = data
         //   setFact(fact)
           // const firsThreeWord = fact.split(' ', 3).join(' ');
           // fetch(`https://cataas.com/cat/says/${firsThreeWord}?size=50&color=red&json=true`)
           // .then(res => res.json())
           // .then(response => {
           //     const {url} = response;
                //console.log(url);
           //     setImageUrl(url);
           // })
            
        //})
    }, []);
    // para recuperar la imagen al cambiar la cita
    useEffect(() => {
        if(!fact) return;
        const firsThreeWord = fact.split(' ', 3).join(' ');
        fetch(`https://cataas.com/cat/says/${firsThreeWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const {url} = response;
            //console.log(url);
            setImageUrl(url);
        })
    }, [fact]);
    const handleClick = async () => {
        const newfact = await getRandonFact(); 
        setFact(newfact);
    }
    return (
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick} >Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first trhee words for ${fact}`}  />}
        </main>
    )
}