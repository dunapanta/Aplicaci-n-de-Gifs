import { useState, useEffect, useRef} from 'react'

export default function useNearScreen ({distance = '100px', externalRef, once=true} = {}) {
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect( () => {
        let observer
        //esta linea es parte de infinite scroll
        const element = externalRef ? externalRef.current : fromRef.current
        if (!element) return

        //intersection observer es una API que permite detectar si un elemento esta en el viewport

        //recibe 2 parametos: el callback que se ejecuta cada vez que haya 
        //una actualizacion sobre lo que observa y el otro es un objeto de opciones

        const onChange = (entries, observer) => {
            console.log(entries)
            const el = entries[0]
            console.log(el.isIntersecting)
            if (el.isIntersecting){
                setShow(true)
                //importante desconectarse cuando sucedio interseccion
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
              ? IntersectionObserver
              : import('intersection-observer')
          ).then(() => {
            observer = new IntersectionObserver(onChange, {
              rootMargin: distance
            })
        
            observer.observe(element)
          })
        //el effecto puede devolver una funcion para limpiar eventos
        // cuando este componente se deje de utilizar ejecuta esto y limpia evento
        // evita ejecutar setShow cuando este componente no esta disponible (es un error tipico)
        return () => observer.disconnect()
    }, [distance, externalRef, once])

    return {isNearScreen, fromRef}
}