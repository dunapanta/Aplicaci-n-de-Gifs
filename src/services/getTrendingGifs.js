import {API_KEY} from './settings'


export default function getTrendingGifs () {
    const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`
    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const {data = []} = response
                return data
            }) 
}