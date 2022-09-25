import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading as HeadingComponent } from '.'

import type { HeadingProps } from './types'

export default {
  title: 'Atoms/Heading',
  component: HeadingComponent,
  argTypes: {
    subtitle: {
      options: ['dashboard', 'terminal', 'book']
    }
  }
} as ComponentMeta<typeof HeadingComponent>

const Template: ComponentStory<typeof HeadingComponent> = ({
  title,
  subtitle
}: HeadingProps) => {
  return <HeadingComponent title={title} subtitle={subtitle} />
}

export const Heading = Template.bind({})
Heading.args = {
  title: 'Lorem ipsum',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing?'
}
