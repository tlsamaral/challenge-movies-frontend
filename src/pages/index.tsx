import type { MovieDataAll, MovieInfo } from '@/types/movies'
import axios from 'axios'
import type { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import CarouselMovies from '../components/CarouselMovies/CarouselMovies'
import FirstComponent from '../components/FirstComponent/FirstComponent'
import Header from '../components/Header/Header'

export type Movies = MovieInfo[]

interface HomeProps {
  initialMovies: Movies
}

export default function Home({ initialMovies }: HomeProps) {
  const [movies, setMovies] = useState<Movies>(initialMovies)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const mainMovie = movies.shift()
  const otherMovies = movies?.slice(0, 3)
  const latestMovies = movies
    ? movies
        .sort((a, b) =>
          a.node.releaseYear.year < b.node.releaseYear.year ? 1 : -1,
        )
        .slice(0, 15)
    : []
  const sortMovies = movies?.sort(() => Math.random() - 0.5).slice(0, 35)

  return (
    <>
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {mainMovie && (
            <FirstComponent mainMovie={mainMovie} otherMovies={otherMovies} />
          )}
          <CarouselMovies
            title="Últimos Lançamentos"
            listMovies={latestMovies}
          />
          <CarouselMovies title="Recomendados" listMovies={sortMovies} />
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // const options = {
  //   method: 'GET',
  //   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  //   headers: {
  //     'x-rapidapi-key': '575c925fb8mshca0b3947edf1ae3p1447e2jsn2c38e4393425',
  //     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
  //   },
  // }

  // let movies: Movies = []

  // try {
  //   const response = await axios.request<Movies>(options)
  //   movies = response.data
  // } catch (error) {
  //   console.error(error)
  // }

  const options2 = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular',
    params: {
      first: '20',
      country: 'US',
      language: 'en-US',
    },
    headers: {
      'x-rapidapi-key': '575c925fb8mshca0b3947edf1ae3p1447e2jsn2c38e4393425',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    },
  }

  let moviesResponse: MovieDataAll | null = null
  try {
    const response = await axios.request<MovieDataAll>(options2)
    moviesResponse = response.data
  } catch (error) {
    console.error(error)
  }

  const movies = moviesResponse?.data.movies.edges ?? []

  return {
    props: {
      initialMovies: movies,
    },
  }
}
