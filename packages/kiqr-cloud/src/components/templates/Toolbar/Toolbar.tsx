import React from 'react'
import { Avatar, Button, Group } from '@kiqr/irelia'
import { FaBook, FaTerminal, FaSignOutAlt } from 'react-icons/fa'
import { useSession } from '../../../hooks'

const Separator = () => {
  return <div className="h-10 w-[1px] bg-neutral-100"></div>
}

export const Toolbar = () => {
  const { user, userError } = useSession()

  return (
    <>
      <Group gap={4}>
        <Avatar
          src={'https://avatars.dicebear.com/api/initials/foobar+zoo.svg'}
        />
        <Group direction="vertical" gap={0}>
          <strong>Foobar zoo</strong>
          <span className="text-xs">Development</span>
        </Group>
      </Group>
      <Group className="ml-auto">
        <Button icon={<FaBook />} size="xs">
          DOCS
        </Button>
        <Button icon={<FaTerminal />} size="xs">
          CLI
        </Button>

        {user ? (
          <>
            <Separator />
            <Group gap={4}>
              <Avatar
                src={
                  'https://avatars.dicebear.com/api/avataaars/david+specimen3.svg'
                }
              />
              <Group direction="vertical" gap={0}>
                <strong>David Specimen</strong>
                <span className="topbar-separator">
                  david.specimen@mail.com
                </span>
              </Group>
            </Group>
            <Separator />
          </>
        ) : null}

        <Button icon={<FaSignOutAlt />} size="xs" />
      </Group>
    </>
  )
}
