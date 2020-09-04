import React, { useState } from 'react'
import {Link, useLocation} from "wouter"
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Home.css'

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
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    className="searchTerm"
                    type="text"
                    placeholder="Buscar Gif" 
                    onChange={handleChange} 
                    value={searchkeyword}
                />
                <button className="searchButton">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última Búsqueda</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>
                <div className="AppCategory">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}