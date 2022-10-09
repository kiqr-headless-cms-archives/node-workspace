import type { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useResource, useSession } from '@kiqr/react-hooks'
import { Button, Heading } from '@kiqr/react-components'

import { useCurrent } from '../../../../../../../hooks'
import { PageTitle } from '../../../../../../../components'

import {
  EditResourceLayout,
  ResourceFormValues,
} from '../../../../../../../components'

import {
  Configuration,
  ContentType,
  ResourcesApi,
  UpdateResourceRequest,
} from '@kiqr/management-api-sdk'
import { FaArrowCircleLeft } from 'react-icons/fa'

import Link from 'next/link'
import inflection from 'inflection'
import toast from 'react-hot-toast'

const ResourcePage: NextPage = () => {
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()
  const { token } = useSession()

  const { query } = useRouter()
  const { resource, mutate } = useResource(
    query?.resourceId as string,
    currentEnvironment?.id
  )

  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<ResourceFormValues>({
    name: '',
    slug: '',
    content: {},
  })

  // Setup defaultValues from useResource before rendering EditResourceLayout.
  useEffect(() => {
    if (!resource || !currentContentType) return

    setFormData((previousState) => {
      const state = {
        ...previousState,
        name: resource.name,
        slug: resource.slug,
      }

      currentContentType.fields.map(
        // @ts-expect-error content has any type
        (field) => (state.content[field.id] = resource.content[field.id])
      )
      return state
    })

    setIsLoading(false)
  }, [resource, currentContentType])

  // Handle submission of form.
  const onSubmit = async (data: ResourceFormValues): Promise<void> => {
    const configuration = new Configuration({ accessToken: token.access_token })
    const api = new ResourcesApi(configuration)

    if (!currentContentType) return console.error('Missing content type')
    if (!currentProject) return console.error('Missing project_id')
    if (!currentEnvironment) return console.error('Missing environment_id')

    const payload: UpdateResourceRequest = {
      ...data,
    }

    toast.promise(
      api
        .updateResource(resource.id, currentEnvironment.id, payload)
        .then((response) => {
          console.log('response', response)
          setFormData(response.data)
          mutate(response.data)
        }),
      {
        loading: 'Saving...',
        success: 'Changes saved!',
        error: 'Error when saving.',
      }
    )
  }

  return (
    <>
      <PageTitle segments={[resource?.name, 'Edit']} />
      <Heading
        title={resource?.name}
        subtitle={
          currentContentType
            ? `Edit resource ${inflection
                .transform(currentContentType?.name, ['singularize'])
                .toLowerCase()}`
            : undefined
        }
      >
        <Link
          href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}`}
        >
          <a>
            <Button
              icon={<FaArrowCircleLeft />}
              text={`Back to ${currentContentType?.name.toLowerCase()}`}
            />
          </a>
        </Link>
      </Heading>

      {isLoading ? (
        <>Loading..</>
      ) : (
        <EditResourceLayout
          isNewResource={false}
          contentType={currentContentType as ContentType}
          defaultValues={formData}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default ResourcePage
