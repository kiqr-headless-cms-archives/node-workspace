/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Avatar, Card, ProgressBar, Group } from '@kiqr/irelia'

import type { Project } from '@kiqr/management-api-sdk'

export interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      title={project.name}
      subtitle={project ? 'Website / App' : ''}
      avatarUrl={
        project
          ? `https://avatars.dicebear.com/api/initials/${project.name}.svg`
          : 'https://avatars.dicebear.com/api/initials/-.svg'
      }
    >
      <div className="flex w-full items-center py-5">
        <div className="flex w-1/2">
          {project ? (
            <Group spacing={-3}>
              <Avatar
                src="https://avatars.dicebear.com/api/initials/rk.svg"
                variant={'circle'}
              />
              <Avatar
                src="https://avatars.dicebear.com/api/initials/ju.svg"
                variant={'circle'}
              />
              <Avatar
                src="https://avatars.dicebear.com/api/initials/ts.svg"
                variant={'circle'}
              />
            </Group>
          ) : (
            <Group spacing={-3}>
              <Avatar
                src="https://avatars.dicebear.com/api/initials/.svg"
                variant={'circle'}
              />
              <Avatar
                src="https://avatars.dicebear.com/api/initials/-.svg"
                variant={'circle'}
              />
              <Avatar
                src="https://avatars.dicebear.com/api/initials/_.svg"
                variant={'circle'}
              />
            </Group>
          )}
        </div>
        <div className="flex flex-col w-1/2 text-right text-xs text-slate-400 gap-y-1">
          <strong className="text-primary-700">Quota</strong>
          Lorem ipsum dolor
        </div>
      </div>
      <div className="pt-5">
        <ProgressBar title={project ? 'Project status' : ''} percentage={0} />
      </div>
    </Card>
  )
}
