import { HtmlEditor } from '@kiqr/irelia'
import { Controller } from 'react-hook-form'
import { FieldProps, FormError } from '../fields'

export const EditorField: React.FC<FieldProps> = (props) => {
  return (
    <>
      <Controller
        control={props.control}
        name={`content[${props.field.id}]`}
        render={({ field }) =>
          field.value !== undefined ? (
            <HtmlEditor initialValue={field.value} onChange={field.onChange} />
          ) : (
            <>test: {JSON.stringify(field.value === undefined)}</>
          )
        }
      />
      {props.errors?.content?.[props.field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )
}
