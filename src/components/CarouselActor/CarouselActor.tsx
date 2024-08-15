import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CarouselSection } from '@/styles'
import type { ActorsNode } from '@/types/actors'
import { caroulselBreakpoints } from '@/utils/caroulsel-breakpoints'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { BorderWithRadio } from '../BorderWithRadio/style'
import PreviewActor from '../PreviewActor/PreviewActor'
import { ControlArea, Title } from './style'

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
    <CarouselSection>
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
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        breakpoints={{ ...caroulselBreakpoints, '640': { slidesPerView: 3 } }}
      >
        {listActors?.map((actor) => (
          <SwiperSlide key={actor.node.id}>
            <PreviewActor actor={actor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselSection>
  )
}

export default CarouselActors
