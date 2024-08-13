import {
  ContainerTitle,
  Content,
  Picture,
  SearchCardContainer,
  Text,
  Title,
} from './style'

function SearchCard() {
  return (
    <SearchCardContainer>
      <Picture src="/main-banner.png">teste</Picture>
      <Content>
        <ContainerTitle>
          <Title>Titulo</Title>
        </ContainerTitle>
        <Text>teste</Text>
        <Text>teste</Text>
      </Content>
    </SearchCardContainer>
  )
}

export default SearchCard
