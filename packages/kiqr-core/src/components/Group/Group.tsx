import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface GroupProps {
  children: ReactNode
  direction?: string
}

export const Group = ({children, direction = 'horizontal'}: GroupProps) => {

  const defaultClasses = 'flex gap-5'
  const variantClasses = {
    'flex-row': direction === 'horizontal items-center',
    'flex-col': direction === 'vertical'
  }

  const className = classNames(defaultClasses, variantClasses)

  return <div className={className}>{children}</div>
}
