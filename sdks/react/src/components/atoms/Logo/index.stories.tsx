import React from 'react'
import { ComponentMeta } from '@storybook/react'

import { Logo as LogoComponent } from '.'

export default {
  title: 'Atoms/Logo',
  component: LogoComponent
} as ComponentMeta<typeof LogoComponent>

export const Logo = () => <LogoComponent />
