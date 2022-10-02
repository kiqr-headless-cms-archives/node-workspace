import type { NextPage } from 'next'

import { Button, Heading } from '@kiqr/react-components'
import { PageTitle } from '../../../../../../components'
import { useCurrent } from '../../../../../../hooks'
import { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import inflection from 'inflection'
import Link from 'next/link'
import Router from 'next/router'

import { Configuration, ResourcesApi } from '@kiqr/management-api-sdk'
import { useSession } from '@kiqr/react-hooks'

import {
  EditResourceLayout,
  ResourceFormValues,
} from '../../../../../../components'

import type { ContentType } from '@kiqr/management-api-sdk'

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

    const payload = {
      ...data,
      content_type: currentContentType.id,
      project_id: currentProject.id,
      environment_id: currentEnvironment.id,
    }

    api
      .createResource(currentProject.id, payload)
      .then((response) => {
        console.log('response status', response.status)
        console.log('response data', response.data)
        if (response?.data?.slug) {
          Router.push(
            `/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${response.data.slug}`
          )
        }
      })
      .catch((error) => {
        if (error?.response?.data && error?.response?.status === 422) {
          const data = error.response.data
          if (data?.type === 'validation' && data?.errors) {
            data.errors.map((message: string) =>
              console.error('ERROR', message)
            )
          }
        } else {
          console.error('ERROR', error)
        }
      })
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
