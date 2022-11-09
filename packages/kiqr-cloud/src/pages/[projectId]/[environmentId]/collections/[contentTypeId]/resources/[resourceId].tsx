import type { NextPage } from 'next'

import {
  Button,
  Card,
  Column,
  Group,
  Heading,
  LocalTime,
  Row,
  Table,
} from '@kiqr/irelia'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useApi, useCurrent, useResource } from '../../../../../../hooks'
import { ResourceEditor } from '../../../../../../components'
import { FaUndo } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import {
  Configuration,
  ResourcesApi,
  UpdateResourceRequest,
} from '@kiqr/management-api-sdk'

const EditResourcePage: NextPage = () => {
  const query = useRouter().query
  const { token } = useApi()

  const {
    currentContentType,
    currentProject,
    currentSchema,
    currentEnvironment,
  } = useCurrent()
  const { resource, mutate, versions, versionsMutate } = useResource(
    query?.resourceId as string
  )
  const [isLoading, setIsLoading] = useState(true)

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm<UpdateResourceRequest>()

  useEffect(() => {
    if (!currentContentType || !currentSchema || !resource || !isLoading) return

    setValue('name', resource.name)
    setValue('slug', resource.slug)

    currentContentType.fields.map((field) => {
      // @ts-expect-error content has any type
      const value = resource.content[field.id] || null

      // @ts-expect-error content has any type
      setValue(`content[${field.id}]`, value)
    })

    setIsLoading(false)
  }, [currentContentType, currentSchema, resource, isLoading, setValue])

  // Handle submission of form.
  const onSubmit = async (data: UpdateResourceRequest): Promise<void> => {
    if (!token) return console.error('Missing access token')
    if (!currentContentType) return console.error('Missing content type')
    if (!currentProject) return console.error('Missing project_id')
    if (!currentEnvironment) return console.error('Missing environment_id')
    if (!resource) return console.error('Missing resource id')

    const configuration = new Configuration({
      accessToken: token?.access_token,
    })

    const api = new ResourcesApi(configuration)
    const payload: UpdateResourceRequest = {
      ...data,
    }

    toast.promise(
      api
        .updateResource(resource.id, currentEnvironment.id, payload)
        .then((response) => {
          mutate(response.data)
          console.log('response:', response.data)
          versionsMutate()
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
      <Heading
        title={currentContentType ? currentContentType.name : '&nbsp;'}
        subtitle={`Listing all resources in collection ${
          currentContentType
            ? currentContentType.name.toLocaleLowerCase()
            : null
        }`}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-x-5"
      >
        <section className="col-span-3">
          <ResourceEditor
            register={register}
            control={control}
            errors={errors}
            watch={watch}
          />
        </section>
        <aside className="flex flex-col gap-y-5">
          <Card
            title="Save changes"
            subtitle="Publish or schedule your resource for later"
          >
            <Group>
              <Button>Save draft</Button>
              <Button variant="primary" type="submit">
                Save &amp; publish
              </Button>
            </Group>
          </Card>

          <Table
            title="Versions"
            subtitle="Undo changes / revert to an earlier version"
          >
            <thead>
              <Row>
                <Column variant="th" className="w-0 text-center">
                  Version
                </Column>
                <Column variant="th">Timestamp</Column>
              </Row>
            </thead>
            <tbody>
              {versions &&
                versions.map((version) => (
                  <Row key={version.version}>
                    <Column className="text-center">{version.version}</Column>
                    <Column>
                      <Group className="justify-between">
                        <LocalTime epochTime={version.updated_at} />
                        <Button size="xs" icon={<FaUndo />} />
                      </Group>
                    </Column>
                  </Row>
                ))}
            </tbody>
          </Table>

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

export default EditResourcePage
