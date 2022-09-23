import { FaFire } from 'react-icons/fa'

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
