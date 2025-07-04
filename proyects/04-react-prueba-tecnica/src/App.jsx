import {useState, useEffect, use} from 'react';
import './App.css'
import {getRandonFact} from './services/facts.js';
import {useCatImage} from './hooks/useCatImage.js';


export function App () {

    const [fact, setFact] = useState()
    const {imageUrl} = useCatImage({fact});

    // para recuperar  la cita al cargar la app
    useEffect(() => {
        getRandonFact().then(newFact => setFact(newFact));
        
    }, []);
    
    
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