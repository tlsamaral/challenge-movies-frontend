import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import type { ActorsNode } from '@/types/actors'
import { responsiveSwiper } from '@/utils/reponsive-caroulsel'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { BorderWithRadio } from '../BorderWithRadio/style'
import PreviewActor from '../PreviewActor/PreviewActor'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import { CarouselMoviesSection, ControlArea, Title } from './style'

interface CarouselActorsProps {
  title: string
  listActors: ActorsNode[]
}
function CarouselActors({ title, listActors }: CarouselActorsProps) {
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
    <CarouselMoviesSection>
      <ControlArea>
        <Title>
          <BorderWithRadio />
          {title}
        </Title>
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
      </ControlArea>
      <Swiper
        spaceBetween={8}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        slidesPerView={5}
        breakpoints={responsiveSwiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
      >
        {listActors?.map((actor) => (
          <SwiperSlide key={actor.node.id}>
            <PreviewActor actor={actor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselMoviesSection>
  )
}

export default CarouselActors
