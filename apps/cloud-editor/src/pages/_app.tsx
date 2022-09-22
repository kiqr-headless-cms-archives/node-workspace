import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { KiqrProvider } from '@kiqr/react'
import { Layout } from '../components'

function App({ Component, pageProps }: AppProps) {
  // const { push } = useRouter()
  const handleRedirectBack = (url: string) => {
    // @todo: push(url)
    console.log('redirect to', url)
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
