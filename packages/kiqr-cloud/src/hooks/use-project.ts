import useSWR from 'swr'
import { useFetcher } from '../hooks'

import type { Project } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useProject = (id?: string) => {
  const [isReady, setReady] = useState(false)
  const { fetcher } = useFetcher()

  const {
    data: project,
    error,
    mutate,
  } = useSWR<Project>(isReady ? `v1/projects/${id}` : null, fetcher)

  useEffect(() => {
    if (id && !isReady) {
      setReady(true)
    }
  }, [id, isReady])

  return { project, error, mutate }
}
