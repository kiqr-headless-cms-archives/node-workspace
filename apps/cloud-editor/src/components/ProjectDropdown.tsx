import { Project } from '@kiqr/management-api-sdk'
import { Dropdown } from '@kiqr/react'
import { ReactElement } from 'react'

export const ProjectDropdown = ({
  projects,
  currentProject,
  environment = undefined,
}: {
  projects: Project[] | undefined
  currentProject: Project | undefined
  environment?: string
}): ReactElement => {
  if (projects && currentProject) {
    return (
      <Dropdown
        line1={currentProject.name}
        line2={environment}
        avatarUrl={`https://avatars.dicebear.com/api/initials/${currentProject.name}.svg`}
      />
    )
  } else if (projects) {
    return <Dropdown line1="Select a project" line2="or create a new project" />
  }

  return <Dropdown />
}
