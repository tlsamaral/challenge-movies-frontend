import type { MovieInfo } from '@/types/movies'
import { Swiper, SwiperSlide } from 'swiper/react'
import BorderWithRadio from '../BorderWithRadio/BorderWithRadio'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import 'swiper/css'
import { caroulselBreakpoints } from '@/utils/caroulsel-breakpoints'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import PaginationButtons from '../PaginationButtons/PaginationButtons'
import MovieSlides from './MovieSlides'
import {
  ContentPreviewList,
  InitialContainer,
  PreviewMovieWrapper,
  SetupContent,
  Title,
} from './style'

type FirsComponentProps = {
  mainMovie: MovieInfo
  otherMovies: MovieInfo[]
}

function FirstComponent({ mainMovie, otherMovies }: FirsComponentProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <InitialContainer>
      <FeaturedMovie movie={mainMovie} />
      <PreviewMovieWrapper>
        {isMobile ? (
          <MovieSlides movies={otherMovies} />
        ) : (
          <>
            <Title>
              <BorderWithRadio /> Destaques também
            </Title>
            <ContentPreviewList>
              {otherMovies.map((movie) => (
                <PreviewMovie key={movie.node.id} movie={movie} />
              ))}
            </ContentPreviewList>
          </>
        )}
      </PreviewMovieWrapper>
    </InitialContainer>
  )
}

export default FirstComponent
