import type { MovieInfo } from '@/types/movies'
import { FaPlay, FaStar } from 'react-icons/fa'
import Button from '../Button/Button'
import {
  PreviewArea,
  PreviewMovie as PreviewMovieContainer,
  PreviewRating,
  Title,
} from './styled'

interface PreviewMovieProps {
  movie: MovieInfo
}
function PreviewMovie({ movie }: PreviewMovieProps) {
  return (
    <PreviewMovieContainer bannerImg={movie.node.primaryImage.url}>
      <PreviewArea>
        <PreviewRating>
          <FaStar color="#F0E635" size={20} />
          7.1
        </PreviewRating>
        <div>
          <Title>{movie.node.titleText.text}</Title>
          <Button>
            Assistir ao Trailer <FaPlay color="#fff" />
          </Button>
        </div>
      </PreviewArea>
    </PreviewMovieContainer>
  )
}

export default PreviewMovie
