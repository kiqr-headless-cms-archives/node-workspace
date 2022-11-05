import React, { FC, ReactNode } from 'react'

export interface AppShellProps {
  children?: ReactNode
  logo?: ReactNode
  toolbar?: ReactNode
  sidebar?: ReactNode
  sidebarOpen?: boolean
  footer?: ReactNode
}

export const AppShell: FC<AppShellProps> = ({
  children,
  logo,
  toolbar,
  sidebar,
  sidebarOpen = true,
  footer,
}) => {
  return (
    <section className="flex flex-col items-stretch min-h-screen text-neutral-500">
      {toolbar || logo ? (
        <nav className="h-16 flex items-center bg-white text-sm border-b">
          <aside className="flex items-center justify-center h-full w-56 border-r">
            {logo}
          </aside>
          <section className="flex items-center flex-1 px-5 gap-x-5 text-sm">
            {toolbar}
          </section>
        </nav>
      ) : null}

      <section className="flex flex-1">
        {sidebar && sidebarOpen ? (
          <aside id="sidebar" className="w-56 border-r bg-white text-sm">
            {sidebar}
          </aside>
        ) : null}
        <main className="flex pb-20 flex-col flex-1 p-5 gap-y-5 relative">
          {children}
          {footer}
        </main>
      </section>
    </section>
  )
}
