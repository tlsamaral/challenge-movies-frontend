import { FaFire, FaPlay, FaStar } from 'react-icons/fa'
import BorderWithRadio from '../BorderWithRadio/BorderWithRadio'
import Button from '../Button/Button'
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import PreviewMovie from '../PreviewMovie/PreviewMovie'
import { InitialContainer, PreviewMovieWrapper, Title } from './style'
function FirstComponent() {
  return (
    <InitialContainer>
      <FeaturedMovie banner="/main-banner.png" />
      <PreviewMovieWrapper>
        <Title>
          <BorderWithRadio /> Destaques também
        </Title>
        {Array.from({ length: 3 }).map((movie, i) => (
          <PreviewMovie
            key={i}
            title="Titulo do filme"
            bannerImg="/main-banner.png"
          />
        ))}
      </PreviewMovieWrapper>
    </InitialContainer>
  )
}

export default FirstComponent
