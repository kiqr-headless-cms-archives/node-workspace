import { useContext } from 'react'
import { KiqrContext } from '../'
import { getEnvironments } from '../requests'

import useSWR from 'swr'

export const useEnvironments = () => {
  const { token } = useContext(KiqrContext)
  const { data: environments, error: environmentsError } = useSWR(
    [token?.access_token, '/environments'],
    getEnvironments
  )

  return { environments, environmentsError, token }
}
