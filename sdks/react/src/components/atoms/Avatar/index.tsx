import React from 'react'
import classNames from 'classnames'

import type { AvatarProps } from './types'

export const Avatar = ({ src, type = 'circle' }: AvatarProps) => {
  const className = classNames({
    'bg-neutral-200 outline-0 border-0 rounded w-9 h-9': type === 'square',
    'bg-neutral-200 border-white border-2 shadow rounded-full w-9 h-9 hover:z-50':
      type === 'circle'
  })
  return <img className={className} src={src} alt="Avatar" />
}
