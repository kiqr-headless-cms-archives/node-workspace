import {useContext} from 'react'
import {KiqrContext} from '../kiqr-context'
import {Configuration, Project, ProjectsApi} from '@kiqr/management-api-sdk'

import useSWR from 'swr'
import {Oauth2Token} from '../oauth2-config'

const getProject = async (
  accessToken: string,
  projectId: string,
): Promise<Project> => {
  const configuration = new Configuration({accessToken: accessToken})
  const api = new ProjectsApi(configuration)

  return new Promise((resolve, reject) => {
    api
    .getProject(projectId)
    .then(response => resolve(response.data))
    .catch(error => reject(error.message))
  })
}

export const useProject = (projectId: string) : {
  project: Project,
  projectError: any,
  token: Oauth2Token
} => {
  const {token} = useContext(KiqrContext)
  const {data: project, error: projectError} = useSWR(
    [token?.access_token, projectId],
    (token, projectId) => getProject(token as string, projectId as string),
  )

  return {project, projectError, token}
}
