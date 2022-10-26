import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AppShell } from '@kiqr/irelia'
import { Logo, Sidebar, Toolbar } from '../components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell logo={<Logo />} toolbar={<Toolbar />} sidebar={<Sidebar />}>
      <Component {...pageProps} />
    </AppShell>
  )
}
