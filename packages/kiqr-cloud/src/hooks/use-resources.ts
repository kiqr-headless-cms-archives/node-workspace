import useSWR from 'swr'
import { useCurrent, useFetcher } from '../hooks'

import type { ResourcesResponse } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useResources = (page = 1) => {
  const { fetcher } = useFetcher()
  const { currentContentType, currentEnvironment } = useCurrent()
  const isReady = currentContentType && currentEnvironment

  const { data, error, mutate } = useSWR<ResourcesResponse>(
    isReady
      ? `v1/environments/${currentEnvironment?.id}/resources?content_type=${currentContentType?.id}&page=${page}`
      : null,
    fetcher
  )

  const pagination = data?.meta?.pagination
  const resources = data?.results

  return { resources, pagination, error, mutate }
}
