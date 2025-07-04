import { useState, useEffect } from 'react';


// para recuperar la imagen al cambiar la cita
export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState();
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
    return {imageUrl};
} // {imageUrl: 'https://...'} 
