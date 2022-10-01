import type { NextPage } from 'next'

import { Button, Heading } from '@kiqr/react-components'
import { PageTitle } from '../../../../../../components'
import { useCurrent } from '../../../../../../hooks'
import { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import inflection from 'inflection'
import Link from 'next/link'

import {
  EditResourceLayout,
  ResourceFormValues,
} from '../../../../../../components'

import type { ContentType } from '@kiqr/management-api-sdk'

const NewResourcePage: NextPage = () => {
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()

  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState<ResourceFormValues>({
    name: '',
    slug: '',
    content: {},
  })

  // Setup defaultValues from useResource before rendering EditResourceLayout.
  useEffect(() => {
    if (!currentContentType) return

    setFormData((previousState) => {
      const state = {
        ...previousState,
      }

      currentContentType.fields.map((field) => (state.content[field.id] = ''))
      return state
    })

    setIsLoading(false)
  }, [currentContentType])

  // Handle submission of form.
  const onSubmit = (data: ResourceFormValues): void => setFormData(data)

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
