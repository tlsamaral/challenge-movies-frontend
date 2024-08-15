import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa' // Importar o ícone para a rotação
import { MoreInfo } from '../FeaturedMovie/style'
import Tag from '../Tag/Tag'
import {
  CheckTagContainer,
  CheckTagInput,
  CheckTagLabel,
  ConfigCardContainer,
  Content,
  InputContainer,
  InputDate,
  Label,
  Separator,
  TextMoreInfo,
  Title,
} from './style'

const genres = [
  'Ficção Científica',
  'Ação',
  'Aventura',
  'Comédia',
  'Terror',
  'Romance',
  'Drama',
]

interface ConfigCardProps {
  setCount: Dispatch<SetStateAction<number>>
}

export default function ConfigCard({ setCount }: ConfigCardProps) {
  const [selectedsGenre, setSelectedsGenre] = useState<string[]>([])
  const [showMore, setShowMore] = useState(false) // Estado para controlar a exibição do conteúdo adicional

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target
    setSelectedsGenre((prevGenres) => {
      let newGenres: string[]
      if (checked) {
        newGenres = [...prevGenres, value]
      } else {
        newGenres = prevGenres.filter((g) => g !== value)
      }

      setCount(newGenres.length)
      return newGenres
    })
  }

  const toggleShowMore = () => {
    setShowMore((prev) => !prev)
  }

  return (
    <ConfigCardContainer
      inputContainerIsVisible={showMore}
      countGenre={selectedsGenre.length}
    >
      <Content>
        <Title>Gêneros cinematográficos</Title>
        <CheckTagContainer>
          {genres.map((genre) => (
            <CheckTagLabel key={genre}>
              <CheckTagInput
                type="checkbox"
                value={genre}
                onChange={handleCheckbox}
              />
              <Tag text={genre} />
            </CheckTagLabel>
          ))}
        </CheckTagContainer>
        <TextMoreInfo onClick={toggleShowMore}>
          Mostrar mais{' '}
          {showMore ? (
            <FaChevronUp
              color="#6E6E6E"
              style={{ transition: 'transform 0.3s ease' }}
            />
          ) : (
            <FaChevronDown
              color="#6E6E6E"
              style={{ transition: 'transform 0.3s ease' }}
            />
          )}
        </TextMoreInfo>
      </Content>
      <Separator />
      <InputContainer isVisible={showMore}>
        <InputDate type="date" />
        <small>a</small>
        <InputDate type="date" />
      </InputContainer>
    </ConfigCardContainer>
  )
}
