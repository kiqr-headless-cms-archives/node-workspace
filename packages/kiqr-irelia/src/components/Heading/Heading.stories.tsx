import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Heading, HeadingProps} from './Heading'

const meta: Meta = {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    title: { defaultValue: 'Lorem ipsum dolor sit amet' },
    subtitle: { defaultValue: 'The subtitle should describe whats on this page.' },
    variant: { control: { type: 'select', options: ['page', 'box'] }, defaultValue: 'page' }
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<HeadingProps> = args => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {}

export const BoxVariant = Template.bind({})
BoxVariant.args = { variant: 'box' }