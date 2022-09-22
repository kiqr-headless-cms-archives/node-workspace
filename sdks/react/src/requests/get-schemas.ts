import { Configuration, Schema, SchemasApi } from '@kiqr/management-api-sdk'

export const getSchemas = async (
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
