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
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  function prevSlide() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function nextSlide() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

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
        <SetupContent>
          <Title>
            <BorderWithRadio /> Destaques também
          </Title>
          {isMobile && (
            <div>
              <button
                type="button"
                onClick={prevSlide}
                disabled={isBeginning}
                style={{ opacity: isBeginning ? 0.5 : 1 }}
              >
                <FaChevronLeft size={20} color="#eee" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                disabled={isEnd}
                style={{ opacity: isEnd ? 0.5 : 1 }}
              >
                <FaChevronRight size={20} color="#eee" />
              </button>
            </div>
          )}
        </SetupContent>
        {isMobile ? (
          <Swiper
            spaceBetween={8}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            breakpoints={caroulselBreakpoints}
          >
            {otherMovies.map((movie) => (
              <SwiperSlide key={movie.node.id}>
                <PreviewMovie movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <ContentPreviewList>
            {otherMovies.map((movie) => (
              <PreviewMovie key={movie.node.id} movie={movie} />
            ))}
          </ContentPreviewList>
        )}
      </PreviewMovieWrapper>
    </InitialContainer>
  )
}

export default FirstComponent
