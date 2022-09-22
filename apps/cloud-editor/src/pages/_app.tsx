import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { KiqrProvider } from '@kiqr/react'
import { useRouter } from 'next/router'
import { Layout } from '../components'

function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter()
  const handleRedirectBack = (url: string) => {
    //push(url)
  }

  return (
    <KiqrProvider
      appRootUrl="http://localhost:8000"
      handleRedirectBack={handleRedirectBack}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </KiqrProvider>
  )
}

export default App
