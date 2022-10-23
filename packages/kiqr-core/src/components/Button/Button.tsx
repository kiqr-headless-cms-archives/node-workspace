import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'

export interface ButtonProps {
  children?: ReactNode
  size?: string
  icon?: JSX.Element
  variant?: string
  disabled?: boolean
  onClick?: () => any
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  variant = 'default',
  icon = undefined,
  disabled = false,
  onClick
}) => {
  const defaultClasses =
    'inline-flex items-center gap-x-2 leading-3 justify-center rounded transition shadow font-bold cursor-pointer hover:shadow-sm'

  const variantClasses = {
    'text-neutral-600 bg-neutral-100 hover:text-neutral-800': variant === 'default',
    'text-white bg-primary-700 hover:bg-primary-800': variant === 'primary',
    'text-white bg-rose-700 hover:bg-rose-800': variant === 'danger',
    'opacity-50 cursor-not-allowed': disabled === true
  }

  const sizeClasses = {
    'px-8 h-16 text-lg': size === 'lg',
    'px-6 h-12 text-md': size === 'md',
    'px-3 h-8 text-sm': size === 'sm',
    'px-2 h-6 text-xs': size === 'xs'
  }

  const className = classNames(defaultClasses, variantClasses, sizeClasses)

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {icon || null}
      {children}
    </button>
  )
}
