import React from 'react'
import {Oauth2Token} from './oauth2-config'

export interface KiqrContextConfig {
  token: Oauth2Token | null
}

export const defaultContextValue: KiqrContextConfig = {
  token: null,
}

export const KiqrContext = React.createContext(defaultContextValue)
