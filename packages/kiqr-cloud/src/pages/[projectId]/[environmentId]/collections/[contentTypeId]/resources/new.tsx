import type { NextPage } from 'next'

import { Card, Heading } from '@kiqr/core'
import { Button } from '@kiqr/core'

import { useSession } from '@kiqr/react-hooks'
import { FaArrowCircleLeft } from 'react-icons/fa'
import {
  Configuration,
  CreateResourceRequest,
  ResourcesApi,
} from '@kiqr/management-api-sdk'
import { useForm } from 'react-hook-form'

import { PageTitle, ResourceForm } from '../../../../../../components'
import { useCurrent } from '../../../../../../hooks'

import inflection from 'inflection'
import Link from 'next/link'
import toast from 'react-hot-toast'
import Router from 'next/router'

const NewResourcePage: NextPage = () => {
  const { token } = useSession()
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateResourceRequest>()

  // Handle submission of form.
  const onSubmit = async (data: CreateResourceRequest): Promise<void> => {
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
            <Button icon={<FaArrowCircleLeft />}>
              {`Back to ${currentContentType?.name.toLowerCase()}`}
            </Button>
          </a>
        </Link>
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-x-5"
      >
        <main className="left col-span-3">
          <ResourceForm register={register} errors={errors} />
        </main>
        <aside className="right flex flex-col gap-y-5">
          <Card
            title="Save changes"
            subtitle="Publish or schedule your resource for later"
          >
            <div className="bg-neutral-50 p-5 flex justify-between gap-x-5">
              <Button>Save draft</Button>
              <Button variant="primary">Save &amp; publish</Button>
            </div>
          </Card>
        </aside>
      </form>
    </>
  )
}

export default NewResourcePage
