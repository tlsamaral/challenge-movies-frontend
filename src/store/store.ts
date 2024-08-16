import create from 'zustand'
import type { ActorsNode } from '@/types/actors'
import type { MovieInfo } from '@/types/movies'
import type { MoviesFiltered } from '@/types/movie-filtered'
import axios from 'axios'

interface AppState {
  movies: MovieInfo[]
  setMovies: (movies: MovieInfo[]) => void
  actors: ActorsNode[]
  setActors: (actors: ActorsNode[]) => void
  selectedMovie: MovieInfo | null
  selectedActor: ActorsNode | null
  handleSelectedMovie: (movie_id: MovieInfo['node']['id']) => void
  setSelectedActor: (actor: ActorsNode | null) => void
  getMoviesBySearch: (search: string) => Promise<MoviesFiltered[]>
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  actors: [],
  setActors: (actors) => set({ actors }),
  selectedMovie: null,
  selectedActor: null,
  handleSelectedMovie: (movie_id) => {
    set((state) => ({
      selectedMovie:
        state.movies.find((movie) => movie.node.id === movie_id) || null,
    }))
  },
  setSelectedActor: (actor) => set({ selectedActor: actor }),
  getMoviesBySearch: async (search) => {
    const options = {
      method: 'GET',
      url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
      params: { q: search },
      headers: {
        'x-rapidapi-key': '502d8b37b6msh4dc953486e7be00p112218jsn062fbe360556',
        'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
      },
    }
    try {
      const response = await axios.request(options)
      return response.data.d
    } catch (error) {
      return []
    }
  },
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
}))
