import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface GroupProps {
  children: ReactNode
  direction?: string
  gap?: number
  spacing?: number
  className?: string
}

export const Group = ({children, direction = 'horizontal', gap = 5, spacing = 0, className}: GroupProps) => {
  const defaultClasses = 'flex'

  const variantClasses = {
    'flex-row items-center': direction === 'horizontal',
    'flex-col': direction === 'vertical'
  }

  const spacingClasses = {
    'gap-1': gap === 1,
    'gap-2': gap === 2,
    'gap-3': gap === 3,
    'gap-4': gap === 4,
    'gap-5': gap === 5,
    'space-x-1': spacing === 1,
    'space-x-2': spacing === 2,
    'space-x-3': spacing === 3,
    'space-x-4': spacing === 4,
    'space-x-5': spacing === 5,
    '-space-x-1': spacing === -1,
    '-space-x-2': spacing === -2,
    '-space-x-3': spacing === -3,
    '-space-x-4': spacing === -4,
    '-space-x-5': spacing === -5
  }

  const classnames = classNames(defaultClasses, variantClasses, spacingClasses, className)
  return <div className={classnames}>{children}</div>
}
