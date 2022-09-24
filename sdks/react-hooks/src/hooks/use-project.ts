import { useContext } from 'react'
import { KiqrContext } from '../kiqr-context'
import { Configuration, Project, ProjectsApi } from '@kiqr/management-api-sdk'

import useSWR from 'swr'

const getProject = async (
  accessToken: string,
  projectId: string
): Promise<Project> => {
  const configuration = new Configuration({ accessToken: accessToken })
  const api = new ProjectsApi(configuration)

  return new Promise((resolve, reject) => {
    return api
      .getProject(projectId)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.message))
  })
}

export const useProject = (projectId: string) => {
  const { token } = useContext(KiqrContext)
  const { data: project, error: projectsError } = useSWR(
    [token?.access_token, projectId],
    (token, projectId) => getProject(token as string, projectId as string)
  )

  return { project, projectsError, token }
}
