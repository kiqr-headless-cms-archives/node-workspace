import { Box, Button, Column, Heading, Padding, Row, Table } from '@kiqr/irelia'
import { Component } from '@kiqr/management-api-sdk'
import inflection from 'inflection'
import { useState } from 'react'
import { useFieldArray } from 'react-hook-form'
import { FaEdit, FaPlusCircle, FaWindowMinimize } from 'react-icons/fa'
import { useCurrent } from '../../hooks'
import { FieldRenderer } from './FieldRenderer'

interface ComponentRendererProps {
  rootFieldName: string
  componentId: string
  control: any
  register: any
  errors: any
  watch: any
  repeatable: boolean
}

export const ComponentRenderer = (
  props: ComponentRendererProps
): JSX.Element => {
  const {
    rootFieldName,
    componentId,
    control,
    register,
    errors,
    repeatable,
    watch,
  } = props
  const { currentSchema } = useCurrent()

  const component = currentSchema?.data.components?.find(
    (c) => c.id === componentId
  )

  const BaseComponent = ({ component }: { component: Component }) => (
    <>
      {component.fields.map((field) => (
        <FieldRenderer
          key={field.id}
          name={`content[${rootFieldName}][${field.id}]`}
          control={control}
          field={field}
          register={register}
          errors={errors}
          component={component}
        />
      ))}
    </>
  )

  const RepeatableComponent = ({ component }: { component: Component }) => {
    const { currentContentType } = useCurrent()
    const [selectedIndex, setSelectedIndex] = useState<number>()

    const { fields: formRows, move } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: `content[${component.id}]`, // unique name for your Field Array
    })

    const EditRowModal = () => {
      return (
        <div className="fixed flex items-center justify-center h-screen top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-50 z-50">
          <Box className="relative w-1/2 max-h-[75vh] overflow-scroll">
            <div className="absolute top-10 right-10">
              <Button
                onClick={() => setSelectedIndex(undefined)}
                icon={<FaWindowMinimize />}
                size="sm"
                variant="primary"
              />
            </div>

            <Padding>
              <Heading
                title={component.name}
                subtitle={`Add a new ${inflection
                  .transform(component.name, ['humanize', 'singularize'])
                  .toLowerCase()}`}
                variant="box"
              />
            </Padding>

            {component.fields.map((field) => (
              <FieldRenderer
                key={field.id}
                name={`content[${component.id}][${selectedIndex}][${field.id}]`}
                control={control}
                field={field}
                register={register}
                errors={errors}
                component={component}
              />
            ))}
          </Box>
        </div>
      )
    }

    //uses move from useFieldArray to change the position of the form
    // const handleDrag = ({ source, destination }) => {
    //   console.log('lool', source, destination)
    //   if (destination) {
    //     move(source.index, destination.index)
    //   }
    // }

    return (
      <div className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative">
        <label
          className={
            'flex justify-between items-center text-primary-700 text-xs mb-3 uppercase'
          }
        >
          <span>{component.name}</span>
          <span>
            <Button size="xs" icon={<FaPlusCircle />}>
              Add a new{' '}
              {inflection
                .transform(component.name, ['humanize', 'singularize'])
                .toLocaleLowerCase()}
            </Button>
          </span>
        </label>

        {formRows.length > 0 ? (
          <Table
            title={inflection.transform(component.name, [
              'humanize',
              'pluralize',
            ])}
            subtitle={`Add, edit or remove ${inflection
              .transform(component.name, ['humanize', 'pluralize'])
              .toLocaleLowerCase()}`}
          >
            <thead>
              <Row>
                <Column variant="th"></Column>
                {component.fields.slice(0, 4).map((field) => (
                  <Column key={field.id} variant="th">
                    {field.label}
                  </Column>
                ))}
                <Column variant="th"></Column>
              </Row>
            </thead>
            <tbody>
              {(formRows as Record<string, string | number | boolean>[]).map(
                (row, rowIndex) => {
                  return (
                    <Row key={row.id as string}>
                      <Column className="w-0 text-center font-bold">
                        {rowIndex + 1}
                      </Column>
                      {component.fields.slice(0, 4).map((field) => (
                        <Column key={field.id}>{row[field.id]}</Column>
                      ))}
                      <Column>
                        <Button
                          size="xs"
                          onClick={() => setSelectedIndex(rowIndex)}
                          icon={<FaEdit />}
                        />
                      </Column>
                    </Row>
                  )
                }
              )}
            </tbody>
          </Table>
        ) : (
          <div className="text-neutral-400 text-xs">
            No{' '}
            {inflection
              .transform(component.name, ['humanize', 'pluralize'])
              .toLocaleLowerCase()}{' '}
            found for this{' '}
            {currentContentType?.name
              ? inflection
                  .transform(currentContentType.name as string, [
                    'humanize',
                    'singularize',
                  ])
                  .toLocaleLowerCase()
              : null}
          </div>
        )}

        {selectedIndex !== undefined ? <EditRowModal /> : null}
      </div>
    )
  }

  if (!component) {
    return (
      <div
        key={rootFieldName}
        className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative"
      >
        <label
          htmlFor={rootFieldName}
          className={'text-primary-700 text-xs mb-3 uppercase'}
        >
          {componentId}
        </label>
        <div className="text-rose-500 text-xs">
          Missing component: <strong>{componentId}</strong>
        </div>
      </div>
    )
  }

  if (repeatable) {
    return <RepeatableComponent component={component} />
  }

  return <BaseComponent component={component} />
}
