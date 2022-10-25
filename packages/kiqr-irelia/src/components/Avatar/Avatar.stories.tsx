import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Avatar, AvatarProps} from './Avatar'

const meta: Meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ['square', 'circle'],
      control: {type: 'select'},
      defaultValue: 'square'
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
  variant: 'square'
}

export const Circle = Template.bind({})
Circle.args = {
  src: 'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
  variant: 'circle'
}
