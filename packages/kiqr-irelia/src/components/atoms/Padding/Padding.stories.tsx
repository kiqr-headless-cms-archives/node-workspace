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
  <Box>
    <Padding {...args}>
      This box has {args.size === 0 ? 'no' : null} padding
    </Padding>
  </Box>
)

export const Default = Template.bind({})
Default.args = {}
