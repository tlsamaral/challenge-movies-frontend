import { MoviesFiltered } from "@/types/movie-filtered"
import { MovieInfo } from "@/types/movies"

export default function TransformMovies(moviesFiltered: MoviesFiltered[]) {
    const movies = [] as MovieInfo[]
    moviesFiltered.map((movieFiltered) => {
        return {
            node: {
                 id: movieFiltered.id,
                 
            }
            
        } as MovieInfo
    })
}