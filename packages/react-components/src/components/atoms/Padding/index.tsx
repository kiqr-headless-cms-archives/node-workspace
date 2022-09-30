import React from 'react'
import classNames from 'classnames'

import { PaddingProps } from './types'

export const Padding = ({ children, theme }: PaddingProps) => {
  const className = classNames('p-5', {
    'bg-neutral-50': theme === 'tinted' ? true : false
  })

  return <div className={className}>{children}</div>
}
