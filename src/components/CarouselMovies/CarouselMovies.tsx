import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CarouselSection } from '@/styles'
import type { MovieInfo } from '@/types/movies'
import { caroulselBreakpoints } from '@/utils/caroulsel-breakpoints'
import { useRef, useState } from 'react'

import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { BorderWithRadio } from '../BorderWithRadio/style'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import { ControlArea, Title } from './style'
import PaginationButtons from '../PaginationButtons/PaginationButtons'

interface CarouselMoviesProps {
  title: string
  listMovies: MovieInfo[]
}
function CarouselMovies({ title, listMovies }: CarouselMoviesProps) {
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
    <CarouselSection>
      <ControlArea>
        <Title>
          <BorderWithRadio />
          {title}
        </Title>
        <div>
          <PaginationButtons
            onPrev={prevSlide}
            onNext={nextSlide}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
        </div>
      </ControlArea>
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
        breakpoints={{
          ...caroulselBreakpoints,
          '1200': {
            slidesPerView: 4,
          },
        }}
      >
        {listMovies?.map((movie) => (
          <SwiperSlide key={movie.node.id}>
            <PreviewMovie movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselSection>
  )
}

export default CarouselMovies
