import type { NextPage } from 'next'
import {
  Configuration,
  ResourcesApi,
  UpdateResourceRequest,
} from '@kiqr/management-api-sdk'

import {
  Box,
  Button,
  Card,
  Heading,
  LocalTime,
  Padding,
  Table,
  Row,
  Column,
  Group,
  ApiEndpoint,
} from '@kiqr/irelia'

import { useResource, useResourceVersions, useSession } from '@kiqr/cloud-sdk'
import { useRouter } from 'next/router'

import Link from 'next/link'
import inflection from 'inflection'

import { PageTitle, ResourceForm } from '../../../../../../components'
import { useCurrent } from '../../../../../../hooks'
import { FaArrowCircleLeft, FaUndo } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const ResourcePage: NextPage = () => {
  const { query } = useRouter()
  const { token } = useSession()
  const { currentProject, currentEnvironment, currentContentType } =
    useCurrent()

  const { resource, mutate } = useResource(
    query?.resourceId as string,
    currentEnvironment?.id
  )

  const { versions, mutate: mutateVersions } = useResourceVersions(
    query?.resourceId as string,
    currentEnvironment?.id
  )

  const [isLoading, setIsLoading] = useState(true)

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<UpdateResourceRequest>()

  useEffect(() => {
    if (!isLoading) return
    if (resource === undefined || currentContentType === undefined) return

    setValue('name', resource.name)
    setValue('slug', resource.slug)

    currentContentType.fields.map(
      // @ts-expect-error content has any type
      (field) => setValue(`content[${field.id}]`, resource.content[field.id])
    )

    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resource, currentContentType])

  // Handle submission of form.
  const onSubmit = async (data: UpdateResourceRequest): Promise<void> => {
    const configuration = new Configuration({
      accessToken: token.access_token,
    })
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
          mutate(response.data)
          mutateVersions()
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
            <Button icon={<FaArrowCircleLeft />}>
              {`Back to ${currentContentType?.name.toLowerCase()}`}
            </Button>
          </a>
        </Link>
      </Heading>

      {currentProject && currentContentType && resource ? (
        <ApiEndpoint
          url={`https://content.kiqr.cloud/v1/collections/${currentContentType.id}/${resource.slug}`}
        />
      ) : null}

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
            <Group>
              <Button>Save draft</Button>
              <Button variant="primary">Save &amp; publish</Button>
            </Group>
          </Card>

          {versions && versions.length > 0 ? (
            <Table
              title="Versions"
              subtitle={`Current version: v${resource?.version}`}
              className="border-0"
            >
              {versions.slice(0, 5).map((version) => (
                <Row key={version.version}>
                  <Column className="text-center w-0">
                    v{version.version}
                  </Column>
                  <Column className="">
                    <LocalTime epochTime={version.updated_at} />
                  </Column>
                  <Column className="w-0">
                    <Button icon={<FaUndo />} size="xs" />
                  </Column>
                </Row>
              ))}
            </Table>
          ) : null}

          <Card
            title="Delete resource"
            subtitle="Unpublish and archive resource"
          >
            <p className="text-xs">
              Deleting a resource will unpublish and archive it. It will be{' '}
              <strong>permanently deleted</strong> after 30 days.
            </p>
            <br />
            <Button variant="danger" size="sm">
              Delete resource
            </Button>
          </Card>
        </aside>
      </form>
    </>
  )
}

export default ResourcePage
