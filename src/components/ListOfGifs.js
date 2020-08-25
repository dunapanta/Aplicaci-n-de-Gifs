import React, {useState, useEffect} from 'react';
import Gif from '../components/Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({params}) {
    const {keyword} = params
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({keyword})
            .then(gifs => setGifs(gifs)) 
    }, [keyword])

    return (
        <div>
            {gifs.map(gif => 
                <Gif 
                id={gif.id}
                key={gif.id}
                title={gif.title}
                url={gif.url}
                />
            )}
       </div>
    )
        
}