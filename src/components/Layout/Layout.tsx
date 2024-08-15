import { ContainerApp } from '@/styles'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <ContainerApp>
      <Header />
      {children}
      <Footer />
    </ContainerApp>
  )
}

export default Layout
