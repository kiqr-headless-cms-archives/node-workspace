import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, User, UserApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getUser = async (accessToken: string): Promise<User> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new UserApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getUser()
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useSession = () : {
  user: User,
  userError: any,
  token: Oauth2Token
}  => {
  const {token} = useContext(KiqrContext)
  const {data: user, error: userError} = useSWR(
    [token?.access_token, '/user'],
    getUser,
  )

  return {user, userError, token}
}
