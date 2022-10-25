import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Group, GroupProps} from './Group'

import {Button} from '../Button'

const meta: Meta = {
  title: 'Atoms/Group',
  component: Group,
  argTypes: {
    direction: {
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      control: {type: 'select'},
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<GroupProps> = args => (
  <Group {...args}>
    <Button>1</Button>
    <Button variant="primary">2</Button>
    <Button>3</Button>
  </Group>
)

export const Default = Template.bind({})
Default.args = {}

export const Vertical = Template.bind({})
Vertical.args = { direction: 'vertical' }