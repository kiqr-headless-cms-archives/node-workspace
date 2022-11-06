import { FieldProps, FormError } from '../fields'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const EditorField: React.FC<FieldProps> = (props) => {
  const { field, register, errors } = props

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />

  // return (
  //   <>
  //     <input
  //       type="text"
  //       {...register(`content[${field.id}]`, { required: field.required })}
  //       className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
  //       placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
  //     />

  //     {errors?.content?.[field.id] && (
  //       <FormError message="This field is required" />
  //     )}
  //   </>
  // )
}
