import useSWR from 'swr'
import { useCurrent, useFetcher } from '../hooks'

import type { ResourcesResponse } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useResources = (page = 1) => {
  const { currentContentType, currentEnvironment } = useCurrent()

  const { fetcher } = useFetcher()
  const [isReady, setReady] = useState(false)

  const { data, error, mutate } = useSWR<ResourcesResponse>(
    isReady
      ? `v1/environments/${currentEnvironment?.id}/resources?content_type=${currentContentType?.id}&page=${page}`
      : null,
    fetcher
  )

  useEffect(() => {
    if (currentContentType && currentEnvironment && !isReady) {
      setReady(true)
    }
  }, [currentContentType, currentEnvironment, isReady])

  const pagination = data?.meta?.pagination
  const resources = data?.results

  return { resources, pagination, error, mutate }
}
