import type { NextPage } from 'next'

import { PageTitle, ResourceForm } from '../../../../../../../components'
import { useCurrent } from '../../../../../../../hooks'
import { FaLink } from 'react-icons/fa'
import { useRouter } from 'next/router'

import { Button, Heading, Card, Padding } from '@kiqr/react-components'
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

      <div className="grid grid-cols-4 gap-x-5">
        <div className="left col-span-3">
          <ResourceForm values={resource} contentType={currentContentType} />
        </div>
        <aside className="right flex flex-col gap-y-5">
          <Card
            title="Save changes"
            subtitle="Publish or schedule your resource for later"
          >
            <div className="bg-neutral-50 p-5 flex justify-between gap-x-5">
              <Button text="Save draft" />
              <Button text="Publish" type="primary" />
            </div>
          </Card>

          <Card title="Versions" />

          <Card
            title="Delete resource"
            subtitle="Unpublish and archive resource"
          >
            <p className="text-xs px-5 pt-0">
              Deleting a resource will unpublish and archive it. It will be{' '}
              <strong>permanently deleted</strong> after 30 days.
            </p>
            <Padding>
              <Button text="Delete resource" type="danger" size="xs" />
            </Padding>
          </Card>
        </aside>
      </div>
    </>
  )
}

export default ResourcePage
