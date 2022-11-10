import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Padding } from '../Padding'

export interface ColumnProps {
  children?: ReactNode
  className?: string
  variant?: 'th' | 'td'
}

export const Column = ({
  children,
  className,
  variant = 'td',
}: ColumnProps) => {
  const defaultClasses = 'text-left px-5 border-r last:border-r-0'

  const variantClasses = {
    'text-sm py-2 text-neutral-500': variant === 'td',
    'text-xs bg-white font-bold py-4 uppercase text-primary-700':
      variant === 'th',
  }

  const classnames = classNames(defaultClasses, variantClasses, className)
  return <td className={classnames}>{children}</td>
}

export interface RowProps {
  children: ReactNode
  className?: string
}

export const Row = ({ children, className }: RowProps) => {
  const defaultClasses = 'border-b hover:bg-neutral-50'

  const classnames = classNames(defaultClasses, className)
  return <tr className={classnames}>{children}</tr>
}

export interface TableProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export const Table = ({ children, title, subtitle, className }: TableProps) => {
  const defaultClasses = 'w-full border-t border-b-2 rounded'
  const classnames = classNames(defaultClasses, className)

  return (
    <Box p={0}>
      {title || subtitle ? (
        <Padding>
          <Heading title={title} subtitle={subtitle} variant="box" />
        </Padding>
      ) : null}
      <table className={classnames}>{children}</table>
    </Box>
  )
}
