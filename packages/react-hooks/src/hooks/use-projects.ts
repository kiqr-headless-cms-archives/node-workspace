import { useContext } from 'react'
import { KiqrContext } from '../kiqr-context'
import { Configuration, Project, ProjectsApi } from '@kiqr/management-api-sdk'

import useSWR from 'swr'

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

export const useProjects = () => {
  const { token } = useContext(KiqrContext)
  const { data: projects, error: projectsError } = useSWR(
    [token?.access_token, '/projects'],
    getProjects
  )

  return { projects, projectsError, token }
}
