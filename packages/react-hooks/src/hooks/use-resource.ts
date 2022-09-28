/* eslint-disable max-params */
import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getResource = async (
  accessToken: string,
  id: string,
  projectId: string,
  environmentId: string,
  contentType: string,
): Promise<Resource> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ResourcesApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getResource(id, projectId, environmentId, contentType)
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
    [id, projectId, environmentId, contentType, token?.access_token],
    (id, projectId, environmentId, contentType, token) => getResource(token as string, id, projectId as string, environmentId, contentType),
  )

  return {resource, resourceError, token}
}
