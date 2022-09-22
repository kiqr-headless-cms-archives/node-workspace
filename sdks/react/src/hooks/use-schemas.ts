import { useContext } from 'react'
import { KiqrContext } from '../'

import useSWR from 'swr'
import { getSchemas } from '../requests'

export const useSchemas = (projectId: string | undefined = undefined) => {
  const { token } = useContext(KiqrContext)
  const { data: schemas, error: schemasError } = useSWR(
    [projectId, token?.access_token],
    (projectId, token) => getSchemas(token as string, projectId as string)
  )

  return { schemas, schemasError, token }
}
