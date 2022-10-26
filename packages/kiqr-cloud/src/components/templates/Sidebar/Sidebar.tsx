import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FaFire, FaPhotoVideo, FaRegClock } from 'react-icons/fa'

export interface SidebarLinkProps {
  title: string
  href: string
  icon?: ReactNode
  active?: boolean
}

export const SidebarLink = ({
  title,
  href,
  icon,
  active = false,
}: SidebarLinkProps) => {
  return (
    <Link
      className={`flex px-5 items-center text-xs text-primary-700 py-4 overflow-hidden hover:bg-neutral-100 border-b ${
        active ? 'font-bold bg-neutral-100' : null
      }`}
      href={href}
    >
      <span className="flex items-center justify-center w-4 h-4 mr-4">
        {icon ? icon : null}
      </span>
      <span>{title}</span>
    </Link>
  )
}

export const Sidebar = () => {
  const router = useRouter()

  const currentProject = {
    slug: 'foobar',
  }

  const currentEnvironment = {
    slug: 'development',
  }

  return (
    <nav className="flex flex-col">
      <SidebarLink
        href={`/${currentProject.slug}/${currentEnvironment.slug}`}
        title="Dashboard"
        icon={<FaFire />}
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
    </nav>
  )
}
