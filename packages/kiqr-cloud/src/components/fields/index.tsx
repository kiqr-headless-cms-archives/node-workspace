import { ContentTypeField } from '@kiqr/management-api-sdk'
import React from 'react'

export const FormError: React.FC<{ message: string }> = ({ message }) => {
  return <span className="text-rose-500 text-xs mt-4">{message}</span>
}

export interface FieldProps {
  field: ContentTypeField
  name: string
  control: any
  register: any
  errors: any
}

export * from './EditorField'
export * from './StringField'
export * from './TextareaField'
export * from './FieldRenderer'
