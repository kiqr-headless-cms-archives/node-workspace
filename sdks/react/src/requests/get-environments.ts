import {
  Configuration,
  Environment,
  EnvironmentsApi
} from '@kiqr/management-api-sdk'

export const getEnvironments = async (
  accessToken: string
): Promise<Environment[]> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new EnvironmentsApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getEnvironments()
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}
