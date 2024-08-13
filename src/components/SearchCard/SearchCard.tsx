import type { MoviesFiltered } from '@/types/movie-filtered'
import {
  ContainerTitle,
  Content,
  Picture,
  SearchCardContainer,
  Text,
  Title,
} from './style'

interface SearchCardProps {
  movie: MoviesFiltered
}

function SearchCard({ movie }: SearchCardProps) {
  return (
    <SearchCardContainer>
      <Picture src={movie.i?.imageUrl ?? ''} />
      <Content>
        <ContainerTitle>
          <Title>{movie.l}</Title>
        </ContainerTitle>
        <Text>{movie.s}</Text>
        <Text>{movie.y}</Text>
      </Content>
    </SearchCardContainer>
  )
}

export default SearchCard
