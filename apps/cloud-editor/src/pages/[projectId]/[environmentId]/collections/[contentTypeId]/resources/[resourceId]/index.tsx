import type { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useResource } from '@kiqr/react-hooks'
import { Button, Heading } from '@kiqr/react-components'

import { useCurrent } from '../../../../../../../hooks'
import { PageTitle } from '../../../../../../../components'

import {
  EditResourceLayout,
  ResourceFormValues,
} from '../../../../../../../components'

import { ContentType } from '@kiqr/management-api-sdk'
import { FaArrowCircleLeft } from 'react-icons/fa'

import Link from 'next/link'
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
        (field) => (state.content[field.id] = resource.content[field.id])
      )
      return state
    })

    setIsLoading(false)
  }, [resource, currentContentType])

  // Handle submission of form.
  const onSubmit = (data: ResourceFormValues): void => setFormData(data)

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
