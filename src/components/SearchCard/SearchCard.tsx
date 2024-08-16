import type { MovieInfo } from '@/types/movies'

import {
  ContainerTitle,
  Content,
  Picture,
  SearchCardContainer,
  Text,
  Title,
} from './style'

interface SearchCardProps {
  movie: MovieInfo
  onClick: (id: string) => void
}

function SearchCard({ movie, onClick }: SearchCardProps) {
  return (
    <SearchCardContainer onClick={() => onClick(movie.node.id)}>
      <Picture src={movie.node.primaryImage.url} />
      <Content>
        <ContainerTitle>
          <Title>{movie.node.titleText.text}</Title>
        </ContainerTitle>
        <Text>{movie.node.releaseYear.year}</Text>
        <Text>
          {movie.node.principalCredits[0].credits
            .map((c) => c.name.nameText.text)
            .join(', ')}
        </Text>
      </Content>
    </SearchCardContainer>
  )
}

export default SearchCard
