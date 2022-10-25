import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box, BoxProps} from './Box'

const meta: Meta = {
  title: 'Atoms/Box',
  component: Box,
  argTypes: {
    p: {
      control: {type: 'range', min: 0, max: 5},
      defaultValue: 5
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<BoxProps> = args => (
  <Box {...args}>
    <>This is a box</>
  </Box>
)

export const Default = Template.bind({})
Default.args = {}