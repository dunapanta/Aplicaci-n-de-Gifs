import {useContext, useState, useEffect} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export default function useGifs ({keyword} = {keyword: null} ) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)

    // se recupera la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'popular'

    useEffect( () => {
        setLoading(true)
        getGifs({keyword: keywordToUse})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // se guarda la keyword del localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs]) 

    // Efecto para Paginacion
    useEffect( () => {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page])

    return {loading, loadingNextPage, gifs, setPage}
}