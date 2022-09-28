import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import type { DropdownProps, DropdownListProps } from './types'
import { Dropdown as DropdownComponent } from '.'

export default {
  title: 'Atoms/Dropdown',
  component: DropdownComponent,
  argTypes: {}
} as ComponentMeta<typeof DropdownComponent>

const Template: ComponentStory<typeof DropdownComponent> = ({
  avatarUrl,
  line1,
  line2,
  openByDefault = false
}: DropdownProps) => {
  return (
    <DropdownComponent
      avatarUrl={avatarUrl}
      line1={line1}
      line2={line2}
      openByDefault={openByDefault}
    />
  )
}

export const Dropdown = Template.bind({})
Dropdown.args = {
  avatarUrl: undefined,
  line1: 'Headline',
  line2: 'Lorem ipsum dolor sit amet'
}

export const Loading = Template.bind({})
Loading.args = {
  avatarUrl: undefined,
  line1: undefined,
  line2: undefined
}

export const ProjectDropdown = Template.bind({})
ProjectDropdown.args = {
  avatarUrl: 'https://avatars.dicebear.com/api/identicon/project+name.svg',
  line1: 'Facebook',
  line2: 'A social community',
  openByDefault: true
}

export const UserDropdown = Template.bind({})
UserDropdown.args = {
  avatarUrl: 'https://avatars.dicebear.com/api/big-ears/david+specimen.svg',
  line1: 'David Specimen',
  line2: 'david.specimen@mail.com'
}
