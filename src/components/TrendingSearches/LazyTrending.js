import React, {Suspense} from 'react'
import useNearScreen  from '../../hooks/useNearScreen'
import Spinner from '../Spinner/Spinner'


//Función para evitar que TrendingSearches siempre se descarge en el navegador

//Hago uso de React Lazy tengo que pasar una funcion del import dinamico
// cuando import es dinamico es asincrono y devuelve una promesa
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending() {
    
    const {isNearScreen, fromRef} = useNearScreen()
    
    /* en elementRef se esta guardando la referencia de este div */
    return  <div ref={fromRef}>
                {/* Es importante Suspense para manejar la promesa de React.lazy */}
                <Suspense fallback={<Spinner />}>
                    {isNearScreen ? <TrendingSearches /> : <Spinner />}
                </Suspense>
            </div>
}