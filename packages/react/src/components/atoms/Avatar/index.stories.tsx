import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '.'
import type { AvatarProps } from './types'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {}
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = ({
  src,
  type
}: AvatarProps) => {
  return <Avatar type={type} src={src} />
}

export const circle = Template.bind({})
circle.args = {
  src: 'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
  type: 'circle'
}

export const square = Template.bind({})
square.args = {
  src: 'https://avatars.dicebear.com/api/adventurer-neutral/llool.svg',
  type: 'square'
}
