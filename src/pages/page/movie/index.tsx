import Button from '@/components/Button/Button'
import CastCrew from '@/components/CastCrew/CastCrew'
import {
  Description,
  InfoSection,
  MoreInfo,
  Rating,
} from '@/components/FeaturedMovie/style'
import Tag from '@/components/Tag/Tag'
import { useSearchParams } from 'next/navigation'
import { FaPlay, FaStar } from 'react-icons/fa'
import {
  AtrativeInfo,
  Banner,
  CastCrewContent,
  Content,
  InfoContent,
  MoviePageContainer,
  TagWrapper,
  Title,
} from '../../../styles/pages/movie'

export default function MoviePage() {
  const searchParams = useSearchParams()

  const movieId = searchParams.get('movie_id')
  return (
    <MoviePageContainer>
      <Banner $bannerImg="/main-banner.png">
        <Button>
          Assistir ao Trailer <FaPlay color="#fff" />
        </Button>
      </Banner>
      <TagWrapper>
        {Array.from({ length: 6 }).map((tag, i) => (
          <Tag key={i} text="Comédia de amigos" />
        ))}
      </TagWrapper>
      <Content>
        <InfoContent>
          <AtrativeInfo>
            <Title>Titulo do filme</Title>
            <Rating>
              <FaStar color="#F0E635" size={16} />
              <span>9,4</span>
              <small>| 120 mil</small>
            </Rating>
          </AtrativeInfo>
          <InfoSection>
            <MoreInfo>
              <li>2h 8m</li>
              <li>18</li>
              <li>2024</li>
            </MoreInfo>
          </InfoSection>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio
            consectetur harum impedit ipsa explicabo amet dolorem praesentium
            non nulla cumque consequuntur a alias tempore vero mollitia, sint
            nihil quo.
          </Description>
        </InfoContent>
        <CastCrewContent>
          {Array.from({ length: 3 }).map((item, i) => (
            <CastCrew
              key={i}
              title="Elenco"
              content="Talles Amaral, João Olivares, Nicolas Rodrigues"
            />
          ))}
        </CastCrewContent>
      </Content>
    </MoviePageContainer>
  )
}
