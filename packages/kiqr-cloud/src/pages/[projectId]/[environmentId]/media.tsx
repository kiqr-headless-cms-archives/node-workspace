import type { NextPage } from 'next'

import { Heading } from '@kiqr/irelia'
import { PageTitle } from '../../../components'

const MediaGalleryPage: NextPage = () => {
  return (
    <>
      <PageTitle segments={['Media library']} />
      <Heading title="Media library" subtitle={undefined} />
    </>
  )
}

export default MediaGalleryPage
