import { Configuration, User, UserApi } from '@kiqr/management-api-sdk'

export const getUser = async (accessToken: string): Promise<User> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new UserApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getUser()
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}
