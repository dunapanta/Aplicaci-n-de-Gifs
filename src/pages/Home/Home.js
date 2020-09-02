import React, { useState } from 'react'
import {Link, useLocation} from "wouter"
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'

const POPULAR_GIFS = ["Vegeta", "Matrix", "Nietzsche", "Catdog"]

export default function Home() {
    const [searchkeyword, setSearchKeyword] = useState('')

    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${searchkeyword}`)
    }

    const handleChange = e => {
        setSearchKeyword(e.target.value)
    }
    return (
        <>
            {/* Buscador */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Buscar Gif" 
                    onChange={handleChange} 
                    value={searchkeyword}
                />
            </form>
            <h3 className="App-title">Ultima Búsqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <h3 className="App-title">Gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}