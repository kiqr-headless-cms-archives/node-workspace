import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '.'

export default {
  title: 'Atoms/Box',
  component: Box
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = () => {
  return <Box>Lorem ipsum dolor sit amet</Box>
}

export const box = Template.bind({})
box.args = {}
