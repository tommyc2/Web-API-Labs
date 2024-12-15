import { tmdb_api_key } from './api-key.js'

export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${tmdb_api_key}&language=en-US&include_adult=false&page=1`
    )
    console.log("Api key", tmdb_api_key)
    return response.json()
  };