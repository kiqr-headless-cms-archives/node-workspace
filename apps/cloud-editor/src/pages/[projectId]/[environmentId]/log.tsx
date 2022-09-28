import type { NextPage } from 'next'

import { Heading } from '@kiqr/react-components'
import { PageTitle } from '../../../components'

const ActivityLog: NextPage = () => {
  return (
    <>
      <PageTitle segments={['Activity log']} />
      <Heading title="Activity log" subtitle={undefined} />
    </>
  )
}

export default ActivityLog
