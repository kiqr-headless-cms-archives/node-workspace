import { FaBook, FaSignOutAlt, FaTerminal } from 'react-icons/fa'

import { useSession } from '@kiqr/cloud-sdk'
import { Avatar, Button, Group } from '@kiqr/irelia'

import Link from 'next/link'

import { Logo } from '../components'
import { useCurrent } from '../hooks'

export const Topbar = () => {
  const { currentEnvironment, currentProject } = useCurrent()
  const { user } = useSession()

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
        {currentProject ? (
          <Group gap={4}>
            <Avatar
              src={`https://avatars.dicebear.com/api/initials/${currentProject.name}.svg`}
            />
            <Group direction="vertical" gap={0}>
              <strong>{currentProject.name}</strong>
              {currentEnvironment ? (
                <span className="topbar-separator">
                  {currentEnvironment.name}
                </span>
              ) : null}
            </Group>
          </Group>
        ) : null}
        <Group className="ml-auto">
          <Button icon={<FaBook />} size="xs">
            DOCS
          </Button>
          <Button icon={<FaTerminal />} size="xs">
            CLI
          </Button>
          <div className="h-10 w-[1px] bg-neutral-100"></div>
          {user ? (
            <Group gap={4}>
              <Avatar
                src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
              />
              <Group direction="vertical" gap={0}>
                <strong>{user.name}</strong>
                <span className="topbar-separator">{user.email}</span>
              </Group>
            </Group>
          ) : null}
          <div className="h-10 w-[1px] bg-neutral-100"></div>
          <Button icon={<FaSignOutAlt />} size="xs" />
        </Group>
      </section>
    </nav>
  )
}
