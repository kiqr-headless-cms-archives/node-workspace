import React from 'react'
import type { CardProps } from './types'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Card as Card } from '.'

export default {
  title: 'Atoms/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = ({
  title,
  subtitle,
  avatarUrl
}: CardProps) => {
  return (
    <div className="w-72">
      <Card title={title} subtitle={subtitle} avatarUrl={avatarUrl} />
    </div>
  )
}

export const card = Template.bind({})
card.args = {
  title: 'Lorem ipsum',
  subtitle: 'Dolor sit amet'
}

export const loading = Template.bind({})
loading.args = {}

export const withAvatar = Template.bind({})
withAvatar.args = {
  title: 'Lorem ipsum',
  subtitle: 'Dolor sit amet',
  avatarUrl: 'https://avatars.dicebear.com/api/big-ears/123.svg'
}
