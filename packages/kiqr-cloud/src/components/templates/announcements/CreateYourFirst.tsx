import { Announcement, Button } from '@kiqr/irelia'

import Image from 'next/image'
import inflection from 'inflection'
import Link from 'next/link'

export interface CreateYourFirstAnnouncementProps {
  contentTypeName: string
  href: string
}

export const CreateYourFirstAnnouncement = ({
  contentTypeName,
  href,
}: CreateYourFirstAnnouncementProps) => {
  const singularizedContentTypeName = inflection
    .transform(contentTypeName, ['singularize'])
    ?.toLowerCase()

  const pluralizedContentTypeName = inflection
    .transform(contentTypeName, ['pluralize'])
    ?.toLowerCase()

  return (
    <Announcement
      title={
        <>
          Get started now by creating your first{' '}
          <span className="text-primary-700">
            {singularizedContentTypeName}
          </span>
          .
        </>
      }
      paragraph={
        <>
          We couldn&apos;t find any <strong>{pluralizedContentTypeName}</strong>{' '}
          in the database. Get started now by creating a new{' '}
          {singularizedContentTypeName} or import a collection of{' '}
          {pluralizedContentTypeName}.
        </>
      }
      button={
        <>
          <Link href={href}>
            <a>
              <Button variant="primary" size="lg">
                {`Create ${singularizedContentTypeName}`}
              </Button>
            </a>
          </Link>
        </>
      }
      image={
        <>
          <Image
            src="/assets/images/undraw_elements.svg"
            alt=""
            layout="fill"
          />
        </>
      }
    />
  )
}
