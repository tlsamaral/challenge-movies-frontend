import type { MovieInfo } from '@/types/movies'
import { FaFire, FaPlay, FaStar } from 'react-icons/fa'
import Button from '../Button/Button'
import {
  BannerTopOne,
  Description,
  InfoSection,
  Main,
  MainContent,
  MoreInfo,
  Rating,
  Title,
} from './style'

interface FeaturedMovieProps {
  movie: MovieInfo
}
function FeaturedMovie({ movie }: FeaturedMovieProps) {
  return (
    <BannerTopOne bannerImg={movie.big_image}>
      <Main>
        <MainContent>
          <Button>
            <FaFire color="#fff" />
            Em destaque{' '}
          </Button>
          <Title>{movie.title}</Title>
          <InfoSection>
            <Rating>
              <FaStar color="#F0E635" size={16} />
              <span>{movie.rating}</span>
              <small>| 120 mil</small>
            </Rating>
            <MoreInfo>
              <li>2h 8m</li>
              <li>Comedy, Action, Adventure, Superhero...</li>
              <li>{movie.year}</li>
            </MoreInfo>
          </InfoSection>
          <Description>{movie.description}</Description>
        </MainContent>
        <Button>
          Assistir ao Trailer <FaPlay color="#fff" />
        </Button>
      </Main>
    </BannerTopOne>
  )
}

export default FeaturedMovie
