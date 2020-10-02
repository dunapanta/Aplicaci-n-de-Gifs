import React from 'react'
import Gif from '../../components/Gif/Gif'
import Spinner from '../../components/Spinner/Spinner'
import useSingleGif from '../../hooks/useSingleGif'
import {Redirect} from 'wouter'

export default function Detail({params}){
    
    const {gif, isLoading, isError} = useSingleGif({id: params.id})

    if (isLoading) return <Spinner />
    if (isError) return <Redirect to='/404'/>
    if (!gif) return null

    return (
                <>
                    <h3 className="App-title">{gif.title}</h3>
                    <Gif {...gif}/>
                </>
            )
}