import { Configuration, SchemasApi } from '@kiqr/management-api-sdk'

import type { SchemaExtended } from '@kiqr/management-api-sdk'

export const getSchema = async (
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
