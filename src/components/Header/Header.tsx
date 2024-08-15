import Image from 'next/image'

import { type ChangeEvent, useContext, useEffect, useState } from 'react'

import { AppContext } from '@/context/AppContext'
import type { MovieInfo } from '@/types/movies'
import { FiSearch } from 'react-icons/fi'
import { LuSlidersHorizontal } from 'react-icons/lu'
import ConfigCard from '../ConfigCard/ConfigCard'
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
  const [countGenre, setCountGenre] = useState(0)
  const { getMoviesBySearch, movies } = useContext(AppContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [setupCard, setSetupCard] = useState(false)
  const [search, setSearch] = useState('')

  const [moviesFiltered, setMoviesFiltered] = useState<MovieInfo[]>([])

  useEffect(() => {
    const filteredMovies = movies.filter((movie) =>
      movie.node.titleText.text.includes(search),
    )
    setMoviesFiltered(filteredMovies)
  }, [search])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    setModalIsOpen(value !== '')
  }

  const handleSetup = () => {
    setSetupCard((prev) => !prev)
    setModalIsOpen((prev) => !prev)
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
            onBlur={() => setModalIsOpen(false)}
          />
        </InputContainer>
        <ConfigSettingIcon countGenre={countGenre} onClick={handleSetup}>
          <LuSlidersHorizontal color="#fff" size={18} />
        </ConfigSettingIcon>
        <ModalOverlay $isOpen={modalIsOpen}>
          <ContentOverlay>
            {setupCard ? (
              <>
                <ConfigCard setCount={setCountGenre} />
              </>
            ) : (
              <>
                <TextResult>Resultados</TextResult>
                <SearchCardWrapper>
                  {moviesFiltered.length === 0 ? (
                    <Text>Carregando filmes...</Text>
                  ) : (
                    moviesFiltered.map((movie) => (
                      <SearchCard key={movie.node.id} movie={movie} />
                    ))
                  )}
                </SearchCardWrapper>
              </>
            )}
          </ContentOverlay>
        </ModalOverlay>
      </SectionCenter>
    </HeaderContainer>
  )
}
