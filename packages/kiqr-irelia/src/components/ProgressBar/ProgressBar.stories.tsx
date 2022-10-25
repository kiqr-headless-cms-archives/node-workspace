import React from 'react'
import {Meta, Story} from '@storybook/react'
import {ProgressBar, ProgressBarProps} from './ProgressBar'

const meta: Meta = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  argTypes: {
    title: { defaultValue: 'Loading something' },
    startText: { defaultValue: 'Not started' },
    completedText: { defaultValue: 'Completed' },
    percentage: { control: { type: 'range', min: 0, max: 100 }, defaultValue: 25 }
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<ProgressBarProps> = args => <div className="w-56"><ProgressBar {...args} /></div>

export const Default = Template.bind({})
Default.args = {}