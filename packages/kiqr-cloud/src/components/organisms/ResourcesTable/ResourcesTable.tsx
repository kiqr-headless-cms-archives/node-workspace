import React from 'react'
import Link from 'next/link'

import { Table, Row, Column, LocalTime, Button } from '@kiqr/irelia'
import { useCurrent } from '../../../hooks'
import { FaCircle } from 'react-icons/fa'

import type { Resource } from '@kiqr/management-api-sdk'

export interface ResourcesTableProps {
  resources: Resource[]
}

export const ResourcesTable = ({ resources }: ResourcesTableProps) => {
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()

  return (
    <Table>
      <Row>
        <Column variant="th" className="w-0"></Column>
        <Column variant="th">Name</Column>
        <Column variant="th">Updated at</Column>
        <Column variant="th">Created at</Column>
        <Column variant="th" className="w-0">
          Actions
        </Column>
      </Row>
      {resources.map((resource) => (
        <Row key={resource.id}>
          <Column className="w-0">
            <FaCircle />
          </Column>
          <Column>
            <Link
              href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${resource.slug}`}
            >
              <a>{resource.name}</a>
            </Link>
          </Column>
          <Column>
            <LocalTime epochTime={resource.updated_at} />
          </Column>
          <Column>
            <LocalTime epochTime={resource.created_at} />
          </Column>
          <Column className="w-0">
            <Link
              href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${resource.slug}`}
            >
              <a>
                <Button size="xs">Edit</Button>
              </a>
            </Link>
          </Column>
        </Row>
      ))}
    </Table>
  )
}
