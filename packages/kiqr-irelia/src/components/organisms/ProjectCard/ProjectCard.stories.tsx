import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ProjectCard, ProjectCardProps } from './ProjectCard'

const meta: Meta = {
  title: 'Organisms/ProjectCard',
  component: ProjectCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />

export const Default = Template.bind({})
Default.args = {
  project: {
    name: 'Foobar zoo',
  },
}
