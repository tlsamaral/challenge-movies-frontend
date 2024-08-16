import type { MovieInfo } from '@/types/movies'
import { Swiper, SwiperSlide } from 'swiper/react'
import BorderWithRadio from '../BorderWithRadio/BorderWithRadio'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { caroulselBreakpoints } from '@/utils/caroulsel-breakpoints'
import { useEffect, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import PaginationButtons from '../PaginationButtons/PaginationButtons'
import { SetupContent, Title } from './style'

interface MovieSlideProps {
  movies: MovieInfo[]
}
export default function MovieSlides({ movies }: MovieSlideProps) {
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
  return (
    <>
      <SetupContent>
        <Title>
          <BorderWithRadio /> Destaques também
        </Title>
        <PaginationButtons
          onPrev={prevSlide}
          onNext={nextSlide}
          isBeginning={isBeginning}
          isEnd={isEnd}
        />
      </SetupContent>

      <div>
        <Swiper
          spaceBetween={8}
          slidesPerView={'auto'}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
          }}
          breakpoints={{
            ...caroulselBreakpoints,
            '1200': {
              slidesPerView: 4,
            },
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide
              key={movie.node.id}
              style={{ width: 'auto', flex: '0 0 auto' }}
            >
              <PreviewMovie movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
