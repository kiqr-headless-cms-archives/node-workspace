import { Dropdown, Logo } from '@kiqr/react-components'
import { Button } from '@kiqr/core'

import { useSession } from '@kiqr/react-hooks'

import { ReactElement } from 'react'
import { FaBook, FaSignOutAlt, FaTerminal } from 'react-icons/fa'

import Link from 'next/link'
import { ProjectDropdown } from '.'
import { useCurrent } from '../hooks'

const UserDropdown = (): ReactElement => {
  const { user } = useSession()

  if (!user) return <Dropdown />

  return (
    <Dropdown
      line1={user.name}
      line2={user.email}
      avatarUrl={user.avatar_url}
    />
  )
}

export const Topbar = () => {
  const { projects, currentEnvironment, currentProject } = useCurrent()

  return (
    <nav className="h-16 flex items-center bg-white text-sm border-b">
      <aside className="w-56">
        <Link href="/">
          <a className="flex h-16 justify-center border-r">
            <Logo />
          </a>
        </Link>
      </aside>
      <section className="flex items-center flex-1 px-5 gap-x-5">
        <ProjectDropdown
          projects={projects}
          currentProject={currentProject}
          environment={currentEnvironment?.name}
        />
        <div className="flex items-center gap-x-5 ml-auto">
          <Button icon={<FaBook />} size="xs">
            DOCS
          </Button>
          <Button icon={<FaTerminal />} size="xs">
            CLI
          </Button>
          <div className="h-10 w-[1px] bg-neutral-100"></div>
          <UserDropdown />
          <div className="h-10 w-[1px] bg-neutral-100"></div>
          <Button icon={<FaSignOutAlt />} size="xs" />
        </div>
      </section>
    </nav>
  )
}
