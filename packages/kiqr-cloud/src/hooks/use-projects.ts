import useSWR from 'swr'
import { useFetcher } from '../hooks'

import type { Project } from '@kiqr/management-api-sdk'

export const useProjects = () => {
  const { fetcher } = useFetcher()
  const {
    data: projects,
    error,
    mutate,
  } = useSWR<Project[]>('v1/projects', fetcher)

  return { projects, error, mutate }
}
