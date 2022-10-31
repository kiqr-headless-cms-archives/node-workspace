import useSWR from 'swr'
import { useFetcher } from '.'

import type { SchemaExtended } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useProjectSchema = (projectId?: string, id?: string) => {
  const [isReady, setReady] = useState(false)
  const { fetcher } = useFetcher()

  const {
    data: schema,
    error,
    mutate,
  } = useSWR<SchemaExtended>(
    isReady ? `v1/projects/${projectId}/schemas/${id}` : null,
    fetcher
  )

  useEffect(() => {
    if (id && projectId && !isReady) {
      setReady(true)
    }
  }, [projectId, id, isReady])

  return { schema, error, mutate }
}
