import CarouselActors from '@/components/CarouselActor/CarouselActor'

import { AppContext } from '@/context/AppContext'
import { fetchPopularActors } from '@/data/actors'
import { fetchPopularMovies } from '@/data/movies'
import type { ActorsNode } from '@/types/actors'
import type { MovieInfo } from '@/types/movies'

import { useContext, useEffect, useState } from 'react'
import CarouselMovies from '../components/CarouselMovies/CarouselMovies'
import FirstComponent from '../components/FirstComponent/FirstComponent'
import { ContentMain } from '@/styles'

export type Movies = MovieInfo[]
export type ActorNames = ActorsNode[]

interface HomeProps {
  initialMovies: Movies | null
  initialActors: ActorNames | null
}

export default function Home({ initialMovies, initialActors }: HomeProps) {
  const { movies, actors, setMovies, setActors, isLoading, setIsLoading } =
    useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      if (!movies || movies.length === 0) {
        const fetchedMovies = initialMovies || (await fetchPopularMovies())
        setMovies(fetchedMovies)
      }

      if (!actors || actors.length === 0) {
        const fetchedActors = initialActors || (await fetchPopularActors())
        setActors(fetchedActors)
      }
      console.log('on fetch')
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const mainMovie = movies?.reduce((highestRated, currentMovie) => {
    return (currentMovie.node.ratingsSummary.aggregateRating || 5.5) >
      (highestRated.node.ratingsSummary.aggregateRating || 5.5)
      ? currentMovie
      : highestRated
  }, movies[0])

  const otherMovies = movies?.slice(1, 4)
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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContentMain>
          {mainMovie && (
            <FirstComponent mainMovie={mainMovie} otherMovies={otherMovies} />
          )}
          <CarouselMovies
            title="Últimos Lançamentos"
            listMovies={latestMovies}
          />
          <CarouselMovies title="Recomendados" listMovies={sortMovies} />
          <CarouselActors title="Celebridades" listActors={actors} />
        </ContentMain>
      )}
    </>
  )
}
