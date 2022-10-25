/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from '@kiqr/irelia'
import { FaGoogle, FaWrench } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { FormError, Field } from '..'
import { useCurrent } from '../../hooks'

import inflection from 'inflection'

export interface ResourceFormProps {
  register: any
  errors: any
}

export const ResourceForm = ({ register, errors }: ResourceFormProps) => {
  const { currentContentType } = useCurrent()
  if (!currentContentType) return null

  const singularizedContentTypeName = currentContentType
    ? inflection
        .transform(currentContentType.name, ['singularize'])
        ?.toLowerCase()
    : null

  return (
    <Tabs>
      <Card title="General" subtitle="Edit general settings">
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
              <Tab
                selectedClassName="font-bold text-primary-700 bg-neutral-50"
                className="flex w-full px-5 py-4 items-center gap-x-1 text-xs border-b cursor-pointer"
              >
                <div className="mr-3">
                  <FaGoogle />
                </div>
                <span>SEO</span>
              </Tab>
            </TabList>
          </aside>
          <main className="flex-1">
            <TabPanel>
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="name"
                  className="font-bold text-primary-700 text-xs mb-2 uppercase required"
                >
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
                  placeholder={`Give your ${singularizedContentTypeName} a name`}
                />
                {errors?.name && <FormError message="This field is required" />}
              </div>
              <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
                <label
                  htmlFor="slug"
                  className="font-bold text-primary-700 text-xs mb-2 uppercase required"
                >
                  Permalink
                </label>
                <input
                  type="text"
                  {...register('slug', {
                    required: true,
                    pattern: /^[A-Za-z0-9\-_]+$/i,
                  })}
                  className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
                  placeholder={`Give your ${singularizedContentTypeName} a url friendly slug`}
                />
                {errors?.slug && <FormError message="This field is required" />}
              </div>
              {currentContentType.fields.map((field) => (
                <Field
                  key={field.id}
                  field={field}
                  register={register}
                  errors={errors}
                />
              ))}
            </TabPanel>
            <TabPanel>
              {currentContentType.fields.map((field) => (
                <Field
                  key={field.id}
                  field={field}
                  register={register}
                  errors={errors}
                />
              ))}
            </TabPanel>
          </main>
        </div>
      </Card>
    </Tabs>
  )
}
