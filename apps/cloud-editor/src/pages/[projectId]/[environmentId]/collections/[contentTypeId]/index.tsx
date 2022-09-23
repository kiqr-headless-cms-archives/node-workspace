import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'

import { PageTitle } from '../../../../../components'
import { useCurrent } from '../../../../../hooks'
import { FaLink } from 'react-icons/fa'
import { useRouter } from 'next/router'

const ContentTypePage: NextPage = () => {
  const { query } = useRouter()
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

      <div className="flex items-center h-12 bg-primary-700 p-2 text-xs gap-x-2 rounded">
        <div className="bg-primary-800 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
          <FaLink />
        </div>
        <strong className="text-white">GET</strong>
        <a target="_blank" className="text-white" href="#">
          {`https://content.kiqr.cloud/v1/${currentProject?.slug}/collections/${query?.contentTypeId}`}
        </a>
      </div>

      <pre>{JSON.stringify(currentContentType, null, 2)}</pre>
    </>
  )
}

export default ContentTypePage
