import { FieldProps, FormError } from '../fields'

export const StringField: React.FC<FieldProps> = (props) => {
  const { field, register, errors } = props

  return (
    <>
      <input
        type="text"
        {...register(`content[${field.id}]`, { required: field.required })}
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
      />

      {errors?.content?.[field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )
}
