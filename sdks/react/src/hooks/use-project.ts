import { useContext } from 'react'
import { KiqrContext } from '../'
import { getProject } from '../requests'

import useSWR from 'swr'

export const useProject = (projectId: string) => {
  const { token } = useContext(KiqrContext)
  const { data: project, error: projectsError } = useSWR(
    [token?.access_token, projectId],
    (token, projectId) => getProject(token as string, projectId as string)
  )

  return { project, projectsError, token }
}
