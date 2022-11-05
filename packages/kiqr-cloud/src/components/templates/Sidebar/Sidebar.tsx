import { useRouter } from 'next/router'
import React from 'react'
import { FaFire, FaFolder, FaPhotoVideo, FaRegClock } from 'react-icons/fa'
import { SidebarLink } from '.'
import { useContentTypes, useCurrent } from '../../../hooks'

import type { ContentType } from '@kiqr/management-api-sdk'

export const Sidebar = () => {
  const router = useRouter()
  const { currentEnvironment, currentProject } = useCurrent()
  const { contentTypes } = useContentTypes()

  const collectionHref = (contentType: ContentType) => {
    return `/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${contentType.id}`
  }

  const collectionActive = (contentType: ContentType) => {
    return (
      router.pathname ===
        '/[projectId]/[environmentId]/collections/[contentTypeId]' &&
      router.query?.contentTypeId?.toString().startsWith(contentType.id)
    )
  }

  const collections = Array.isArray(contentTypes)
    ? contentTypes.filter((ct) => ct.kind === 'collection')
    : []

  const components = Array.isArray(contentTypes)
    ? contentTypes?.filter((ct) => ct.kind === 'component')
    : []

  return (
    <nav className="flex flex-col">
      <SidebarLink
        href={`/${currentProject?.slug}/${currentEnvironment?.slug}`}
        title="Dashboard"
        icon={<FaFire />}
        active={router.pathname === '/[projectId]/[environmentId]'}
      />
      <SidebarLink
        href={`/${currentProject?.slug}/${currentEnvironment?.slug}/media`}
        title="Media library"
        icon={<FaPhotoVideo />}
        active={router.pathname === '/[projectId]/[environmentId]/media'}
      />
      <SidebarLink
        href={`/${currentProject?.slug}/${currentEnvironment?.slug}/log`}
        title="Activity log"
        icon={<FaRegClock />}
        active={router.pathname === '/[projectId]/[environmentId]/log'}
      />

      <h5 className="p-5 pb-2.5 text-xs font-bold">Collections</h5>

      {collections &&
        collections.map((contentType) => (
          <SidebarLink
            key={contentType.id}
            title={contentType.name}
            href={collectionHref(contentType)}
            active={collectionActive(contentType)}
            icon={<FaFolder />}
          />
        ))}

      <h5 className="p-5 pb-2.5 text-xs font-bold">Components</h5>

      {components &&
        components.map((contentType) => (
          <SidebarLink
            key={contentType.id}
            title={contentType.name}
            href={collectionHref(contentType)}
            active={collectionActive(contentType)}
            icon={<FaFolder />}
          />
        ))}
    </nav>
  )
}
