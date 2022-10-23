import type { NextPage } from 'next'

import { Box, Button, Card, Heading, LocalTime } from '@kiqr/react-components'
import { PageTitle } from '../../../../components'
import { useCurrent } from '../../../../hooks'
import { useResources } from '@kiqr/react-hooks'
import { FaCircle, FaPlusCircle } from 'react-icons/fa'

import Image from 'next/image'
import inflection from 'inflection'
import Link from 'next/link'

import { Pagination } from '../../../../components/atoms/Pagination/Pagination'
import { useState } from 'react'

const ContentTypePage: NextPage = () => {
  const { currentContentType, currentEnvironment, currentProject } =
    useCurrent()

  const [page, setPage] = useState(1)
  const { resources, pagination } = useResources(
    currentEnvironment?.id,
    currentContentType?.id,
    page
  )

  const singularizedContentTypeName = currentContentType
    ? inflection
        .transform(currentContentType?.name, ['singularize'])
        ?.toLowerCase()
    : null

  const pluralizedContentTypeName = currentContentType
    ? inflection
        .transform(currentContentType?.name, ['pluralize'])
        ?.toLowerCase()
    : null

  return (
    <>
      {currentProject && currentContentType ? (
        <PageTitle segments={[currentContentType.name, 'List']} />
      ) : null}
      <Heading
        title={currentContentType?.name ? currentContentType.name : undefined}
        subtitle={
          currentContentType
            ? `Listing all resources in collection "${currentContentType.name}"`
            : undefined
        }
      >
        <Link
          href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/new`}
        >
          <a>
            <Button
              icon={<FaPlusCircle />}
              text={`New ${singularizedContentTypeName}`}
              type="primary"
            />
          </a>
        </Link>
      </Heading>

      {/*<div className="flex items-center bg-primary-800 p-2 text-xs gap-x-2 rounded">
        <div className="bg-primary-900 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
          <FaLink />
        </div>
        <strong className="text-white">GET</strong>
        <a target="_blank" className="text-white" href="#">
          {`https://content.kiqr.cloud/v1/${currentProject?.slug}/collections/${query?.contentTypeId}`}
        </a>
      </div>*/}

      {currentContentType && resources?.length == 0 ? (
        <Box>
          <div className="container mx-auto py-24">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div className="max-w-md mx-auto">
                  <h2 className="mb-8 text-4xl md:text-5xl font-heading font-bold text-neutral-900 md:leading-15">
                    Get started now by creating your first{' '}
                    <span className="text-primary-700">
                      {singularizedContentTypeName}
                    </span>
                    .
                  </h2>
                  <p className="text-lg text-slate-400 mb-8">
                    We couldn&apos;t find any{' '}
                    <strong>{pluralizedContentTypeName}</strong> in the{' '}
                    database. Get started now by creating a new{' '}
                    {singularizedContentTypeName} or import a collection of{' '}
                    {pluralizedContentTypeName}.
                  </p>
                  <div className="gap-x-5 flex">
                    <Link
                      href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/new`}
                    >
                      <a>
                        <Button
                          text={`Create ${singularizedContentTypeName}`}
                          type="primary"
                          size="lg"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex pr-20">
                <div className="flex relative flex-1 items-center justify-center">
                  <Image
                    src="/assets/images/undraw_elements.svg"
                    alt=""
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>
        </Box>
      ) : null}

      {resources && resources?.length > 0 ? (
        <Card
          title="All"
          subtitle={
            pagination
              ? `Displaying page ${pagination.page} of ${pagination.pages}`
              : `Loading ${pluralizedContentTypeName}..`
          }
        >
          <table className="table border-t">
            <thead>
              <tr>
                <th className="mini"></th>
                <th>Name</th>
                <th>Updated at</th>
                <th>Created at</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource) => (
                <tr key={resource.id}>
                  <td className="mini">
                    <FaCircle />
                  </td>
                  <td>
                    <Link
                      href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${resource.slug}`}
                    >
                      <a>{resource.name}</a>
                    </Link>
                  </td>
                  <td>
                    <LocalTime at={resource.updated_at} />
                  </td>
                  <td>
                    <LocalTime at={resource.created_at} />
                  </td>
                  <td className="actions">
                    <Link
                      href={`/${currentProject?.slug}/${currentEnvironment?.slug}/collections/${currentContentType?.id}/resources/${resource.slug}`}
                    >
                      <a>
                        <Button text="Edit" size="xs" />
                      </a>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : null}

      {pagination ? (
        <Pagination pagination={pagination} setPage={setPage} />
      ) : null}
    </>
  )
}

export default ContentTypePage
