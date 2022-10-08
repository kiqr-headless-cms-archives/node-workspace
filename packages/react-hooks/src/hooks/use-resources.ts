import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getResources = async (
  accessToken: string,
  environmentId: string,
  contentType: string,
  pageNumber: number,
): Promise<Resource[]> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ResourcesApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getResources(environmentId, pageNumber, contentType)
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useResources = (environmentId: string | undefined, contentType: string | undefined, pageNumber: number) : {
  resources: Resource[],
  resourcesError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: resources, error: resourcesError} = useSWR(
    [environmentId, contentType, token?.access_token, pageNumber],
    (environmentId, contentType, token, pageNumber) => getResources(token as string, environmentId, contentType, pageNumber),
  )

  return {resources, resourcesError, token}
}
