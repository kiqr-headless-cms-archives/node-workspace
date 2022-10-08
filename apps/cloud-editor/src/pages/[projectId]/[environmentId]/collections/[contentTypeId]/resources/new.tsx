import type { NextPage } from 'next'

import { Button, Heading } from '@kiqr/react-components'
import { PageTitle } from '../../../../../../components'
import { useCurrent } from '../../../../../../hooks'
import { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import inflection from 'inflection'
import Link from 'next/link'
import Router from 'next/router'

import {
  Configuration,
  CreateResourceRequest,
  ResourcesApi,
} from '@kiqr/management-api-sdk'
import { useSession } from '@kiqr/react-hooks'

import {
  EditResourceLayout,
  ResourceFormValues,
} from '../../../../../../components'

import type { ContentType } from '@kiqr/management-api-sdk'
import toast from 'react-hot-toast'

const NewResourcePage: NextPage = () => {
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()
  const { token } = useSession()

  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<ResourceFormValues>({
    name: '',
    slug: '',
    content: {},
  })

  // Setup defaultValues from useResource before rendering EditResourceLayout.
  useEffect(() => {
    if (!currentContentType) return

    setFormData((state) => {
      currentContentType.fields.map((field) => (state.content[field.id] = ''))
      return state
    })

    setIsLoading(false)
  }, [currentContentType])

  // Handle submission of form.
  const onSubmit = async (data: ResourceFormValues): Promise<void> => {
    const configuration = new Configuration({ accessToken: token.access_token })
    const api = new ResourcesApi(configuration)

    if (!currentContentType) return console.error('Missing content type')
    if (!currentProject) return console.error('Missing project_id')
    if (!currentEnvironment) return console.error('Missing environment_id')

    const payload: CreateResourceRequest = {
      ...data,
      content_type: currentContentType.id,
    }

    toast.promise(
      api.createResource(currentEnvironment.id, payload).then((response) => {
        if (response?.data?.slug) {
          Router.push(
            `/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${response.data.slug}`
          )
        }
      }),
      {
        loading: 'Saving...',
        success: `Successfully created ${payload.name}`,
        error: 'Error when saving.',
      }
    )
  }

  return (
    <>
      <PageTitle
        segments={currentContentType ? [currentContentType.name, 'New'] : ['']}
      />
      <Heading
        title={
          currentContentType
            ? `New ${inflection
                .transform(currentContentType?.name, ['singularize'])
                .toLowerCase()}`
            : undefined
        }
        subtitle={
          currentContentType
            ? `Create a new ${inflection
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
          isNewResource={true}
          contentType={currentContentType as ContentType}
          defaultValues={formData}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}

export default NewResourcePage