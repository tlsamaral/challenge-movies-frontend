import type { AppProps } from 'next/app'
import '../styles/index.css'
import Layout from '@/components/Layout/Layout'
import Loading from '@/components/Loading/Loading'
// import { AppProvider } from '@/context/AppContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Loading />
    </>
  )
}
