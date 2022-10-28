import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Padding, PaddingProps } from './Padding'

import { Box } from '../Box'

const meta: Meta = {
  title: 'Atoms/Padding',
  component: Padding,
  argTypes: {
    size: {
      control: { type: 'range', min: 0, max: 5 },
      defaultValue: 5,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PaddingProps> = (args) => (
  <div className="flex flex-col gap-y-5">
    <Box p={0}>No padding</Box>
    <Box p={0}>
      <Padding>Padding</Padding>
    </Box>
  </div>
)

export const Default = Template.bind({})
Default.args = {}
