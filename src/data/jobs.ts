import type { CelebriteResponse } from '@/types/celebritie'
import axios from 'axios'

export const fetchJobsByCelebritie = async (id: string) => {
  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/actors/v2/get-meta-data',
    params: {
      nconsts: id,
      first: '20',
      country: 'US',
      language: 'en-US',
    },
    headers: {
      'x-rapidapi-key': '502d8b37b6msh4dc953486e7be00p112218jsn062fbe360556',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request<CelebriteResponse>(options)
    return response.data.data.names
  } catch (error) {
    return []
  }
}
