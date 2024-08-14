import { ActorNames, Movies } from '@/pages'
import { ActorsNode } from '@/types/actors'
import { MoviesFiltered, MoviesFilteredResponse } from '@/types/movie-filtered'
import { MovieInfo } from '@/types/movies'
import axios from 'axios'
import React, { createContext, ReactNode, useState, useMemo, Dispatch, SetStateAction } from 'react'

interface AppContextData {
    movies: Movies
    setMovies: Dispatch<SetStateAction<Movies>>
    actors: ActorNames
    setActors: Dispatch<SetStateAction<ActorNames>>
    selectedMovie: MovieInfo | null
    selectedActor: ActorsNode | null
    handleSelectedMovie: (movie_id: MovieInfo['node']['id']) => void
    setSelectedActor: (actor: ActorsNode | null) => void
    getMoviesBySearch: (search: string) => Promise<MoviesFiltered[]>
}
export const AppContext = createContext({} as AppContextData)

interface AppProviderProps {
    children: ReactNode
}

function AppProviderComponent({ children }: AppProviderProps) {
    const [movies, setMovies] = useState<Movies>([])
    const [actors, setActors] = useState<ActorNames>([])
    const [selectedMovie, setSelectedMovie] = useState<MovieInfo | null>(null)
    const [selectedActor, setSelectedActor] = useState<ActorsNode | null>(null)

    const handleSelectedMovie = (movie_id: MovieInfo['node']['id']) => {
        const selectMovie = movies.find((movie) => movie.node.id === movie_id) as MovieInfo
        setSelectedMovie(selectMovie)
    }

    const getMoviesBySearch = async (search: string) => {
            const options = {
              method: 'GET',
              url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
              params: { q: search },
              headers: {
                'x-rapidapi-key':
                  '575c925fb8mshca0b3947edf1ae3p1447e2jsn2c38e4393425',
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
              },
            }
            try {
              const response = await axios.request<MoviesFilteredResponse>(options)
              return response.data.d
            } catch (error) {
              return []
            }
    }

    const value = useMemo(() => ({
        movies,
        setMovies,
        actors,
        setActors,
        selectedMovie, 
        selectedActor, 
        handleSelectedMovie,
        setSelectedActor,
        getMoviesBySearch
    }), [movies, actors, selectedMovie, selectedActor])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const AppProvider = React.memo(AppProviderComponent)
