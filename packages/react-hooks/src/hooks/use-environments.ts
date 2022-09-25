import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Environment, EnvironmentsApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getEnvironments = async (
  accessToken: string,
): Promise<Environment[]> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new EnvironmentsApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getEnvironments()
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useEnvironments = () : {
  environments: Environment[],
  environmentsError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: environments, error: environmentsError} = useSWR(
    [token?.access_token, '/environments'],
    getEnvironments,
  )

  return {environments, environmentsError, token}
}
