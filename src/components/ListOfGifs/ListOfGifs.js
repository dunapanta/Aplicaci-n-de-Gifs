import React, {useState, useEffect} from 'react';
import Gif from '../Gif/Gif'
import './ListOfGifs.css'

export default function ListOfGifs({gifs}) {

    return (
        <div className="ListOfGifs">
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