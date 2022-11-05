import useSWR from 'swr'
import { useCurrent, useFetcher } from '../hooks'

import type { Resource } from '@kiqr/management-api-sdk'
import { useEffect, useState } from 'react'

export const useResource = (id?: string) => {
  const { currentContentType, currentEnvironment } = useCurrent()

  const { fetcher } = useFetcher()
  const [isReady, setReady] = useState(false)

  const {
    data: resource,
    error,
    mutate,
  } = useSWR<Resource>(
    isReady
      ? `v1/environments/${currentEnvironment?.id}/resources/${id}`
      : null,
    fetcher
  )

  const {
    data: versions,
    error: versionsError,
    mutate: versionsMutate,
  } = useSWR<Resource[]>(
    isReady
      ? `v1/environments/${currentEnvironment?.id}/resources/${id}/versions`
      : null,
    fetcher
  )

  useEffect(() => {
    if (currentContentType && currentEnvironment && id && !isReady) {
      setReady(true)
    }
  }, [currentContentType, currentEnvironment, id, isReady])

  return { resource, error, mutate, versions, versionsError, versionsMutate }
}
