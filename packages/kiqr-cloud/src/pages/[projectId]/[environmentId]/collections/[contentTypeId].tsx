import type { NextPage } from 'next'

import { Heading, Pagination, ResourcesTable } from '@kiqr/irelia'
import { useCurrent, useResources } from '../../../../hooks'
import { useState } from 'react'

const ContentTypePage: NextPage = () => {
  const [page, setPage] = useState(1)
  const { currentContentType, currentEnvironment } = useCurrent()
  const { resources, pagination } = useResources(
    currentEnvironment?.id,
    currentContentType?.id,
    page
  )

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
      <ResourcesTable contentType={currentContentType} resources={resources} />
      <Pagination
        currentPage={page}
        totalPages={pagination?.pages}
        callback={(page: number) => setPage(page)}
      />
    </>
  )
}

export default ContentTypePage
