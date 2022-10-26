import type { NextPage } from 'next'

import { Button, Pagination, ApiEndpoint, Heading } from '@kiqr/irelia'
import { PageTitle } from '../../../../components'
import { useCurrent } from '../../../../hooks'
import { useResources } from '@kiqr/cloud-sdk'
import { FaPlusCircle } from 'react-icons/fa'

import inflection from 'inflection'
import Link from 'next/link'

import { useState } from 'react'
import { ResourcesTable } from '../../../../components/organisms/ResourcesTable/ResourcesTable'
import { CreateYourFirstAnnouncement } from '../../../../components/templates/announcements/CreateYourFirst'

const ContentTypePage: NextPage = () => {
  const { currentContentType, currentEnvironment, currentProject } =
    useCurrent()

  const [page, setPage] = useState(1)
  const { resources, pagination } = useResources(
    currentEnvironment?.id,
    currentContentType?.id,
    page
  )

  return (
    <>
      {currentProject && currentContentType ? (
        <PageTitle segments={[currentContentType.name, 'List']} />
      ) : null}
      {currentContentType ? (
        <Heading
          title={currentContentType.name}
          subtitle={`Listing all resources in collection "${currentContentType.name}"`}
        >
          <Link
            href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/new`}
          >
            <a>
              <Button icon={<FaPlusCircle />} variant="primary">
                {`New ${inflection.singularize(currentContentType.name)}`}
              </Button>
            </a>
          </Link>
        </Heading>
      ) : null}
      {currentContentType && resources && resources.length > 0 ? (
        <ResourcesTable
          resources={resources}
          apiEndpoint={`https://content.kiqr.cloud/v1/collections/${currentContentType.id}`}
        />
      ) : null}
      {pagination && pagination.pages > 1 ? (
        <Pagination
          currentPage={pagination.page}
          totalPages={pagination.pages}
          callback={setPage}
        />
      ) : null}{' '}
    </>
  )
}

export default ContentTypePage
