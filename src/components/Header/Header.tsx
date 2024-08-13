import type {
  MoviesFiltered,
  MoviesFilteredResponse,
} from '@/types/movie-filtered'
import axios from 'axios'
import { Span } from 'next/dist/trace'
import Image from 'next/image'
import { type ChangeEvent, useEffect, useState } from 'react'
import { FiSearch, FiSettings } from 'react-icons/fi'
import { LuSlidersHorizontal } from 'react-icons/lu'
import ContentOverlay from '../ContentOverlay/ContentOverlay'
import SearchCard from '../SearchCard/SearchCard'
import {
  ConfigSettingIcon,
  HeaderContainer,
  InputContainer,
  ModalOverlay,
  SearchCardWrapper,
  SectionCenter,
  Text,
  TextResult,
} from './style'

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [moviesFiltered, setMoviesFiltered] = useState<MoviesFiltered[]>([])

  useEffect(() => {
    const getData = async () => {
      const options = {
        method: 'GET',
        url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
        params: { q: search },
        headers: {
          'x-rapidapi-key':
            '575c925fb8mshca0b3947edf1ae3p1447e2jsn2c38e4393425',
          'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
        },
      }
      try {
        const response = await axios.request<MoviesFilteredResponse>(options)
        setMoviesFiltered(response.data.d)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [search])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setModalIsOpen(true)

    if (event.target.value === '') {
      setModalIsOpen(false)
    } else {
      setModalIsOpen(true)
    }
  }
  return (
    <HeaderContainer>
      <section>
        <Image src="/logo.png" alt="logo/png" width={128} height={35} />
      </section>
      <SectionCenter>
        <InputContainer>
          <div>
            <FiSearch color="#fff" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={handleInputChange}
            // onBlur={() => setModalIsOpen(false)}
          />
        </InputContainer>
        <ConfigSettingIcon>
          <LuSlidersHorizontal color="#fff" />
        </ConfigSettingIcon>
        <ModalOverlay isOpen={modalIsOpen}>
          <ContentOverlay>
            <TextResult>Resultados</TextResult>
            <SearchCardWrapper>
              {moviesFiltered?.length <= 0 && <Text>Carregando filmes..</Text>}
              {moviesFiltered?.map((movie) => (
                <SearchCard key={movie.id} movie={movie} />
              ))}
            </SearchCardWrapper>
          </ContentOverlay>
        </ModalOverlay>
      </SectionCenter>
    </HeaderContainer>
  )
}

export default Header
