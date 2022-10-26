import { useContext } from 'react'
import { KiqrContext } from '../components/KiqrContext'

import useSWR from 'swr'
import { useFetcher } from './use-fetcher'

export const useSession = () => {
  // Token must be set via KiqrProvider.
  const { token } = useContext(KiqrContext)
  const { fetcher } = useFetcher()

  const { data: user, error: userError } = useSWR('v1/user', fetcher)

  return { token, user, userError }
}
