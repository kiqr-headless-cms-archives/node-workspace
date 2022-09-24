import type { NextPage } from 'next'

import { Card, Heading } from '@kiqr/react'

import { PageTitle } from '../../../../../components'
import { useCurrent } from '../../../../../hooks'

const ContentTypePage: NextPage = () => {
  const { currentContentType, currentProject } = useCurrent()

  return (
    <>
      {currentProject && currentContentType ? (
        <PageTitle segments={[currentContentType.name]} />
      ) : null}
      <Heading
        title={currentContentType?.name ? currentContentType.name : undefined}
        subtitle={
          currentContentType
            ? `Listing all resources in collection "${currentContentType.name}"`
            : undefined
        }
      />

      {/*<div className="flex items-center bg-primary-800 p-2 text-xs gap-x-2 rounded">
        <div className="bg-primary-900 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
          <FaLink />
        </div>
        <strong className="text-white">GET</strong>
        <a target="_blank" className="text-white" href="#">
          {`https://content.kiqr.cloud/v1/${currentProject?.slug}/collections/${query?.contentTypeId}`}
        </a>
      </div>*/}

      <Card
        title="All"
        subtitle={`Displaying ${0} of ${0} resources in this collection.`}
      >
        <table className="table border-t">
          <thead>
            <tr>
              <th className="mini"></th>
              <th>Name</th>
              <th>Updated at</th>
              <th>Created at</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </Card>
    </>
  )
}

export default ContentTypePage
