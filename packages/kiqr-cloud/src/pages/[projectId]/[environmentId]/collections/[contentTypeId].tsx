import type { NextPage } from 'next'

import { Heading, Pagination, ResourcesTable } from '@kiqr/irelia'
import { useCurrent, useResources } from '../../../../hooks'
import { useEffect, useState } from 'react'
import { CreateYourFirstAnnouncement } from '../../../../components/templates/announcements/CreateYourFirst'

const ContentTypePage: NextPage = () => {
  const [page, setPage] = useState(1)
  const [emptyResults, setEmptyResults] = useState(false)
  const { currentContentType, currentEnvironment } = useCurrent()
  const { resources, pagination } = useResources(
    currentEnvironment?.id,
    currentContentType?.id,
    page
  )

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

      {!emptyResults ? (
        <ResourcesTable
          contentType={currentContentType}
          resources={resources}
        />
      ) : currentContentType ? (
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
