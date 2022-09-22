import type { NextPage } from 'next'

import { Heading } from '@kiqr/react'

import { PageTitle } from '../../../components'
import { useCurrent } from '../../../hooks'

const MediaGalleryPage: NextPage = () => {
  const { currentProject } = useCurrent()

  return (
    <>
      <PageTitle segments={['Media library']} />
      <Heading title="Media library" subtitle={undefined} />
    </>
  )
}

export default MediaGalleryPage
