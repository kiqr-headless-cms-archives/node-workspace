/* eslint-disable max-params */
import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getResource = async (
  accessToken: string,
  id: string,
  environmentId: string,
): Promise<Resource> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ResourcesApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getResource(id, environmentId)
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useResource = (id: string | undefined, projectId: string | undefined, environmentId: string | undefined, contentType: string | undefined) : {
  resource: Resource,
  resourceError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: resource, error: resourceError} = useSWR(
    [id, environmentId, token?.access_token],
    (id, environmentId, token) => getResource(token as string, id, environmentId),
  )

  return {resource, resourceError, token}
}
