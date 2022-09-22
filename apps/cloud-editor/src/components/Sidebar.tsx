import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { FaFire, FaPhotoVideo, FaRegClock } from 'react-icons/fa'
import { useCurrent } from '../hooks'

import Link from 'next/link'

export interface SidebarLinkProps {
  title: string
  href: string
  icon?: JSX.Element
  active?: boolean
}

export const SidebarLink = ({
  title,
  icon,
  href,
  active = false,
}: SidebarLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a className={`${active ? 'active' : null}`}>
          <span className="icon">{icon ?? <FaFire />}</span>
          <span>{title}</span>
        </a>
      </Link>
    </li>
  )
}

// const ContentTypeGroup = ({
//   items,
//   currentEnvironment,
//   currentProject,
//   kind,
// }: {
//   items: Record<string, ContentType>
//   currentEnvironment: Environment
//   currentProject: Project
//   kind: string
// }): JSX.Element => {
//   return (
//     <>
//       {Object.entries(items).map(([slug, contentType]) => (
//         <SidebarLink
//           key={slug}
//           title={contentType.name}
//           href={`/${currentProject.slug}/${currentEnvironment.slug}/${kind}/${slug}`}
//           active={
//             router.pathname ===
//               `/[projectId]/[environmentId]/${kind}/[contentTypeId]` &&
//             router.query?.contentTypeId?.toString().startsWith(slug)
//           }
//           icon={<FaFolder />}
//         />
//       ))}
//     </>
//   )
// }

export const Sidebar = (): ReactElement | null => {
  const router = useRouter()
  const { currentProject, currentEnvironment } = useCurrent()

  if (!currentProject || !currentEnvironment) {
    return null
  }

  // const contentTypes = currentSchema?.data?.content_types
  // const collections = contentTypes
  //   ? (Object.fromEntries(
  //       Object.entries(contentTypes).filter(
  //         ([slug, ct]) => ct.kind === 'collection'
  //       )
  //     ) as Record<string, ContentType>)
  //   : undefined

  // const components = contentTypes
  //   ? (Object.fromEntries(
  //       Object.entries(contentTypes).filter(
  //         ([slug, ct]) => ct.kind === 'component'
  //       )
  //     ) as Record<string, ContentType>)
  //   : undefined

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

          {/* {collections && Object.keys(collections).length > 0 ? (
            <>
              <li className="separator">Collections</li>
              <ContentTypeGroup
                items={collections}
                currentEnvironment={currentEnvironment}
                currentProject={currentProject}
                kind="collections"
              />
            </>
          ) : null}

          {components && Object.keys(components).length > 0 ? (
            <>
              <li className="separator">Components</li>
              <ContentTypeGroup
                items={components}
                currentEnvironment={currentEnvironment}
                currentProject={currentProject}
                kind="component"
              />
            </>
          ) : null} */}
        </ul>
      </nav>
    </aside>
  )
}
