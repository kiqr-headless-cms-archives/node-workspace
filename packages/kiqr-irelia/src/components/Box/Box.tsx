import classNames from 'classnames'
import React, { ReactNode } from 'react'

import { Padding } from '../Padding'

export interface BoxProps {
  children: ReactNode
  className?: string
  p?: number
}

export const Box = ({ children, className, p }: BoxProps) => {
  const defaultClasses = 'bg-white border rounded border-slate-200 overflow-hidden'
  const variantClasses = {}
  
  const classnames = classNames(defaultClasses, variantClasses, className)

  return (
    <div className={classnames}>
      <Padding size={p}>
        {children}
      </Padding>
    </div>
  )
}
