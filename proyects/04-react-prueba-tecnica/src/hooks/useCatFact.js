import { useState, useEffect } from 'react';
import {getRandonFact} from '../services/facts.js';


export const useCatFact = () => {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getRandonFact().then(newFact => setFact(newFact));
    }
    // para recuperar  la cita al cargar la app
    useEffect(refreshFact, []);
    return {fact, refreshFact}
}
