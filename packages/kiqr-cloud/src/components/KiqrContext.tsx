import React from 'react'
import { Oauth2Token } from './oauth2-config'

export interface KiqrContextConfig {
  token?: Oauth2Token
}

export const defaultContextValue: KiqrContextConfig = {
  token: undefined,
}

export const KiqrContext = React.createContext(defaultContextValue)
