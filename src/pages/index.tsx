import CarouselMovies from './components/CarouselMovies/CarouselMovies'
import FirstComponent from './components/FirstComponent/FirstComponent'
import Header from './components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <FirstComponent />
      <CarouselMovies title="Ultímos Lançamentos" />
      <CarouselMovies title="Recomendados" />
    </>
  )
}
