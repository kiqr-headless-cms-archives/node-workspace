import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar } from '../../atoms/Avatar'
import { AvatarStack } from '.'
import type { AvatarStackProps } from './types'

export default {
  title: 'Molecules/AvatarStack',
  component: AvatarStack,
  argTypes: {
    spacing: { control: { type: 'range', min: -3, max: 5 } }
  }
} as ComponentMeta<typeof AvatarStack>

const Template: ComponentStory<typeof AvatarStack> = ({
  spacing
}: AvatarStackProps) => {
  return (
    <AvatarStack spacing={spacing}>
      <Avatar src="https://avatars.dicebear.com/api/adventurer-neutral/cs.svg" />
      <Avatar src="https://avatars.dicebear.com/api/adventurer-neutral/rk.svg" />
      <Avatar src="https://avatars.dicebear.com/api/adventurer-neutral/ts.svg" />
    </AvatarStack>
  )
}

export const avatarStack = Template.bind({})
avatarStack.args = {
  spacing: 0
}

export const tight = Template.bind({})
tight.args = {
  spacing: -3
}

export const wide = Template.bind({})
wide.args = {
  spacing: 5
}
