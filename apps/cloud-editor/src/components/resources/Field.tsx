/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ContentTypeField } from '@kiqr/management-api-sdk'
import { FormError } from '..'

export interface FieldProps {
  field: ContentTypeField
  register: any
  errors: any
}

export const Field = ({ field, register, errors }: FieldProps): JSX.Element => {
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
        {...register(`content[${field.id}]`, { required: true })}
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
      />
      {errors?.content?.[field.id] && (
        <FormError message="This field is required" />
      )}
    </div>
  )
}
