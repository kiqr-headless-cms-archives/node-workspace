import router, { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { FaFolder, FaPhotoVideo, FaRegClock } from 'react-icons/fa'
import { useCurrent } from '../hooks'
import { SidebarLink } from './SidebarLink'

import type {
  ContentType,
  Environment,
  Project,
} from '@kiqr/management-api-sdk'

const ContentTypeGroup = ({
  contentTypes,
  currentEnvironment,
  currentProject,
}: {
  contentTypes: ContentType[]
  currentEnvironment: Environment
  currentProject: Project
}): JSX.Element => {
  const collectionHref = (contentType: ContentType) => {
    return `/${currentProject.slug}/${currentEnvironment.slug}/collections/${contentType.id}`
  }

  const collectionActive = (contentType: ContentType) => {
    return (
      router.pathname ===
        '/[projectId]/[environmentId]/collections/[contentTypeId]' &&
      router.query?.contentTypeId?.toString().startsWith(contentType.id)
    )
  }

  return (
    <>
      {contentTypes.map((contentType) => (
        <SidebarLink
          key={contentType.id}
          title={contentType.name}
          href={collectionHref(contentType)}
          active={collectionActive(contentType)}
          icon={<FaFolder />}
        />
      ))}
    </>
  )
}

export const Sidebar = (): ReactElement | null => {
  const router = useRouter()
  const { currentProject, currentEnvironment, currentSchema } = useCurrent()

  if (!currentProject || !currentEnvironment) {
    return null
  }

  const contentTypes = currentSchema?.data?.content_types
  const collections = Array.isArray(contentTypes)
    ? contentTypes.filter((ct) => ct.kind === 'collection')
    : []
  const components = Array.isArray(contentTypes)
    ? contentTypes?.filter((ct) => ct.kind === 'component')
    : []

  return (
    <aside id="sidebar" className="w-56 border-r bg-white">
      <nav>
        <ul>
          <SidebarLink
            href={`/${currentProject.slug}/${currentEnvironment.slug}`}
            title="Dashboard"
            active={router.pathname === '/[projectId]/[environmentId]'}
          />
          <SidebarLink
            href={`/${currentProject.slug}/${currentEnvironment.slug}/media`}
            title="Media library"
            icon={<FaPhotoVideo />}
            active={router.pathname === '/[projectId]/[environmentId]/media'}
          />
          <SidebarLink
            href={`/${currentProject.slug}/${currentEnvironment.slug}/log`}
            title="Activity log"
            icon={<FaRegClock />}
            active={router.pathname === '/[projectId]/[environmentId]/log'}
          />

          {collections && collections.length > 0 ? (
            <>
              <li className="separator">Collections</li>
              <ContentTypeGroup
                contentTypes={collections}
                currentEnvironment={currentEnvironment}
                currentProject={currentProject}
              />
            </>
          ) : null}

          {components && components.length > 0 ? (
            <>
              <li className="separator">Components</li>
              <ContentTypeGroup
                contentTypes={components}
                currentEnvironment={currentEnvironment}
                currentProject={currentProject}
              />
            </>
          ) : null}
        </ul>
      </nav>
    </aside>
  )
}
