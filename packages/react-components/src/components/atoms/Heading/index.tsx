import React from 'react'
import { ReactElement } from 'react'

import { Placeholder } from '../Placeholder'

export interface PageHeaderProps {
  title?: string
  subtitle?: string
  children?: JSX.Element
}

export const Heading = ({ title, subtitle, children }: PageHeaderProps): ReactElement => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col gap-y-1">
        <h1 className="text-xl font-bold text-primary-700">
          {title || <Placeholder />}
        </h1>
        <p className="text-slate-400 text-sm">{subtitle || <Placeholder />}</p>
      </div>
      <div className="flex gap-x-5">
        {children}
      </div>
    </header>
  )
}
