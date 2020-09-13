import React, {useCallback, useRef, useEffect} from 'react'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import "./SearchResults.css"

export default function SearchResults({params}){
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })
   
    // funcion para evitar que se hagan multiples de una peticiones en cierto tiempo
    const debounceHandleNextPage = useCallback(
        debounce( () => setPage(prevPage => prevPage +1), 300
        ), [])

    useEffect( () => {
        // console.log(isNearScreen)
        if (isNearScreen) {
            debounceHandleNextPage()
        }
    }, [debounceHandleNextPage, isNearScreen])

    return (
        <>
        {
            loading 
                ? <Spinner />
                : <>
                    <h3 className="App-title">{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                  </>
        }
        </>
    )
}