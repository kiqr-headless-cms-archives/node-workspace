import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'
import { PageTitle } from '../../../../../../../components'
import { useCurrent } from '../../../../../../../hooks'
import { FaLink } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useResource } from '@kiqr/react-hooks'
import inflection from 'inflection'

const ResourcePage: NextPage = () => {
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()
  const { query } = useRouter()

  const { resource } = useResource(
    query?.resourceId as string,
    currentProject?.id,
    currentEnvironment?.id,
    currentContentType?.name
  )

  return (
    <>
      <PageTitle segments={[resource?.name]} />
      <Heading
        title={resource?.name}
        subtitle={
          currentContentType
            ? `Edit ${inflection
                .transform(currentContentType?.name, ['singularize'])
                .toLowerCase()}`
            : undefined
        }
      />

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
