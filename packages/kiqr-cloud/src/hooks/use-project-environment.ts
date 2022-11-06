import useSWR from 'swr'
import { useFetcher } from '.'

import type { Environment } from '@kiqr/management-api-sdk'

export const useProjectEnvironment = (projectId?: string, id?: string) => {
  const { fetcher } = useFetcher()
  const isReady = projectId && id

  const {
    data: environment,
    error,
    mutate,
  } = useSWR<Environment>(
    isReady ? `v1/projects/${projectId}/environments/${id}` : null,
    fetcher
  )

  return { environment, error, mutate }
}
