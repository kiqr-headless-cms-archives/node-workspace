import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Resource, ResourcesApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getResourceVersions = async (
  accessToken: string,
  id: string,
  environmentId: string,
): Promise<Resource[]> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ResourcesApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getResourceVersions(id, environmentId)
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useResourceVersions = (id: string | undefined, environmentId: string | undefined) => {
  const {token} = useContext(KiqrContext)
  const {data: versions, error: versionsError, mutate} = useSWR(
    [id, environmentId, token?.access_token, 'versions'],
    (id, environmentId, token) => getResourceVersions(token as string, id, environmentId),
  )

  return {versions, versionsError, mutate, token}
}
