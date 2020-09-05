import React, {useState, useEffect, useRef} from 'react'
import getTrendingGifs from '../../services/getTrendingGifs'
import Category from '../Category/Category'
import useNearScreen  from '../../hooks/useNearScreen'

function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect( () => {
        getTrendingGifs()
            .then(setTrends)
    }, [])

    return <Category name='Tendencias' options={trends}/>
}


export default function LazyTrending() {
    
    const {isNearScreen, fromRef} = useNearScreen()
    
    /* en elementRef se esta guardando la referencia de este div */
    return  <div ref={fromRef}>
                {isNearScreen ? <TrendingSearches /> : null}
            </div>
}