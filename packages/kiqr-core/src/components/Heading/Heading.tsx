import React from 'react'
import { ReactElement } from 'react'

export interface HeadingProps {
  title?: string
  subtitle?: string
  children?: JSX.Element
}

export const Heading = ({ title, subtitle, children }: HeadingProps): ReactElement => {
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
