import React from 'react'
import {Meta, Story} from '@storybook/react'
import {LocalTime, LocalTimeProps} from './LocalTime'

const meta: Meta = {
  title: 'Atoms/LocalTime',
  component: LocalTime,
  argTypes: {
    locale: {
      options: ['en', 'fr', 'sv', 'nb', 'fi'],
      control: {type: 'select'},
    },
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<LocalTimeProps> = args => {
  function getTimestampInSeconds () {
    return Math.floor(Date.now() / 1000)
  }

  return <LocalTime {...args} epochTime={getTimestampInSeconds() - 120}  />
}

export const Default = Template.bind({})
Default.args = { }