import { FieldProps, EditorField, StringField, TextareaField } from './'

export const FieldRenderer = (props: FieldProps): JSX.Element => {
  const { component, field } = props

  const renderField = (type: string) => {
    switch (type) {
      case 'string':
        return <StringField {...props} />
      case 'text':
        return <TextareaField {...props} />
      case 'editor':
        return <EditorField {...props} />
      default:
        return (
          <div className="text-rose-500 text-xs">
            Unknown field type:{' '}
            <span className="font-bold italic">{field.type}</span>
          </div>
        )
    }
  }

  return (
    <div
      key={field.id}
      className="flex flex-col w-full p-5 border-b border-neutral-200 bg-white relative"
    >
      <label
        htmlFor={field.id}
        className={`text-primary-700 text-xs mb-3 uppercase ${
          field.required ? 'font-bold' : null
        }`}
      >
        {field.label}
      </label>

      {field?.type ? renderField(field.type) : null}
    </div>
  )
}
