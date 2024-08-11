import { FaFire, FaPlay, FaStar } from 'react-icons/fa'
import Button from '../Button/Button'
import {
  BannerTopOne,
  Description,
  InfoSection,
  Main,
  MainContent,
  MoreInfo,
  Rating,
  Title,
} from './style'

interface FeaturedMovieProps {
  banner?: string
}
function FeaturedMovie({ banner }: FeaturedMovieProps) {
  return (
    <BannerTopOne bannerImg={banner}>
      <Main>
        <MainContent>
          <Button>
            <FaFire color="#fff" />
            Em destaque{' '}
          </Button>
          <Title>Titulo do filme em destaque</Title>
          <InfoSection>
            <Rating>
              <FaStar color="#F0E635" size={16} />
              <span>8.2</span>
              <small>| 120 mil</small>
            </Rating>
            <MoreInfo>
              <li>2h 8m</li>
              <li>Comedy, Action, Adventure, Superhero...</li>
              <li>2024</li>
            </MoreInfo>
          </InfoSection>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusantium ut porro impedit sint consequuntur, labore delectus quae
            rem odit totam iure dolores incidunt cupiditate ratione ducimus
            ipsam perferendis dicta.
          </Description>
        </MainContent>
        <Button>
          Assistir ao Trailer <FaPlay color="#fff" />
        </Button>
      </Main>
    </BannerTopOne>
  )
}

export default FeaturedMovie
