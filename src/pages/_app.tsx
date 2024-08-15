import type { AppProps } from 'next/app'
import '../styles/index.css'
import { AppProvider } from '@/context/AppContext'
import Loading from '@/components/Loading/Loading'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Loading />
    </AppProvider>
  )
}
