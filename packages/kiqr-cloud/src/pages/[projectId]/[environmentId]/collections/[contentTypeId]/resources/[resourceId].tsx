import type { NextPage } from 'next'

import { Heading } from '@kiqr/irelia'
import { useCurrent } from '../../../../../../hooks'
import { useRouter } from 'next/router'
import { useResource } from '../../../../../../hooks/use-resource'

const EditResourcePage: NextPage = () => {
  const query = useRouter().query

  const { currentContentType } = useCurrent()
  const { resource } = useResource(query?.resourceId as string)

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
      <pre>{JSON.stringify(resource, null, 2)}</pre>
    </>
  )
}

export default EditResourcePage
