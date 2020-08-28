import React, { useState } from 'react'
import {Link, useLocation} from "wouter"

const POPULAR_GIFS = ["Vegeta", "Matrix", "Nietzsche", "Catdog"]

export default function Home() {
    const [searchkeyword, setSearchKeyword] = useState('')

    const [path, pushLocation] = useLocation()

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