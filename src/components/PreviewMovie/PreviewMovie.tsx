import type { MovieInfo } from '@/types/movies'
import { FaPlay, FaStar } from 'react-icons/fa'
import Button from '../Button/Button'
import RouteComponent from '../RouteComponent/RouteComponent'
import {
  PreviewArea,
  PreviewMovie as PreviewMovieContainer,
  PreviewRating,
  Title,
} from './styled'

interface PreviewMovieProps {
  movie: MovieInfo
  ratingIsVisible?: boolean
}
function PreviewMovie({ movie, ratingIsVisible = true }: PreviewMovieProps) {
  return (
    <RouteComponent path={`/page/movie/${movie.node.id}`}>
      <PreviewMovieContainer $bannerImg={movie.node.primaryImage.url}>
        <PreviewArea>
          {ratingIsVisible && (
            <PreviewRating>
              <FaStar color="#F0E635" size={20} />
              {movie.node.ratingsSummary.aggregateRating || 5.5}
            </PreviewRating>
          )}
          <div>
            <Title>{movie.node.titleText.text}</Title>
            <Button>
              Assistir ao Trailer <FaPlay color="#fff" />
            </Button>
          </div>
        </PreviewArea>
      </PreviewMovieContainer>
    </RouteComponent>
  )
}

export default PreviewMovie
