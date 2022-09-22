import { Configuration, SchemasApi } from '@kiqr/management-api-sdk'
import { SchemaWithData } from '../types'

export const getSchema = async (
  accessToken: string,
  projectId: string,
  id: string
): Promise<SchemaWithData> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new SchemasApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getSchema(id, projectId)
      .then((response) => {
        resolve(response.data as SchemaWithData)
      })
      .catch((error) => reject(error.message))
  })
}
