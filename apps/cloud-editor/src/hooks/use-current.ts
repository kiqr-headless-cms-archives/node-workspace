import {
  useEnvironments,
  useProjects,
  useSchema,
  useSession,
} from '@kiqr/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import type {
  ContentType,
  Environment,
  Project,
} from '@kiqr/management-api-sdk'

export const useCurrent = () => {
  const { query } = useRouter()
  const [project, setProject] = useState<Project | undefined>(undefined)
  const [environment, setEnvironment] = useState<Environment | undefined>(
    undefined
  )

  const [contentType, setContentType] = useState<ContentType | undefined>(
    undefined
  )

  const { user: currentUser } = useSession()
  const { environments } = useEnvironments()
  const { projects } = useProjects()
  const { schema } = useSchema(project?.id, environment?.schema_id)

  useEffect(() => {
    if (projects && query?.projectId) {
      const project = projects.find((p) => p.slug === query?.projectId)
      setProject(project)
    } else {
      setProject(undefined)
    }
  }, [projects, query?.projectId])

  useEffect(() => {
    if (environments && query?.environmentId) {
      const environment = environments.find(
        (e) => e.slug === query?.environmentId && e.project_id === project?.id
      )
      setEnvironment(environment)
    } else {
      setEnvironment(undefined)
    }
  }, [environments, query?.environmentId, project])

  useEffect(() => {
    const contentType = schema?.data?.content_types?.find(
      (ct) => ct.id === query.contentTypeId
    )

    if (schema && contentType) {
      setContentType(contentType)
    } else {
      setContentType(undefined)
    }
  }, [query?.contentTypeId, schema])

  return {
    projects,
    currentEnvironment: environment,
    currentProject: project,
    currentSchema: schema,
    currentContentType: contentType,
    currentUser,
  }
}
