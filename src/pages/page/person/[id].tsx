import BorderWithRadio from '@/components/BorderWithRadio/BorderWithRadio'
import { AppContext } from '@/context/AppContext'
import { fetchJobsByCelebritie } from '@/data/jobs'
import {
  DivButtons,
  JobsContainer,
  JobsList,
  PersonContainer,
  PersonImg,
  PersonInfoContainer,
  PersonName,
  Separator,
  TextArea,
  TextContainer,
  TextContent,
  TextTitle,
  Title,
} from '@/styles/pages/person'
import type { CelebriteName } from '@/types/celebritie'
import { formatDateAndCalculateAge } from '@/utils/get-age-and-birthday'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import JobCard from '@/components/JobCard/JobCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { Grid, Navigation, Pagination } from 'swiper/modules'

export default function PersonPage() {
  const { isLoading, setIsLoading } = useContext(AppContext)
  const [jobs, setJobs] = useState<CelebriteName[]>([])
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const router = useRouter()
  const id = router.query.id as string

  useEffect(() => {
    if (!id) {
      router.push('/')
      return
    }

    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await fetchJobsByCelebritie(id)
        setJobs(response)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [id, router, setIsLoading])

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

  if (isLoading || jobs.length === 0) return <></>

  return (
    <PersonContainer>
      <JobsContainer>
        <Title>
          <BorderWithRadio />
          Filmes e séries
        </Title>
        <JobsList>
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            slidesPerView={3}
            grid={{
              rows: 3,
            }}
            spaceBetween={12}
            navigation={false}
            pagination={{ clickable: true }}
            modules={[Grid, Pagination, Navigation]}
            className="mySwiper"
          >
            {jobs[0].knownFor.edges.map((job, index) => (
              <SwiperSlide key={index}>
                <JobCard job={job.node} />
              </SwiperSlide>
            ))}
          </Swiper>
        </JobsList>
        <Separator />
        <DivButtons>
          <span>
            {(swiperRef.current?.activeIndex || 0) + 1} de{' '}
            {Math.ceil(jobs[0].knownFor.edges.length / 9)} Páginas
          </span>
          <button
            type="button"
            onClick={prevSlide}
            disabled={isBeginning}
            style={{
              opacity: isBeginning ? 0.5 : 1,
              cursor: isBeginning ? 'not-allowed' : 'pointer',
            }}
          >
            <FaChevronLeft size={20} color="#eee" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={isEnd}
            style={{
              opacity: isEnd ? 0.5 : 1,
              cursor: isEnd ? 'not-allowed' : 'pointer',
            }}
          >
            <FaChevronRight size={20} color="#eee" />
          </button>
        </DivButtons>
      </JobsContainer>
      <PersonInfoContainer>
        <PersonImg $src={jobs[0].primaryImage.url} />
        <PersonName>{jobs[0]?.nameText?.text}</PersonName>
        <TextArea>
          <TextContainer>
            <TextTitle>Nascido(a) em:</TextTitle>
            <TextContent>
              {formatDateAndCalculateAge(jobs[0].birthDate.date)}
            </TextContent>
          </TextContainer>
          <TextContainer>
            <TextTitle>Origem:</TextTitle>
            <TextContent>Oakland, Califórnia, EUA</TextContent>
          </TextContainer>
          <TextContainer>
            <TextTitle>Sobre:</TextTitle>
            <TextContent>
              Ator/Atriz atuante em filmes:{' '}
              {jobs[0]?.knownFor.edges.map((job, index) => (
                <span key={job.node.title.id}>
                  <Link
                    href={`/page/movie/${job.node.title.id}`}
                    style={{ color: '#eee' }}
                  >
                    {job.node.title.titleText.text}
                  </Link>
                  {index < jobs[0].knownFor.edges.length - 1 && ', '}
                </span>
              ))}
            </TextContent>
          </TextContainer>
        </TextArea>
      </PersonInfoContainer>
    </PersonContainer>
  )
}
