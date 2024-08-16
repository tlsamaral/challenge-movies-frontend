import Button from '@/components/Button/Button'
import CarouselCredits from '@/components/CarouselCredits/CarouselCredits'
import CarouselMovies from '@/components/CarouselMovies/CarouselMovies'
import CastCrew from '@/components/CastCrew/CastCrew'
import { InfoSection, MoreInfo, Rating } from '@/components/FeaturedMovie/style'
import Tag from '@/components/Tag/Tag'
// import { AppContext } from '@/context/AppContext'
import { useStore } from '@/store/store'
import type { MovieInfo, Movies } from '@/types/movies'
import TransformMovies from '@/utils/transform-movie-filtered-to-info'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import {
  AtrativeInfo,
  Banner,
  CastCrewContent,
  Content,
  Description,
  InfoContent,
  MoviePageContainer,
  TagWrapper,
  Title,
} from '../../../styles/pages/movie'

export default function MoviePage() {
  const {
    handleSelectedMovie,
    selectedMovie,
    getMoviesBySearch,
    movies,
    isLoading,
    setIsLoading,
  } = useStore()
  const [similarMovies, setSimilarMovies] = useState<MovieInfo[]>([])
  const router = useRouter()
  const movieId = router.query.id as string
  const principalCredits = selectedMovie?.node.principalCredits.map((c) =>
    c.credits.map((cr) => cr.name),
  )
  const principalCreditsNames = principalCredits?.map((name) =>
    name.map((c) => c.nameText.text),
  )

  const titleText = selectedMovie?.node.titleText.text.split(' ')[0]

  useEffect(() => {
    if (!movieId) {
      router.push('/')
      return
    }

    const fetchData = async () => {
      try {
        handleSelectedMovie(movieId)
        if (!selectedMovie) {
          router.push('/')
          return
        }
        // Por falta de informações desisti dessa ideia, ia ficar muito legal porém a versão gratuita não oferece muitas possibilidades :/
        // if (titleText) {
        //   const similars = await getMoviesBySearch(titleText)
        //   const filteredToMovieInfo = TransformMovies(similars)
        //   setSimilarMovies(filteredToMovieInfo)

        //   setMovies((prev) => {
        //     return [...prev, ...filteredToMovieInfo]
        //   })
        // }
        setSimilarMovies(movies.slice(0, 12))
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
    return () => {
      setSimilarMovies([])
      handleSelectedMovie('')
    }
  }, [movieId, titleText, handleSelectedMovie, getMoviesBySearch])

  return (
    <MoviePageContainer>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Banner $bannerImg={selectedMovie?.node.primaryImage.url || ''}>
            <Button>
              Assistir ao Trailer <FaPlay color="#eee" />
            </Button>
          </Banner>
          <TagWrapper>
            {selectedMovie?.node.titleGenres.genres.map((genre) => (
              <Tag key={genre.genre.genreId} text={genre.genre.text} />
            ))}
          </TagWrapper>
          <Content>
            <InfoContent>
              <AtrativeInfo>
                <Title>{selectedMovie?.node.titleText.text}</Title>
                <Rating>
                  <FaStar color="#F0E635" size={16} />
                  <span>
                    {selectedMovie?.node.ratingsSummary.aggregateRating}
                  </span>
                  <small>
                    | {selectedMovie?.node.metacritic?.metascore.score}mil
                  </small>
                </Rating>
              </AtrativeInfo>
              <InfoSection>
                <MoreInfo>
                  <li>2h</li>
                  <li>18</li>
                  <li>{selectedMovie?.node.releaseYear.year}</li>
                </MoreInfo>
              </InfoSection>
              <Description>
                {selectedMovie?.node.plot.plotText.plainText}
              </Description>
            </InfoContent>
            <CastCrewContent>
              {principalCreditsNames && principalCreditsNames?.length > 0 && (
                <CastCrew
                  title="Créditos"
                  content={principalCreditsNames?.join(', ') ?? ''}
                />
              )}
            </CastCrewContent>
          </Content>
          <CarouselCredits
            title="Créditos"
            listPeople={selectedMovie?.node.principalCredits[0].credits || []}
          />
          <CarouselMovies title="Similares" listMovies={similarMovies} />
        </>
      )}
    </MoviePageContainer>
  )
}
