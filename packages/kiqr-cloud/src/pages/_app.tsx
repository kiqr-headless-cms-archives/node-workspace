import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AppShell } from '@kiqr/irelia'
import { Logo, Sidebar, Toolbar } from '../components'
import { KiqrProvider } from '../components/KiqrProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KiqrProvider redirectUri="http://localhost:8000">
      <AppShell
        logo={<Logo />}
        toolbar={<Toolbar />}
        sidebar={<Sidebar />}
        sidebarOpen={false}
      >
        <Component {...pageProps} />
      </AppShell>
    </KiqrProvider>
  )
}
