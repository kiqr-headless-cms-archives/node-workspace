import { useContext } from 'react'
import { KiqrContext, KiqrContextConfig } from '@kiqr/react'
import { Configuration, User, UserApi } from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getUser = async (accessToken: string): Promise<User> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new UserApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getUser()
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}

export const useSession = () => {
  const { token } = useContext<KiqrContextConfig>(KiqrContext)
  const { data: user, error: userError } = useSWR(
    [token?.access_token, '/user'],
    getUser
  )

  return { user, userError, token }
}
