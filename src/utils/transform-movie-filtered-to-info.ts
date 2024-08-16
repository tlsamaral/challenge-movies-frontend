import type { MoviesFiltered } from '@/types/movie-filtered'
import type { MovieInfo } from '@/types/movies'

export default function TransformMovies(moviesFiltered: MoviesFiltered[]) {
  function randomRanking(min = 6, max = 10) {
    return Number((Math.random() * (max - min) + min).toFixed(2))
  }
  const movies = moviesFiltered.map((movieFiltered, i) => {
    return {
      node: {
        id: movieFiltered.id,
        titleText: {
          text: movieFiltered.l,
        },
        primaryImage: {
          url: movieFiltered.i.imageUrl,
        },
        ratingsSummary: {
          aggregateRating: randomRanking(),
        },
        releaseYear: {
          year: movieFiltered.y,
        },
      },
    } as MovieInfo
  })

  return movies
}
