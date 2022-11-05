import useSWR from 'swr'
import { useFetcher } from '../hooks'

import type { User } from '@kiqr/management-api-sdk'

export const useUser = () => {
  const { fetcher } = useFetcher()
  const { data: user, error, mutate } = useSWR<User>('v1/user', fetcher)

  return { user, error, mutate }
}
