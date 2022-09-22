import { Configuration, Project, ProjectsApi } from '@kiqr/management-api-sdk'

export const getProjects = async (accessToken: string): Promise<Project[]> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new ProjectsApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getProjects()
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}
