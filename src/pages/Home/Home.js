import React, { useState } from 'react'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import LazyTrending from '../../components/TrendingSearches/LazyTrending'
import SearchForm from '../../components/SearchForm/SearchForm'
import './Home.css'

export default function Home() {

    const {loading, gifs} = useGifs()

    
    return (
        <>
            {/* Buscador */}
            <header className="o-header">
                <SearchForm />
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última Búsqueda</h3>
                        <ListOfGifs gifs={gifs}/>
                    </div>
                    <div className="AppCategory">
                        <LazyTrending />
                    </div>
                </div>
            </div>
        </>
    )
}