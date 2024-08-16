import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CarouselSection } from '@/styles'
import type { Credit } from '@/types/movies'
import { caroulselBreakpoints } from '@/utils/caroulsel-breakpoints'
import { useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import { BorderWithRadio } from '../BorderWithRadio/style'
import PaginationButtons from '../PaginationButtons/PaginationButtons'
import PreviewPeople from '../PreviewPeople/PreviewPeople'
import { ControlArea, Title } from './style'

interface CarouselCreditsProps {
  title: string
  listPeople: Credit[]
}
function CarouselCredits({ title, listPeople }: CarouselCreditsProps) {
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
        {listPeople?.map((people) => (
          <SwiperSlide key={people.name.id}>
            <PreviewPeople people={people} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselSection>
  )
}

export default CarouselCredits
