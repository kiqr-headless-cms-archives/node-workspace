import React from 'react'
import classNames from 'classnames'

export interface AvatarProps {
  variant?: 'square' | 'circle'
  src: string
  alt?: string
}

export const Avatar = ({ src, variant = 'square', alt }: AvatarProps) => {
  const className = classNames({
    'bg-neutral-200 outline-0 border-0 rounded w-9 h-9': variant === 'square',
    'bg-neutral-200 border-white border-2 shadow rounded-full w-9 h-9 hover:z-50': variant === 'circle'
  })

  return <img className={className} src={src} alt={alt} />
}
