import { SchemaExtended } from '@kiqr/management-api-sdk'

export interface ContentTypeField {
  type: string
  label: string
  required: boolean
}

export interface ContentType {
  name: string
  kind: string
  fields?: Record<string, ContentTypeField>
}

export interface SchemaWithData extends Omit<SchemaExtended, 'data'> {
  data: {
    content_types: Record<string, ContentType>
  }
}
