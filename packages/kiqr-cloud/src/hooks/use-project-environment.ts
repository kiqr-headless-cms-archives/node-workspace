import useSWR from 'swr'
import { useFetcher } from '.'

import type { Environment } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useProjectEnvironment = (projectId?: string, id?: string) => {
  const { fetcher } = useFetcher()
  const [isReady, setReady] = useState(false)

  const {
    data: environment,
    error,
    mutate,
  } = useSWR<Environment>(
    isReady ? `v1/projects/${projectId}/environments/${id}` : null,
    fetcher
  )

  useEffect(() => {
    if (id && projectId && !isReady) {
      setReady(true)
    }
  }, [projectId, id, isReady])

  return { environment, error, mutate }
}
