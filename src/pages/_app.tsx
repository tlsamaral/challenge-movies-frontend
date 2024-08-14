import type { AppProps } from 'next/app'
import '../styles/index.css'
import { AppProvider } from '@/context/AppContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
