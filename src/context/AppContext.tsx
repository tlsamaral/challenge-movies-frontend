// import type { ActorsNode } from '@/types/actors'
// import type {
//   MoviesFiltered,
//   MoviesFilteredResponse,
// } from '@/types/movie-filtered'
// import type { MovieInfo } from '@/types/movies'
// import axios from 'axios'
// import React, {
//   createContext,
//   type ReactNode,
//   useState,
//   useMemo,
//   type Dispatch,
//   type SetStateAction,
// } from 'react'

// interface AppContextData {
//   movies: MovieInfo[]
//   setMovies: Dispatch<SetStateAction<MovieInfo[]>>
//   actors: ActorsNode[]
//   setActors: Dispatch<SetStateAction<ActorsNode[]>>
//   selectedMovie: MovieInfo | null
//   selectedActor: ActorsNode | null
//   handleSelectedMovie: (movie_id: MovieInfo['node']['id']) => void
//   setSelectedActor: (actor: ActorsNode | null) => void
//   getMoviesBySearch: (search: string) => Promise<MoviesFiltered[]>
//   isLoading: boolean
//   setIsLoading: Dispatch<SetStateAction<boolean>>
// }
// export const AppContext = createContext({} as AppContextData)

// interface AppProviderProps {
//   children: ReactNode
// }

// function AppProviderComponent({ children }: AppProviderProps) {
//   const [movies, setMovies] = useState<MovieInfo[]>([])
//   const [actors, setActors] = useState<ActorsNode[]>([])
//   const [selectedMovie, setSelectedMovie] = useState<MovieInfo | null>(null)
//   const [selectedActor, setSelectedActor] = useState<ActorsNode | null>(null)
//   const [isLoading, setIsLoading] = useState(true)

//   const handleSelectedMovie = (movie_id: MovieInfo['node']['id']) => {
//     const selectMovie = movies.find(
//       (movie) => movie.node.id === movie_id,
//     ) as MovieInfo
//     setSelectedMovie(selectMovie)
//   }

//   const getMoviesBySearch = async (search: string) => {
//     const options = {
//       method: 'GET',
//       url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
//       params: { q: search },
//       headers: {
//         'x-rapidapi-key': '502d8b37b6msh4dc953486e7be00p112218jsn062fbe360556',
//         'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
//       },
//     }
//     try {
//       const response = await axios.request<MoviesFilteredResponse>(options)
//       return response.data.d
//     } catch (error) {
//       return []
//     }
//   }

//   const value = useMemo(
//     () => ({
//       movies,
//       setMovies,
//       actors,
//       setActors,
//       selectedMovie,
//       selectedActor,
//       handleSelectedMovie,
//       setSelectedActor,
//       getMoviesBySearch,
//       isLoading,
//       setIsLoading,
//     }),
//     [movies, actors, selectedMovie, selectedActor, isLoading],
//   )

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>
// }

// export const AppProvider = React.memo(AppProviderComponent)
