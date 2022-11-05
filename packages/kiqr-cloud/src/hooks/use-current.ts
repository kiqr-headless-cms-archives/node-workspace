import {
  useContentType,
  useProject,
  useProjectEnvironment,
  useProjectSchema,
  useUser,
} from '../hooks'
import { useRouter } from 'next/router'

export const useCurrent = () => {
  const query = useRouter().query

  const { user: currentUser, error: userError } = useUser()
  const { project: currentProject, error: projectError } = useProject(
    query?.projectId as string
  )

  const { environment: currentEnvironment, error: environmentError } =
    useProjectEnvironment(currentProject?.id, query?.environmentId as string)

  const { schema: currentSchema, error: schemaError } = useProjectSchema(
    currentProject?.id,
    currentEnvironment?.schema_id as string
  )

  const { contentType: currentContentType } = useContentType(
    currentSchema,
    query?.contentTypeId as string
  )

  return {
    currentUser,
    userError,
    currentProject,
    projectError,
    currentEnvironment,
    environmentError,
    currentSchema,
    schemaError,
    currentContentType,
  }
}
