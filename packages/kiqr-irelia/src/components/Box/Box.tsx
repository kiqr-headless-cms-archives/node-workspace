import classNames from 'classnames'
import React, { ReactNode } from 'react'

import { Padding } from '../Padding'

export interface BoxProps {
  children: ReactNode
  p?: number
}

export const Box = ({ children, p }: BoxProps) => {
  const defaultClasses = 'bg-white border rounded border-slate-200 overflow-hidden'
  const variantClasses = {}
  
  const className = classNames(defaultClasses, variantClasses)

  return (
    <div className={className}>
      <Padding size={p}>
        {children}
      </Padding>
    </div>
  )
}
