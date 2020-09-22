import React, { useState } from 'react'
import {useLocation} from "wouter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchForm () {
    const [searchkeyword, setSearchKeyword] = useState('')
    
    const [path, pushLocation] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${searchkeyword}`)
    }

    const handleChange = e => {
        setSearchKeyword(e.target.value)
    }

    return (
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
    )
}

export default React.memo(SearchForm)