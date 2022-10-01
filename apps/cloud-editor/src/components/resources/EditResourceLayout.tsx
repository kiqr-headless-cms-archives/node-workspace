import { useForm } from 'react-hook-form'
import { Button, Card, Padding } from '@kiqr/react-components'
import { ResourceForm } from '..'

import type { ContentType } from '@kiqr/management-api-sdk'

export interface ResourceFormValues {
  name: string
  slug: string
  content: Record<string, string | number | boolean>
}

export interface EditResourceLayoutProps {
  isNewResource: boolean
  contentType: ContentType
  defaultValues: ResourceFormValues
  onSubmit: (payload: ResourceFormValues) => void
}

export const EditResourceLayout = ({
  isNewResource = false,
  contentType,
  defaultValues,
  onSubmit,
}: EditResourceLayoutProps): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResourceFormValues>({ defaultValues: defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 gap-x-5">
        <main className="left col-span-3">
          <ResourceForm
            register={register}
            errors={errors}
            contentType={contentType}
          />
        </main>
        <aside className="right flex flex-col gap-y-5">
          <Card
            title="Save changes"
            subtitle="Publish or schedule your resource for later"
          >
            <div className="bg-neutral-50 p-5 flex justify-between gap-x-5">
              <Button text="Save draft" />
              <Button text="Publish now" type="primary" />
            </div>
          </Card>

          {isNewResource ? null : (
            <>
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
            </>
          )}
        </aside>
      </div>
    </form>
  )
}
