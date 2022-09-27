import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'
import { PageTitle } from '../../../../../../../components'
import { useCurrent } from '../../../../../../../hooks'
import { FaLink } from 'react-icons/fa'
import { useRouter } from 'next/router'

const ResourcePage: NextPage = () => {
  const { currentProject } = useCurrent()
  const { query } = useRouter()

  return (
    <>
      <PageTitle segments={['FOO']} />
      <Heading title={undefined} subtitle={undefined} />

      <div className="flex items-center bg-primary-800 p-2 text-xs gap-x-2 rounded">
        <div className="bg-primary-900 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
          <FaLink />
        </div>
        <strong className="text-white">GET</strong>
        <a target="_blank" className="text-white" href="#">
          {`https://content.kiqr.cloud/v1/${currentProject?.slug}/collections/${query?.contentTypeId}/resources/${query?.resourceId}`}
        </a>
      </div>
    </>
  )
}

export default ResourcePage
