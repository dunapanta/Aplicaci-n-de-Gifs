import React from 'react'
import Gif from '../../components/Gif/Gif'
import Spinner from '../../components/Spinner/Spinner'
import useSingleGif from '../../hooks/useSingleGif'
import {Redirect} from 'wouter'
import {Helmet} from 'react-helmet'

export default function Detail({params}){
    
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const titleGif = gif ? gif.title : ""

    if (isLoading) return (
        <>
            <Helmet>
                <title>Cargando...</title>
            </Helmet>
            <Spinner />
        </>
    )
    if (isError) return <Redirect to='/404'/>
    if (!gif) return null

    return (
                <>
                    <Helmet>
                        <title>{titleGif} | App Gifs</title>
                    </Helmet>
                    <h3 className="App-title">{gif.title}</h3>
                    <Gif {...gif}/>
                </>
            )
}