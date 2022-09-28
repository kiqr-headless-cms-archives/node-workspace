import { Card } from '@kiqr/react-components'
import { FaGoogle, FaWrench } from 'react-icons/fa'

import type {
  ContentType,
  ContentTypeField,
  Resource,
} from '@kiqr/management-api-sdk'
import inflection from 'inflection'

interface ResourceFormProps {
  values: Resource | undefined
  contentType: ContentType | undefined
}

interface FieldProps {
  field: ContentTypeField
}

const Field = ({ field }: FieldProps): JSX.Element => {
  if (!field) return <></>

  return (
    <div
      key={field.id}
      className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative"
    >
      <label
        htmlFor={field.id}
        className={`text-primary-700 text-xs mb-2 uppercase ${
          field.required ? 'font-bold' : null
        }`}
      >
        {field.label}
      </label>
      <input
        type="text"
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
      />
    </div>
  )
}

export const ResourceForm = ({ values, contentType }: ResourceFormProps) => {
  if (!contentType) return null
  if (!values) return null

  const singularizedContentTypeName = contentType
    ? inflection.transform(contentType.name, ['singularize'])?.toLowerCase()
    : null

  return (
    <div>
      <Card
        title="General settings"
        subtitle={
          values?.name
            ? `Edit general settings for ${values.name}`
            : 'Edit general settings'
        }
      >
        <div className="flex border-t">
          <aside className="border-r w-60">
            <ul>
              <li>
                <button className="font-bold flex w-full px-5 py-4 items-center gap-x-1 text-xs hover:bg-white border-b bg-neutral-50 text-primary-700">
                  <div className="mr-3">
                    <FaWrench />
                  </div>
                  <span>General</span>
                </button>
              </li>
              <li>
                <button className="flex w-full px-5 py-4 items-center gap-x-1 text-xs hover:bg-white border-b text-neutral-500">
                  <div className="mr-3">
                    <FaGoogle />
                  </div>
                  <span>SEO Settings</span>
                </button>
              </li>
            </ul>
          </aside>
          <main className="flex-1">
            <section id="general">
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="name"
                  className="font-bold text-primary-700 text-xs mb-2 uppercase required"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
                  placeholder={`Give your ${singularizedContentTypeName} a name`}
                />
              </div>
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="slug"
                  className="font-bold text-primary-700 text-xs mb-2 uppercase required"
                >
                  Permalink
                </label>
                <input
                  type="text"
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
                  placeholder={`Give your ${singularizedContentTypeName} a url friendly slug`}
                />
              </div>
              {contentType.fields.map((field) => (
                <Field key={field.id} field={field} />
              ))}
            </section>
          </main>
        </div>
      </Card>
    </div>
  )
}
