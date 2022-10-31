import Link from 'next/link'
import { ReactNode } from 'react'

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
