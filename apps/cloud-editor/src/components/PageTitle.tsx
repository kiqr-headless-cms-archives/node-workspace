import Head from 'next/head'
import { useCurrent } from '../hooks'

export const PageTitle = ({ segments }: { segments: string[] }) => {
  const { currentProject } = useCurrent()

  segments = segments.filter(Boolean)
  let suffix = segments && segments.length > 0 ? '— KIQR' : 'KIQR'

  if (currentProject) {
    suffix = `- ${currentProject.name} ${suffix}`
  }

  return (
    <Head>
      <title>
        {segments
          .map((segment) => {
            return segment.charAt(0).toUpperCase() + segment.slice(1)
          })
          .join(' › ')}{' '}
        {suffix}
      </title>
    </Head>
  )
}
