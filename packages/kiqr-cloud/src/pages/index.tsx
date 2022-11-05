import { Heading } from '@kiqr/irelia'
import { useCurrent, useProjects } from '../hooks'
import { ProjectStack } from '../components'

export default function Home() {
  const { currentUser } = useCurrent()
  const { projects } = useProjects()

  return (
    <>
      <Heading
        title={
          currentUser?.name ? `Welcome back, ${currentUser?.name}!` : undefined
        }
        subtitle="Select one of your projects below to continue:"
      />

      {projects ? (
        <ProjectStack projects={projects} isLoading={!projects} />
      ) : null}
    </>
  )
}
