import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Column, Row, Table, TableProps } from './Table'

import { Button } from '../Button'

const meta: Meta = {
  title: 'Atoms/Table',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <Row>
      <Column variant="th">Name</Column>
      <Column variant="th">Email</Column>
      <Column variant="th">Member since</Column>
    </Row>
    <Row>
      <Column>David Specimen</Column>
      <Column>david.specimen@mail.com</Column>
      <Column>2005-01-04</Column>
    </Row>
  </Table>
)

export const Default = Template.bind({})
Default.args = {}

export const WithHeading = Template.bind({})
WithHeading.args = {
  title: 'Lorem ipsum',
  subtitle: 'This subtitle could describe whats listed below',
}

export const WithTitleOnly = Template.bind({})
WithTitleOnly.args = { title: 'Lorem ipsum' }
