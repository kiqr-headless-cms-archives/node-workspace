/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Heading, Padding } from '@kiqr/irelia'
import { FaGoogle, FaWrench } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useCurrent } from '../../../hooks'

import inflection from 'inflection'
import { ComponentRenderer, FieldRenderer, FormError } from '../../fields'
import { useState } from 'react'

export interface ResourceEditorProps {
  register: any
  errors: any
  control: any
  watch: any
}

export const ResourceEditor = ({
  control,
  register,
  errors,
  watch,
}: ResourceEditorProps) => {
  const { currentContentType, currentSchema } = useCurrent()
  const [currentTabIndex, setTabIndex] = useState(0)

  if (!currentContentType) return null

  const singularizedContentTypeName = currentContentType
    ? inflection
        .transform(currentContentType.name, ['singularize'])
        ?.toLowerCase()
    : null

  const tabNames = [{ title: 'General', subtitle: 'General settings' }]

  return (
    <Tabs onSelect={(tabIndex: number) => setTabIndex(tabIndex)}>
      <Box p={0}>
        <Padding>
          <Heading
            title={tabNames[currentTabIndex].title}
            subtitle={tabNames[currentTabIndex].subtitle}
            variant="box"
          />
        </Padding>
        <div className="flex border-t">
          <aside className="border-r w-60">
            <TabList>
              <Tab
                selectedClassName="font-bold text-primary-700 bg-neutral-50"
                className="flex w-full px-5 py-4 items-center gap-x-1 text-xs border-b cursor-pointer"
              >
                <div className="mr-3">
                  <FaWrench />
                </div>
                <span>General</span>
              </Tab>
            </TabList>
          </aside>
          <main className="flex-1">
            <TabPanel>
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="name"
                  className="font-bold text-primary-700 text-xs mb-3 uppercase required"
                >
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-neutral-50 p-3 rounded"
                  placeholder={`Give your ${singularizedContentTypeName} a name`}
                />
                {errors?.name && <FormError message="This field is required" />}
              </div>
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="slug"
                  className="font-bold text-primary-700 text-xs mb-3 uppercase required"
                >
                  Permalink
                </label>
                <input
                  type="text"
                  {...register('slug', {
                    required: true,
                    pattern: /^[A-Za-z0-9\-_]+$/i,
                  })}
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-neutral-50 p-3 rounded"
                  placeholder={`Give your ${singularizedContentTypeName} a url friendly slug`}
                />
                {errors?.slug && <FormError message="This field is required" />}
              </div>
              {currentContentType.fields.map((field) =>
                field?.component ? (
                  <ComponentRenderer
                    key={field.id}
                    rootFieldName={field.id}
                    componentId={field.component}
                    control={control}
                    register={register}
                    errors={errors}
                    watch={watch}
                    repeatable={Boolean(field.repeatable)}
                  />
                ) : (
                  <FieldRenderer
                    key={field.id}
                    name={`content[${field.id}]`}
                    control={control}
                    field={field}
                    register={register}
                    errors={errors}
                  />
                )
              )}
            </TabPanel>
          </main>
        </div>
      </Box>
    </Tabs>
  )
}
