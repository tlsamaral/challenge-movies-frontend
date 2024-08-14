import { MovieDataAll } from '@/types/movies'
import axios from 'axios'

export const fetchPopularMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular',
    params: {
      first: '20',
      country: 'US',
      language: 'en-US',
    },
    headers: {
      'x-rapidapi-key': 'e2259ddd29msh8b738d3dbdf343fp1f5306jsndb3ee7a50307',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request<MovieDataAll>(options)
    return response.data?.data.movies.edges ?? []
  } catch (error) {
    console.error(error)
    return []
  }
}