import React from 'react'
import { ReactElement } from 'react'
import { Avatar } from '../Avatar'
import { Placeholder } from '../Placeholder'

import type { DropdownProps, DropdownListProps } from './types'

export const Dropdown = ({
  avatarUrl,
  line1,
  line2,
  openByDefault = false
}: DropdownProps): ReactElement => {
  const tmpTestItems = [
    {
      avatarUrl: 'https://avatars.dicebear.com/api/big-ears/bar.svg',
      line1: 'Hello world',
      line2: 'it woorks'
    }
  ]

  return (
    <div className="relative inline-block">
      <button
        onClick={() => alert('Toggle dropdown')}
        className="flex text-left items-center gap-x-5 text-primary-700"
      >
        {avatarUrl ? <Avatar src={avatarUrl} type="square" /> : null}
        <div className={`flex flex-col font-bold ${line1 ? null : 'gap-y-1'}`}>
          {line1 ? line1 : <Placeholder />}
          {line2 ? (
            <span className="text-xs text-slate-400 font-normal">{line2}</span>
          ) : (
            <Placeholder size="small" />
          )}
        </div>
        {/*<FaCaretDown />*/}
      </button>
      <DropdownList items={tmpTestItems} visible={openByDefault} />
    </div>
  )
}

export const DropdownList = ({
  items,
  visible
}: DropdownListProps): ReactElement | null => {
  if (!visible) return null

  return (
    <ul className={`dropdown ${visible ? '' : 'hidden'}`}>
      {items &&
        items.map((item) => (
          <li key={null}>
            <img
              src={item.avatarUrl}
              className="bg-neutral-200 outline-0 border-0 rounded w-9 h-9"
            />
            <div className="flex flex-col font-bold">
              {item.line1}
              <span className="text-xs text-slate-400 font-normal">
                {item.line2}
              </span>
            </div>
          </li>
        ))}
    </ul>
  )
}
