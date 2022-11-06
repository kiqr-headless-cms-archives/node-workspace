import { FieldProps, FormError } from '../fields'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Button, Group } from '@kiqr/irelia'
import { FaBold, FaItalic } from 'react-icons/fa'
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'

interface TiptapProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
  initialValue: string
}

const Tiptap: React.FC<TiptapProps> = ({ initialValue, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialValue,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-neutral prose-sm focus:outline-none',
      },
    },
  })

  return (
    <Group direction="vertical">
      <Group gap={4} className="border-b pb-5">
        <Button
          size="xs"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          icon={<BsTypeH1 />}
        />
        <Button
          size="xs"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          icon={<BsTypeH2 />}
        />
        <Button
          size="xs"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          icon={<BsTypeH3 />}
        />

        <Button
          size="xs"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          icon={<FaBold />}
        />
        <Button
          size="xs"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          icon={<FaItalic />}
        />
      </Group>
      <EditorContent editor={editor} />
    </Group>
  )
}

export const EditorField: React.FC<FieldProps> = (props) => {
  return (
    <>
      <Controller
        control={props.control}
        name={`content[${props.field.id}]`}
        render={({ field }) =>
          field.value ? (
            <Tiptap initialValue={field.value} onChange={field.onChange} />
          ) : (
            <></>
          )
        }
      />
      {props.errors?.content?.[props.field.id] && (
        <FormError message="This field is required" />
      )}
    </>
  )

  // return (
  //   <>
  //     <input
  //       type="text"
  //       {...register(`content[${field.id}]`, { required: field.required })}
  //       className="border-neutral-200 outline-none focus:ring-0 text-sm bg-white"
  //       placeholder={`Enter a value for "${field.label.toLowerCase()}"`}
  //     />

  //
  //   </>
  // )
}
