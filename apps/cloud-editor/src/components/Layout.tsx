import { ReactElement } from 'react'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <section className="flex flex-col items-stretch min-h-screen">
      <Topbar />
      <section className="flex flex-1">
        <Sidebar />
        <main className="flex flex-col flex-1 p-5 gap-y-5">{children}</main>
      </section>
    </section>
  )
}
