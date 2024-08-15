import type { MoviesFiltered } from '@/types/movie-filtered'
import {
  ContainerTitle,
  Content,
  Picture,
  SearchCardContainer,
  Text,
  Title,
} from './style'
import { MovieInfo } from '@/types/movies'

interface SearchCardProps {
  movie: MovieInfo
}

function SearchCard({ movie }: SearchCardProps) {
  return (
    <SearchCardContainer>
      <Picture src={movie.node.primaryImage.url} />
      <Content>
        <ContainerTitle>
          <Title>{movie.node.titleText.text}</Title>
        </ContainerTitle>
        <Text>{movie.node.releaseYear.year}</Text>
        <Text>{movie.node.principalCredits[0].credits.map(c => c.name.nameText.text).join(', ')}</Text>
      </Content>
    </SearchCardContainer>
  )
}

export default SearchCard
