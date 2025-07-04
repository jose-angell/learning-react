import {useState, useEffect, use} from 'react';
import './App.css'
import {useCatImage} from './hooks/useCatImage.js';
import {useCatFact} from './hooks/useCatFact.js';

export function App () {
    const {fact, refreshFact} = useCatFact();  
    const {imageUrl} = useCatImage({fact});
    const handleClick = async () => {
        refreshFact()
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