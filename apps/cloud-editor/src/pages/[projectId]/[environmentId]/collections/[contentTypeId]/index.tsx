import type { NextPage } from 'next'

import { Box, Button, Card, Heading } from '@kiqr/react'
import { PageTitle } from '../../../../../components'
import { useCurrent } from '../../../../../hooks'

import Image from 'next/image'
import inflection from 'inflection'

const ContentTypePage: NextPage = () => {
  const { currentContentType, currentProject } = useCurrent()
  
  const resources: string[] = []

  const singularizedContentTypeName = currentContentType
    ? inflection.transform(currentContentType?.name, ['singularize'])?.toLowerCase()
    : null

  const pluralizedContentTypeName = currentContentType
    ? inflection.transform(currentContentType?.name, ['pluralize'])?.toLowerCase()
    : null

  return (
    <>
      {currentProject && currentContentType ? (
        <PageTitle segments={[currentContentType.name]} />
      ) : null}
      <Heading
        title={currentContentType?.name ? currentContentType.name : undefined}
        subtitle={
          currentContentType
            ? `Listing all resources in collection "${currentContentType.name}"`
            : undefined
        }
      />

      {/*<div className="flex items-center bg-primary-800 p-2 text-xs gap-x-2 rounded">
        <div className="bg-primary-900 text-white mr-1 w-8 h-8 rounded flex items-center justify-center">
          <FaLink />
        </div>
        <strong className="text-white">GET</strong>
        <a target="_blank" className="text-white" href="#">
          {`https://content.kiqr.cloud/v1/${currentProject?.slug}/collections/${query?.contentTypeId}`}
        </a>
      </div>*/}

      {currentContentType ? (
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
                    {singularizedContentTypeName}{' '}
                    or import a collection of {pluralizedContentTypeName}.
                  </p>
                  <div className="gap-x-5 flex">
                    <Button
                      text={`Create ${singularizedContentTypeName}`}
                      type="primary"
                      size="lg"
                    />
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
          subtitle={`Displaying ${0} of ${0} resources in this collection.`}
        >
          <table className="table border-t">
            <thead>
              <tr>
                <th className="mini"></th>
                <th>Name</th>
                <th>Updated at</th>
                <th>Created at</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </Card>
      ) : null}
    </>
  )
}

export default ContentTypePage
