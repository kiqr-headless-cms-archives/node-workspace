import React, { ReactNode } from 'react'

import { Avatar } from '../Avatar'
import { Box } from '../Box'
import { Group } from '../Group'

export interface CardProps {
  children?: ReactNode
  title: string
  subtitle: string
  avatarUrl?: string
}

export const Card = ({ title, subtitle, children, avatarUrl }: CardProps) => {
  return (
    <Box>
      <Group direction="vertical">
        <Group>{avatarUrl ? <Avatar src={avatarUrl} variant="square" /> : null}
        <header className="flex flex-col">
          <h3 className="text-primary-700 font-bold">{title}</h3>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </header>
        </Group>
        <div className="text-sm text-neutral-400">{children}</div>
      </Group>
    </Box>
  )
}
