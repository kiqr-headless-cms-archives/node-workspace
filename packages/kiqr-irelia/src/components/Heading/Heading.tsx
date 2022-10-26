import React from 'react'
import { ReactElement } from 'react'

export interface HeadingProps {
  title?: string
  subtitle?: string
  variant?: 'page' | 'box'
  children?: JSX.Element
}

export const Heading = ({ children, title, subtitle, variant }: HeadingProps): ReactElement => {
  // box
  if (variant === 'box') {
    return (
      <header className="flex flex-col">
        <h3 className="text-primary-700 font-bold">{title}</h3>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </header>
    )
  }

  // page
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-y-1">
        <h1 className="text-xl font-bold text-primary-700">
          {title}
        </h1>
        <p className="text-slate-400 text-sm">{subtitle}</p>
      </div>
      <div className="flex gap-x-5">
        {children}
      </div>
    </header>
  )
}
