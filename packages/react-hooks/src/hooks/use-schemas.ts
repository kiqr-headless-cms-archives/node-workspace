import { useContext } from 'react'
import { KiqrContext } from '../kiqr-context'
import { Configuration, Schema, SchemasApi } from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getSchemas = async (
  accessToken: string,
  projectId: string
): Promise<Schema[]> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new SchemasApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getSchemas(projectId)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}

export const useSchemas = (projectId: string | undefined = undefined) => {
  const { token } = useContext(KiqrContext)
  const { data: schemas, error: schemasError } = useSWR(
    [projectId, token?.access_token],
    (projectId, token) => getSchemas(token as string, projectId as string)
  )

  return { schemas, schemasError, token }
}
