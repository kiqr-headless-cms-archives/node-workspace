import type { NextPage } from 'next'

import { Heading } from '@kiqr/core'

import { PageTitle } from '../../../components'
import { useCurrent } from '../../../hooks'

const EnvironmentDashboard: NextPage = () => {
  const { currentProject } = useCurrent()

  return (
    <>
      {currentProject ? <PageTitle segments={['Dashboard']} /> : null}
      <Heading
        title={currentProject?.name ? currentProject.name : undefined}
        subtitle={'This is a project page'}
      />
    </>
  )
}

export default EnvironmentDashboard
