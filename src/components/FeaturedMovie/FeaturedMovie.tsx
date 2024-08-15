import type { MovieInfo } from '@/types/movies'
import { FaFire, FaPlay, FaStar } from 'react-icons/fa'
import Button from '../Button/Button'
import RouteComponent from '../RouteComponent/RouteComponent'
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
    <RouteComponent path={`/page/movie/${movie.node.id}`}>
      <BannerTopOne $bannerImg={movie.node.primaryImage.url}>
        <Main>
          <MainContent>
            <Button style={{ width: 135 }}>
              <FaFire color="#fff" />
              Em destaque{' '}
            </Button>
            <Title>{movie.node.titleText.text}</Title>
            <InfoSection>
              <Rating>
                <FaStar color="#F0E635" size={16} />
                <span>{movie.node.ratingsSummary.aggregateRating}</span>
                <small>| 120 mil</small>
              </Rating>
              <MoreInfo>
                <li>2h 8m</li>
                <li>
                  {movie.node.titleGenres.genres.length >= 3
                    ? movie.node.titleGenres.genres
                        .slice(0, 3)
                        .map((genre) => genre.genre.text)
                        .join(', ') + '...'
                    : movie.node.titleGenres.genres.map(
                        (genre) => genre.genre.text,
                      )}
                </li>
                <li>{movie.node.releaseYear.year}</li>
              </MoreInfo>
            </InfoSection>
            <Description>{movie.node.plot.plotText.plainText}</Description>
          </MainContent>
          <Button style={{ width: 164 }}>
            Assistir ao Trailer <FaPlay color="#fff" />
          </Button>
        </Main>
      </BannerTopOne>
    </RouteComponent>
  )
}

export default FeaturedMovie
