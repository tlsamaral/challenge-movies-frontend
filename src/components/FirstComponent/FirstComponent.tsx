import type { MovieInfo } from '@/types/movies'
import { FaFire, FaPlay, FaStar } from 'react-icons/fa'
import BorderWithRadio from '../BorderWithRadio/BorderWithRadio'
import Button from '../Button/Button'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import { InitialContainer, PreviewMovieWrapper, Title } from './style'

type FirsComponentProps = {
  mainMovie: MovieInfo
  otherMovies: MovieInfo[]
}

function FirstComponent({ mainMovie, otherMovies }: FirsComponentProps) {
  return (
    <InitialContainer>
      <FeaturedMovie movie={mainMovie} />
      <PreviewMovieWrapper>
        <Title>
          <BorderWithRadio /> Destaques também
        </Title>
        {otherMovies.map((movie) => (
          <PreviewMovie key={movie.id} movie={movie} />
        ))}
      </PreviewMovieWrapper>
    </InitialContainer>
  )
}

export default FirstComponent
