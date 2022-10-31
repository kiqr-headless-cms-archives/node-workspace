import React from 'react'
import { Table, Row, Column, LocalTime, Button, Group } from '../../..'
import type { ContentType, Resource } from '@kiqr/management-api-sdk'

import inflection from 'inflection'

export interface ResourcesTableProps {
  contentType?: ContentType
  resources?: Resource[]
}

export const ResourcesTable = ({
  contentType,
  resources,
}: ResourcesTableProps) => {
  return (
    <Table>
      <Row>
        <Column variant="th" className="w-0"></Column>
        <Column variant="th">
          {contentType ? inflection.singularize(contentType.name) : null}
        </Column>
        <Column variant="th">Updated at</Column>
        <Column variant="th">Created at</Column>
        <Column variant="th" className="w-0">
          Actions
        </Column>
      </Row>
      {resources
        ? resources.map((resource) => (
            <Row key={resource.id}>
              <Column className="w-0"></Column>
              <Column>{resource.name}</Column>
              <Column>
                <LocalTime epochTime={resource.updated_at} />
              </Column>
              <Column>
                <LocalTime epochTime={resource.created_at} />
              </Column>
              <Column>
                <Group gap={5}>
                  <Button size="xs">Edit</Button>
                  <Button size="xs" variant="danger">
                    Delete
                  </Button>
                </Group>
              </Column>
            </Row>
          ))
        : null}
    </Table>
  )
}
