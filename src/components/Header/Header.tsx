import Image from 'next/image'
import { type ChangeEvent, useState } from 'react'
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
  TextResult,
} from './style'

function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [search, setSearch] = useState('')

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
              <SearchCard />
              <SearchCard />
              <SearchCard />
            </SearchCardWrapper>
          </ContentOverlay>
        </ModalOverlay>
      </SectionCenter>
      {/* <div /> */}
    </HeaderContainer>
  )
}

export default Header
