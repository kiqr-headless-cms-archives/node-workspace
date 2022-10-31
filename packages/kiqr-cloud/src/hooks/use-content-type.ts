import { useEffect, useState } from 'react'

import type { ContentType, SchemaExtended } from '@kiqr/management-api-sdk'

export const useContentType = (schema?: SchemaExtended, id?: string) => {
  const [contentType, setContentType] = useState<ContentType>()

  useEffect(() => {
    if (schema?.data?.content_types && id) {
      const contentType = schema.data.content_types.find((ct) => ct.id === id)
      setContentType(contentType)
    } else {
      setContentType(undefined)
    }
  }, [schema, id])

  return { contentType }
}
