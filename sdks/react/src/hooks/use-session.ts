import { useContext } from 'react'
import { KiqrContext } from '../'
import { getUser } from '../requests'

import useSWR from 'swr'

export const useSession = () => {
  const { token } = useContext(KiqrContext)
  const { data: user, error: userError } = useSWR(
    [token?.access_token, '/user'],
    getUser
  )

  return { user, userError, token }
}
