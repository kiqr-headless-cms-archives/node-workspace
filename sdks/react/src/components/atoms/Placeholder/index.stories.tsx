import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Placeholder as Placeholder } from '.'

export default {
  title: 'Atoms/Placeholder',
  component: Placeholder
} as ComponentMeta<typeof Placeholder>

export const placeholder = () => <Placeholder />
export const small = () => <Placeholder size="small" />
export const combined = () => (
  <div className="flex flex-col w-72 gap-y-1">
    <Placeholder />
    <Placeholder size="small" />
  </div>
)
