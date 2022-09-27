import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getResources = async (
  accessToken: string,
  projectId: string,
  environmentId: string,
  contentType: string,
): Promise<Resource[]> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ResourcesApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getResources(projectId, environmentId, contentType)
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useResources = (projectId: string | undefined, environmentId: string | undefined, contentType: string | undefined) : {
  resources: Resource[],
  resourcesError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: resources, error: resourcesError} = useSWR(
    [projectId, environmentId, contentType, token?.access_token],
    (projectId, environmentId, contentType, token) => getResources(token as string, projectId as string, environmentId, contentType),
  )

  return {resources, resourcesError, token}
}
