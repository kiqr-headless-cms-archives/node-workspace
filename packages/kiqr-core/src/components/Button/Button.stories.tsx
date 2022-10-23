import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Button, ButtonProps} from './Button'

import {FaBeer} from 'react-icons/fa'

const meta: Meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'danger'],
      control: {type: 'select'},
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      defaultValue: 'md',
      control: {type: 'select'},
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {children: 'This is a button'}

export const Primary = Template.bind({})
Primary.args = {children: 'Primary variant', variant: 'primary'}

export const Danger = Template.bind({})
Danger.args = {children: 'Danger variant', variant: 'danger'}

export const withIcon = Template.bind({})
withIcon.args = {children: 'Order a beer', icon: <FaBeer />}

export const large = Template.bind({})
large.args = {children: 'Large button', size: 'lg'}

export const medium = Template.bind({})
medium.args = {children: 'Medium button', size: 'md'}

export const small = Template.bind({})
small.args = {children: 'Small button', size: 'sm'}

export const tiny = Template.bind({})
tiny.args = {children: 'Tiny button', size: 'xs'}
