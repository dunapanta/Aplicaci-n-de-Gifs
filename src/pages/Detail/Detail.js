import React from 'react'
import Gif from '../../components/Gif/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({params}){
    //con context ya puedo leer y/o actualizar el estado desde aqui
    const gifs = useGlobalGifs()
    console.log(gifs)

    const gif = gifs.find(singleGif => singleGif.id  === params.id)
    console.log(gif)

    return (
                <>
                    <h3 className="App-title">{gif.title}</h3>
                    <Gif {...gif}/>
                </>
            )
}