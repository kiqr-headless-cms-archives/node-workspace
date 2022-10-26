import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Project, ProjectsApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

export const getProjects = async (accessToken: string): Promise<Project[]> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ProjectsApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getProjects()
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useProjects = () : {
  projects: Project[],
  projectsError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: projects, error: projectsError} = useSWR(
    [token?.access_token, '/projects'],
    getProjects,
  )

  return {projects, projectsError, token}
}
