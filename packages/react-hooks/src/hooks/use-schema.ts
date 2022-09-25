import { useContext } from 'react'
import { KiqrContext } from '../kiqr-context'
import { Configuration, SchemaExtended, SchemasApi } from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getSchema = async (
  accessToken: string,
  projectId: string,
  id: string
): Promise<SchemaExtended> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new SchemasApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getSchema(id, projectId)
      .then((response) => {
        resolve(response.data as SchemaExtended)
      })
      .catch((error) => reject(error.message))
  })
}

export const useSchema = (
  projectId: string | undefined = undefined,
  id: string | undefined = undefined
) => {
  const { token } = useContext(KiqrContext)
  const { data: schema, error: schemaError } = useSWR(
    [projectId, id, token?.access_token],
    (projectId, id, token) =>
      getSchema(token as string, projectId as string, id as string)
  )

  return { schema, schemaError, token }
}
