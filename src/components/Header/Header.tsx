import type {
  MoviesFiltered,
  MoviesFilteredResponse,
} from '@/types/movie-filtered'
import axios from 'axios'
import Image from 'next/image'
import { type ChangeEvent, useContext, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
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
import { AppContext } from '@/context/AppContext'
import { MovieInfo } from '@/types/movies'

function Header() {
  const { getMoviesBySearch, movies } = useContext(AppContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [moviesFiltered, setMoviesFiltered] = useState<MovieInfo[]>([])

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => movie.node.titleText.text.includes(search))
    setMoviesFiltered(filteredMovies)
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
        <ModalOverlay $isOpen={modalIsOpen}>
          <ContentOverlay>
            <TextResult>Resultados</TextResult>
            <SearchCardWrapper>
              {moviesFiltered?.length <= 0 && <Text>Carregando filmes..</Text>}
              {moviesFiltered?.map((movie) => (
                <SearchCard key={movie.node.id} movie={movie} />
              ))}
            </SearchCardWrapper>
          </ContentOverlay>
        </ModalOverlay>
      </SectionCenter>
    </HeaderContainer>
  )
}

export default Header
