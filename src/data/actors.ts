import { ActorsResponse } from '@/types/actors'
import axios from 'axios'

export const fetchPopularActors = async () => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/actors/v2/get-top-meter',
    params: {
      country: 'US',
      first: '20',
      language: 'en-US'
    },
    headers: {
      'x-rapidapi-key': 'e2259ddd29msh8b738d3dbdf343fp1f5306jsndb3ee7a50307',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
    }
  }
  
  try {
    const response = await axios.request<ActorsResponse>(options)
    return response.data?.data.topMeterNames.edges || []
  } catch (error) {
    return []
  }
}