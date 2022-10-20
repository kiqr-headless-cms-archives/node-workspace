/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ContentTypeField } from '@kiqr/management-api-sdk'
import { FormError } from '..'

export interface FieldProps {
  field: ContentTypeField
  register: any
  errors: any
}

const StringField = (props: FieldProps): JSX.Element => {
  const { field, register, errors } = props

  return (
    <>
      <input
        type="text"
        {...register(`content[${field.id}]`, { required: true })}
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
      />

      {errors?.content?.[field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )
}

const TextareaField = (props: FieldProps): JSX.Element => {
  const { field, register, errors } = props

  return (
    <>
      <textarea
        type="text"
        rows="3"
        {...register(`content[${field.id}]`, { required: true })}
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a text for "${field.label.toLowerCase()}"`}
      ></textarea>

      {errors?.content?.[field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )
}

export const Field = (props: FieldProps): JSX.Element => {
  const { field } = props

  const renderField = (type: string) => {
    switch (type) {
      case 'string':
        return <StringField {...props} />
      case 'text':
        return <TextareaField {...props} />
      default:
        return `Unknown field type "${field.type}"`
    }
  }

  return (
    <div
      key={field.id}
      className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative"
    >
      <label
        htmlFor={field.id}
        className={`text-primary-700 text-xs mb-3 uppercase ${
          field.required ? 'font-bold' : null
        }`}
      >
        {field.label}
      </label>

      {renderField(field.type)}
    </div>
  )
}
