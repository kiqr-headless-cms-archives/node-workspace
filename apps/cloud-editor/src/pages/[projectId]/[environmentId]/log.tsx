import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'

import { PageTitle } from '../../../components'
import { useCurrent } from '../../../hooks'

const ActivityLog: NextPage = () => {
  const { currentProject } = useCurrent()

  return (
    <>
      <PageTitle segments={['Activity log']} />
      <Heading title="Activity log" subtitle={undefined} />
    </>
  )
}

export default ActivityLog
