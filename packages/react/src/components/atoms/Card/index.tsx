import React from 'react'
import type { CardProps, HeaderProps } from './types'

import { Avatar } from '../Avatar'
import { Padding } from '../Padding'
import { Placeholder } from '../Placeholder'

export const Card = ({ title, subtitle, children, avatarUrl }: CardProps) => {
  return (
    <div className="bg-white border rounded border-slate-200 overflow-hidden hover:shadow">
      <Padding>
        <div className="flex flex-col gap-y-5">
          {avatarUrl ? <Avatar src={avatarUrl} type="square" /> : null}
          <Header title={title} subtitle={subtitle} />
        </div>
      </Padding>
      {children}
    </div>
  )
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-y-0.5">
      <h3 className="text-primary-700 font-bold">{title || <Placeholder />}</h3>
      <p className="text-xs text-slate-400">{subtitle || <Placeholder />}</p>
    </header>
  )
}
