import { FieldProps, FormError } from '../fields'

export const TextareaField: React.FC<FieldProps> = (props) => {
  const { field, register, errors } = props

  return (
    <>
      <textarea
        type="text"
        rows="3"
        {...register(`content[${field.id}]`, { required: field.required })}
        className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
        placeholder={`Enter a text for "${field.label.toLowerCase()}"`}
      ></textarea>

      {errors?.content?.[field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )
}
