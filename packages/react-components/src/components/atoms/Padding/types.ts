import {ReactNode} from 'react'

export enum Theme {
  default,
  tinted
}

export type ThemeString = keyof typeof Theme

export interface PaddingProps {
  children?: ReactNode
  theme?: ThemeString
}
