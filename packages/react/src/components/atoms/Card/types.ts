import { ReactNode } from 'react'

export interface CardProps {
  title?: string
  subtitle?: string
  avatarUrl?: string
  children?: ReactNode
}

export interface HeaderProps {
  title?: string
  subtitle?: string
  avatarUrl?: string
}
