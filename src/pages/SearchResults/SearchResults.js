import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import "./SearchResults.css"

export default function SearchResults({params}){
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})
    
    const handleNextPage = () => {
        setPage(prevPage => prevPage +1)
    }

    return (
        <>
        {
            loading 
                ? <Spinner />
                : <>
                    <h3 className="App-title">{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                  </>
        }
        <button className="button-style" onClick={handleNextPage}>Siguiente Página</button>
        </>
    )
}