import type { NextPage } from 'next'
import Head from 'next/head'

import { Heading } from '@kiqr/react-components'
import { ProjectStack } from '../components'
import { useCurrent } from '../hooks'

const Dashboard: NextPage = () => {
  const { currentUser, projects } = useCurrent()

  return (
    <>
      <Head>
        <title>Select a project — KIQR</title>
      </Head>
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

export default Dashboard
