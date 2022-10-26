import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Announcement, AnnouncementProps } from './Announcement'
import { Button } from '../../atoms/Button'

const meta: Meta = {
  title: 'Molecules/Announcement',
  component: Announcement,
  argTypes: {
    title: { defaultValue: 'Get started now by creating your first page.' },
    paragraph: {
      defaultValue:
        'We couldn not find any pages in the database. Get started now by creating a new page or import a collection of pages',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AnnouncementProps> = (args) => <Announcement {...args} />

const ButtonComponent = () => {
  return (
    <Button variant="primary" size="lg">
      {'Create page'}
    </Button>
  )
}
export const Default = Template.bind({})
Default.args = {
  button: <ButtonComponent />,
  image: (
    <img
      src="https://avatars.dicebear.com/api/avataaars/lol.svg"
      width="400"
      height="400"
      alt=""
    />
  ),
}
