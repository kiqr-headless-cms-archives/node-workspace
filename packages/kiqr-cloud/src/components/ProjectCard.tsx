/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  AvatarStack,
  Card,
  Padding,
  Placeholder,
  ProgressBar,
} from '@kiqr/react-components'

import type { Project } from '@kiqr/management-api-sdk'

export interface ProjectCardProps {
  project?: Project | null
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      title={project?.name}
      subtitle={project ? 'Website / App' : ''}
      avatarUrl={
        project
          ? `https://avatars.dicebear.com/api/initials/${project?.name}.svg`
          : 'https://avatars.dicebear.com/api/initials/-.svg'
      }
    >
      <Padding theme="tinted">
        <div className="flex w-full items-center">
          <div className="flex w-1/2">
            {project ? (
              <AvatarStack spacing={-3}>
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/rk.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/ju.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/ts.svg"
                  type={'circle'}
                />
              </AvatarStack>
            ) : (
              <AvatarStack spacing={-3}>
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/-.svg"
                  type={'circle'}
                />
                <Avatar
                  src="https://avatars.dicebear.com/api/initials/_.svg"
                  type={'circle'}
                />
              </AvatarStack>
            )}
          </div>
          <div className="flex flex-col w-1/2 text-right text-xs text-slate-400 gap-y-1">
            <strong className="text-primary-700">
              {project?.id ? (
                'Project ID'
              ) : (
                <Placeholder length={10} size="small" />
              )}
            </strong>
            {project?.id || <Placeholder />}
          </div>
        </div>
      </Padding>
      <div className="p-5">
        <ProgressBar
          title={project ? 'Project status' : ''}
          statusText={'Lorem ipsum'}
          percentage={0}
        />
      </div>
    </Card>
  )
}
