import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface PaddingProps {
  children?: ReactNode
  size?: number
}

export const Padding = ({children, size = 5}: PaddingProps) => {
  const sizeClasses = {
    'p-1': size === 1,
    'p-2': size === 2,
    'p-3': size === 3,
    'p-4': size === 4,
    'p-5': size === 5
  }
  
  const className = classNames(sizeClasses)

  return <div className={className}>{children}</div>
}
