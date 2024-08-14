import type { MovieDataAll, MovieInfo } from '@/types/movies'
import type { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import CarouselMovies from '../components/CarouselMovies/CarouselMovies'
import FirstComponent from '../components/FirstComponent/FirstComponent'
import Header from '../components/Header/Header'
import { fetchPopularMovies } from '@/data/movies'
import { fetchPopularActors } from '@/data/actors'
import { ActorsNode } from '@/types/actors'
import CarouselActors from '@/components/CarouselActor/CarouselActor'

export type Movies = MovieInfo[]
export type ActorNames = ActorsNode[]

interface HomeProps {
  initialMovies: Movies
  initialActors: ActorNames
}

export default function Home({ initialMovies, initialActors }: HomeProps) {
  const [movies, setMovies] = useState<Movies>(initialMovies)
  const [actors, setActors] = useState<ActorNames>(initialActors)
  const [isLoading, setIsLoading] = useState(true)
  console.log(actors)

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
          <CarouselActors title="Celebridades " listActors={initialActors} />
        </>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const movies = await fetchPopularMovies()
  const actors = await fetchPopularActors()

  return {
    props: {
      initialMovies: movies,
      initialActors: actors
    },
  }
}
