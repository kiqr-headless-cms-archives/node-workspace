import type { NextPage } from 'next'

import { Heading } from '@kiqr/irelia'
import { useCurrent } from '../../../hooks'

const EnvironmentDashboard: NextPage = () => {
  const { currentProject } = useCurrent()

  return (
    <>
      <Heading
        title={currentProject?.name}
        subtitle="This page will give you a great project overview"
      />
    </>
  )
}

export default EnvironmentDashboard
