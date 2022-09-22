import { useContext } from 'react'
import { KiqrContext } from '../'
import { getProjects } from '../requests'

import useSWR from 'swr'

export const useProjects = () => {
  const { token } = useContext(KiqrContext)
  const { data: projects, error: projectsError } = useSWR(
    [token?.access_token, '/projects'],
    getProjects
  )

  return { projects, projectsError, token }
}
