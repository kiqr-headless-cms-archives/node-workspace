import Link from 'next/link'
import { ProjectCard } from './ProjectCard'

import type { Project } from '@kiqr/management-api-sdk'

interface ProjectStackProps {
  projects: Project[]
  isLoading: boolean
}

export const ProjectStack = ({ projects, isLoading }: ProjectStackProps) => {
  if (isLoading) return null

  return (
    <div className={'grid grid-cols-5 gap-5'}>
      {projects.map((project) => (
        <Link key={project.id} href={`/${project.slug}/development`}>
          <a>
            <ProjectCard project={project} />
          </a>
        </Link>
      ))}
    </div>
  )
}
