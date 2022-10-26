import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Card, CardProps } from './Card'

import { Box } from '../Box'

const meta: Meta = {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    title: { defaultValue: 'Lorem ipsum' },
    subtitle: { defaultValue: 'Dolor sit amet' },
    avatarUrl: {
      defaultValue:
        'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<CardProps> = (args) => (
  <Card {...args}>Lorem ipsum dolor sit amet.</Card>
)

export const Default = Template.bind({})
Default.args = {}
