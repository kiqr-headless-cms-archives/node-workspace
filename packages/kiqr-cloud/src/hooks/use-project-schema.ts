import useSWR from 'swr'
import { useFetcher } from '.'

import type { SchemaExtended } from '@kiqr/management-api-sdk'

export const useProjectSchema = (projectId?: string, id?: string) => {
  const { fetcher } = useFetcher()
  const isReady = projectId && id

  const {
    data: schema,
    error,
    mutate,
  } = useSWR<SchemaExtended>(
    isReady ? `v1/projects/${projectId}/schemas/${id}` : null,
    fetcher
  )

  return { schema, error, mutate }
}
