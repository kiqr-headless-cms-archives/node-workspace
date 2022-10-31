import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ResourcesTable, ResourcesTableProps } from './ResourcesTable'
import type { ContentType, Resource } from '@kiqr/management-api-sdk'

const meta: Meta = {
  title: 'Organisms/ResourcesTable',
  component: ResourcesTable,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ResourcesTableProps> = (args) => (
  <ResourcesTable {...args} />
)

const resources: Resource[] = [
  {
    id: '0000-0000-0000-0000',
    project_id: '0000-0000-0000-0000',
    environment_id: '0000-0000-0000-0000',
    name: 'Front page',
    slug: 'front-page',
    content: {},
    content_type: 'pages',
    version: 1,
    versions_count: 1,
    updated_at: Date.now() / 1000,
    created_at: Date.now() / 1000,
  },
  {
    id: '0000-0000-0000-0000',
    project_id: '0000-0000-0000-0000',
    environment_id: '0000-0000-0000-0000',
    name: 'About us',
    slug: 'about-us',
    content: {},
    content_type: 'pages',
    version: 1,
    versions_count: 1,
    updated_at: Date.now() / 1000,
    created_at: Date.now() / 1000,
  },
  {
    id: '0000-0000-0000-0000',
    project_id: '0000-0000-0000-0000',
    environment_id: '0000-0000-0000-0000',
    name: 'Contact',
    slug: 'contact',
    content: {},
    content_type: 'pages',
    version: 1,
    versions_count: 1,
    updated_at: Date.now() / 1000,
    created_at: Date.now() / 1000,
  },
]

const contentType: ContentType = {
  id: 'pages',
  name: 'Pages',
  kind: 'collection',
  associations: [],
  fields: [],
}

export const Default = Template.bind({})
Default.args = { contentType: contentType, resources: resources }
