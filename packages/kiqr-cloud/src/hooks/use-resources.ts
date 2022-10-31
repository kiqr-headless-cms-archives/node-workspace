import useSWR from 'swr'
import { useFetcher } from '../hooks'

import type { ResourcesResponse } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useResources = (
  environmentId?: string,
  contentTypeId?: string,
  page: number = 1
) => {
  const { fetcher } = useFetcher()
  const [isReady, setReady] = useState(false)

  const { data, error, mutate } = useSWR<ResourcesResponse>(
    isReady
      ? `v1/environments/${environmentId}/resources?content_type=${contentTypeId}&page=${page}`
      : null,
    fetcher
  )

  useEffect(() => {
    if (contentTypeId && environmentId && !isReady) {
      setReady(true)
    }
  }, [contentTypeId, environmentId, isReady])

  const pagination = data?.meta?.pagination
  const resources = data?.results

  return { resources, pagination, error, mutate }
}
