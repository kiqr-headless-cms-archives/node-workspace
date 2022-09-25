import React from 'react'
import { ReactElement } from 'react'
import classNames from 'classnames'

import type { ButtonProps } from './types'

export const Button = ({
  text,
  size = 'md',
  type = 'secondary',
  icon = undefined,
  disabled = false
}: ButtonProps): ReactElement => {
  const defaultClasses =
    'inline-flex items-center gap-x-2 leading-3 justify-center rounded transition shadow font-bold cursor-pointer hover:shadow-none'

  const themeClasses = {
    'text-white bg-primary-700 hover:bg-primary-800': type === 'primary',
    'text-white bg-rose-700 hover:bg-rose-800': type === 'danger',
    'text-neutral-600 bg-neutral-50 hover:text-neutral-800':
      type === 'secondary',
    'opacity-50 cursor-not-allowed': disabled === true
  }

  const sizeClasses = {
    'px-8 h-16 text-lg': size === 'lg',
    'px-6 h-12 text-md': size === 'md',
    'px-3 h-8 text-sm': size === 'sm',
    'px-2 h-6 text-xs': size === 'xs'
  }

  const className = classNames(defaultClasses, themeClasses, sizeClasses)
  return (
    <button className={className} disabled={disabled}>
      {icon || null}
      {text || null}
    </button>
  )
}
