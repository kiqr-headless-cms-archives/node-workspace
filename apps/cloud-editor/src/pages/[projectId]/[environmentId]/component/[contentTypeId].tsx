import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'

import { PageTitle } from '../../../../components'
import { useCurrent } from '../../../../hooks'

const ContentTypePage: NextPage = () => {
  const { currentContentType, currentProject } = useCurrent()

  return (
    <>
      {currentProject && currentContentType ? (
        <PageTitle segments={[currentContentType.name]} />
      ) : null}
      <Heading
        title={currentContentType?.name ? currentContentType.name : undefined}
        subtitle={
          currentContentType
            ? `Settings for component "${currentContentType.name}"`
            : undefined
        }
      />
      Content type:
      <pre>{JSON.stringify(currentContentType, null, 2)}</pre>
    </>
  )
}

export default ContentTypePage
