import React from 'react'
import ButtonNotFound from '../../components/Button/Button'
import SearchForm from '../../components/SearchForm/SearchForm'
import {useLocation} from "wouter"

export default function NotFound() {

    const [location, setLocation] = useLocation();

    const handleRedirect = (e) => {
        e.preventDefault()
        setLocation("/")
    }

    return (
                <>
                    <header className="o-header">
                        <SearchForm />
                    </header>
                    <h2>Error 404</h2>
                    <h2>Lo Sentimos No Encontramos el Gif</h2>
                    <ButtonNotFound onClick={handleRedirect}/>
                </>
            )

}