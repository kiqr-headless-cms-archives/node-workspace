import Link from 'next/link'
import { ReactElement } from 'react'
import { FaGithub } from 'react-icons/fa'
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
        <main className="flex pb-20 flex-col flex-1 p-5 gap-y-5 relative">
          {children}
          <section className="px-5 h-20 items-center justify-center absolute bottom-0 left-0 right-0 flex flex-col text-xs text-neutral-400">
            <span>
              Copyright &copy; WK Operations Ltd 2022 - All rights reserved.
            </span>
            <span className="flex items-center gap-x-1">
              This is an open-source project. Explore and contribute to the
              project on{' '}
              <Link href="https://github.com/kiqr/node-workspace">
                <a className="flex items-center gap-x-1 font-bold">
                  <FaGithub /> Github.
                </a>
              </Link>
            </span>
          </section>
        </main>
      </section>
    </section>
  )
}
