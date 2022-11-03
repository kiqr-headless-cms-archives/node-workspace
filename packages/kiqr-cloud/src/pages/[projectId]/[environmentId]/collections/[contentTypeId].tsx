import type { NextPage } from 'next'

import {
  Heading,
  Pagination,
  Table,
  Row,
  Column,
  LocalTime,
  Group,
  Button,
} from '@kiqr/irelia'

import { useCurrent, useResources } from '../../../../hooks'
import { useEffect, useState } from 'react'
import { CreateYourFirstAnnouncement } from '../../../../components/templates/announcements/CreateYourFirst'
import inflection from 'inflection'
import Link from 'next/link'

const ContentTypePage: NextPage = () => {
  const [page, setPage] = useState(1)
  const [emptyResults, setEmptyResults] = useState(false)
  const { currentProject, currentContentType, currentEnvironment } =
    useCurrent()

  const { resources, pagination } = useResources(page)

  useEffect(() => {
    if (resources && resources.length === 0) {
      setEmptyResults(true)
    } else {
      setEmptyResults(false)
    }
  }, [resources, emptyResults])

  return (
    <>
      <Heading
        title={currentContentType ? currentContentType.name : '&nbsp;'}
        subtitle={`Listing all resources in collection ${
          currentContentType
            ? currentContentType.name.toLocaleLowerCase()
            : null
        }`}
      />

      {resources && resources.length > 0 ? (
        <Table>
          <Row>
            <Column variant="th" className="w-0"></Column>
            <Column variant="th">
              {currentContentType
                ? inflection.singularize(currentContentType.name)
                : null}
            </Column>
            <Column variant="th">Updated at</Column>
            <Column variant="th">Created at</Column>
            <Column variant="th" className="w-0">
              Actions
            </Column>
          </Row>
          {resources.map((resource) => (
            <Row key={resource.id}>
              <Column className="w-0"></Column>
              <Column>
                <Link
                  href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${resource.slug}`}
                >
                  {resource.name}
                </Link>
              </Column>
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
          ))}
        </Table>
      ) : null}

      {currentContentType && emptyResults ? (
        <CreateYourFirstAnnouncement
          href="#"
          contentTypeName={currentContentType?.name}
        />
      ) : null}

      {pagination?.pages && pagination?.pages > 1 ? (
        <Pagination
          currentPage={page}
          totalPages={pagination?.pages}
          callback={(page: number) => setPage(page)}
        />
      ) : null}
    </>
  )
}

export default ContentTypePage
