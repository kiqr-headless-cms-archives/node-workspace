import React from 'react'
import StarterKit from '@tiptap/starter-kit'

import { FaBold, FaItalic } from 'react-icons/fa'
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'
import { useEditor, EditorContent } from '@tiptap/react'

import { Group } from '../../atoms/Group'
import { Button } from '../../atoms/Button'

export interface HtmlEditorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
  initialValue: string
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({
  initialValue,
  onChange,
}) => {
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
