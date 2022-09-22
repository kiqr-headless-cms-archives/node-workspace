import { useContext } from 'react'
import { KiqrContext } from '../'

import useSWR from 'swr'
import { getSchema } from '../requests'

export const useSchema = (
  projectId: string | undefined = undefined,
  id: string | undefined = undefined
) => {
  const { token } = useContext(KiqrContext)
  const { data: schema, error: schemaError } = useSWR(
    [projectId, id, token?.access_token],
    (projectId, id, token) =>
      getSchema(token as string, projectId as string, id as string)
  )

  return { schema, schemaError, token }
}
