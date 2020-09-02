import {useContext, useState, useEffect} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'
import Gif from '../components/Gif/Gif'

export default function useGifs ({keyword} = {keyword: null} ) {
    const [loading, setLoading] = useState(false)
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
    }, [keyword, setGifs]) 

    return {loading, gifs}
}