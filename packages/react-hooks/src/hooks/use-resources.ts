import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi, ResourcesResponse, ResponseMetaPagination} from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getResources = async (
  accessToken: string,
  environmentId: string,
  contentType: string,
  pageNumber: number,
): Promise<ResourcesResponse> => {
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
  pagination: ResponseMetaPagination,
  loading: boolean
} => {
  const {token} = useContext(KiqrContext)
  const {data, error: resourcesError} = useSWR(
    [environmentId, contentType, token?.access_token, pageNumber],
    (environmentId, contentType, token, pageNumber) => getResources(token as string, environmentId, contentType, pageNumber),
  )

  const resources = data ? data?.results : []
  const pagination = data ? data.meta.pagination : undefined

  const loading = !data

  return {resources, pagination, resourcesError, loading}
}
