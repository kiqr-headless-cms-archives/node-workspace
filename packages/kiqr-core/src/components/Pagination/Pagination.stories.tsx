import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Pagination, PaginationProps} from './Pagination'
import {useArgs} from '@storybook/client-api'

const meta: Meta = {
  title: 'Atoms/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: { type: 'range', min: 0, max: 100 }, defaultValue: 4 },
    totalPages: { control: { type: 'range', min: 0, max: 100 }, defaultValue: 20 }
  },
  parameters: {
    controls: {expanded: true},
  },
}

export default meta

const Template: Story<PaginationProps> = args => {
  const [_, updateArgs] = useArgs();

  const callback = (pageNumber: number) => {
    // inside this function I am updating arguments, but you can call it anywhere according to your demand, the key solution here is using `useArgs()`
    // As you see I am updating list of options with new state here
    console.log('selected page', pageNumber)
    updateArgs({...args, currentPage: pageNumber})
  };

  return <Pagination {...args} callback={callback} />
}

export const Default = Template.bind({})
Default.args = {}