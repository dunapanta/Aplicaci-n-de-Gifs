import {API_KEY} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const {images, title, id} = data
    const {url} = images.downsized_medium
    return {title, id, url}

}

export default function getSingleGif ({ id }){
    return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(fromApiResponseToGifs)
}