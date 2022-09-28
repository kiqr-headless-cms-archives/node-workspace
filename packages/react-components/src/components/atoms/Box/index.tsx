import React from 'react'
import type { BoxProps } from './types'

export const Box = ({ children }: BoxProps) => {
  return (
    <div className="bg-white border rounded border-slate-200 overflow-hidden">
      {children}
    </div>
  )
}
