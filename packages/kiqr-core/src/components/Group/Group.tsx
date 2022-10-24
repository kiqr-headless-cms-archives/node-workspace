import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface GroupProps {
  children: ReactNode
  direction?: string
  spacing?: number
}

export const Group = ({children, direction = 'horizontal', spacing = 5}: GroupProps) => {
  const defaultClasses = 'flex'

  const variantClasses = {
    'flex-row': direction === 'horizontal items-center',
    'flex-col': direction === 'vertical'
  }

  const spacingClasses = {
    'space-x-1': spacing === 1,
    'space-x-2': spacing === 2,
    'space-x-3': spacing === 3,
    'space-x-4': spacing === 4,
    'space-x-5': spacing === 5,
    '-space-x-1': spacing === -1,
    '-space-x-2': spacing === -2,
    '-space-x-3': spacing === -3,
    '-space-x-4': spacing === -4
  }

  const className = classNames(defaultClasses, variantClasses, spacingClasses)

  return <div className={className}>{children}</div>
}
