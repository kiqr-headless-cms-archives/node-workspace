import React from 'react'
import classNames from 'classnames'

import type { AvatarStackProps } from './types'

export const AvatarStack = ({ children, spacing = 0 }: AvatarStackProps) => {
  const className = classNames('flex', {
    'space-x-1': spacing === 1,
    'space-x-2': spacing === 2,
    'space-x-3': spacing === 3,
    'space-x-4': spacing === 4,
    'space-x-5': spacing === 5,
    '-space-x-1': spacing === -1,
    '-space-x-2': spacing === -2,
    '-space-x-3': spacing === -3
  })
  return (
    <div className={className}>
      {children}
      <span className="cursor-pointer text-primary-700 bg-neutral-200 transition hover:text-white hover:bg-primary-700 font-bold flex items-center justify-center text-xs border-white border-2 shadow rounded-full w-9 h-9">
        +3
      </span>
    </div>
  )
}
