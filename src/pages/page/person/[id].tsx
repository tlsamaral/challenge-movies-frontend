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
import 'swiper/css/grid'
import 'swiper/css/pagination'
import JobCard from '@/components/JobCard/JobCard'
import PaginationButtons from '@/components/PaginationButtons/PaginationButtons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import type { Swiper as SwiperType } from 'swiper'
import { Grid, Pagination } from 'swiper/modules'

export default function PersonPage() {
  const { isLoading, setIsLoading } = useContext(AppContext)
  const [jobs, setJobs] = useState<CelebriteName[]>([])
  const [itemsPerPage, setItemsPerPage] = useState(15) // Estado para rastrear a quantidade de itens por página
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const router = useRouter()
  const id = router.query.id as string

  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    if (swiperRef.current) {
      const newPage =
        Math.floor((swiperRef.current.realIndex || 0) / itemsPerPage) + 1
      setCurrentPage(newPage)
    }
  }, [swiperRef.current?.realIndex, itemsPerPage, jobs])

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update()
        const slidesPerView = swiperRef.current.params.slidesPerView as number
        const rows = swiperRef.current.params.grid?.rows || 1
        setItemsPerPage(slidesPerView * rows)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

  useEffect(() => {
    if (swiperRef.current) {
      const slidesPerView = swiperRef.current.params.slidesPerView as number
      const rows = swiperRef.current.params.grid?.rows || 1
      setItemsPerPage(slidesPerView * rows)
    }
  }, [jobs])

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
            slidesPerView={3}
            grid={{
              rows: 5,
              fill: 'row',
            }}
            spaceBetween={12}
            modules={[Grid, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            breakpoints={{
              468: {
                slidesPerView: 1,
                grid: {
                  rows: 3,
                },
              },
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
              768: {
                slidesPerView: 2,
                grid: {
                  rows: 5,
                },
              },
              1250: {
                slidesPerView: 2,
                grid: {
                  rows: 5,
                },
              },
              1500: {
                slidesPerView: 3,
                grid: {
                  rows: 5,
                },
              },
            }}
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
            {currentPage} de{' '}
            {Math.ceil(jobs[0].knownFor.edges.length / itemsPerPage)} Páginas
          </span>
          <PaginationButtons
            onPrev={prevSlide}
            onNext={nextSlide}
            isBeginning={isBeginning}
            isEnd={isEnd}
          />
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
