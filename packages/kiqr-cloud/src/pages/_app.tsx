import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AppShell } from '@kiqr/irelia'
import { Logo, Sidebar, Toolbar } from '../components'
import { KiqrProvider } from '../components/KiqrProvider'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { query } = router

  const sidebarOpen = Boolean(query?.projectId) && Boolean(query?.environmentId)

  return (
    <KiqrProvider redirectUri="http://localhost:8000">
      <Toaster />
      <AppShell
        logo={<Logo />}
        toolbar={<Toolbar />}
        sidebar={<Sidebar />}
        sidebarOpen={sidebarOpen}
      >
        <Component {...pageProps} />
      </AppShell>
    </KiqrProvider>
  )
}
