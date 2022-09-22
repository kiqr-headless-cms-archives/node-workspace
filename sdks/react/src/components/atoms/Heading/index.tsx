import React from 'react'
import { ReactElement } from 'react'

import { Placeholder } from '../Placeholder'

export interface PageHeaderProps {
  title?: string
  subtitle?: string
}

export const Heading = ({ title, subtitle }: PageHeaderProps): ReactElement => {
  return (
    <header className="flex flex-col gap-y-1 mb-5">
      <h1 className="text-xl font-bold text-primary-700">
        {title || <Placeholder />}
      </h1>
      <p className="text-slate-400 text-sm">{subtitle || <Placeholder />}</p>
    </header>
  )
}
