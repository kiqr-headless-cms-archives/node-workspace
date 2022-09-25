import axios from 'axios'
import React, { ReactNode, useEffect, useState } from 'react'

import { Oauth2Config, Oauth2Token } from './oauth2-config'
import { KiqrContext, defaultContextValue } from './kiqr-context'

export interface KiqrProviderProps {
  children?: ReactNode
  appRootUrl: string
  handleRedirectBack?: (params: string) => void
}

const LoadingScreen = () => {
  return <>Loading</>
}

const clearUrlParams = () => {
  history.replaceState(
    null,
    '',
    location.protocol +
      '//' +
      location.host +
      location.pathname +
      location.search.replace(/[?&]code=[^&]+/, '').replace(/^&/, '?')
  )
}

function setCookie(name: string, value: string) {
  let expires = ''
  const date = new Date()
  date.setTime(date.getTime() + 5 * 60 * 1000)
  expires = '; expires=' + date.toUTCString()
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

function getCookie(name: string) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export const KiqrProvider = ({
  children,
  appRootUrl,
  handleRedirectBack
}: KiqrProviderProps): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [config, setConfig] = useState(defaultContextValue)
  const [isLoading, setIsLoading] = useState(true)

  const oauth = new Oauth2Config(appRootUrl)

  const loginWithRedirect = () => {
    window.location.href = oauth.authorizationUrl
  }

  const exchangeCodeForToken = async (
    authorizationCode: string
  ): Promise<Oauth2Token> => {
    const payload = {
      code: authorizationCode,
      client_id: oauth.clientId,
      redirect_uri: oauth.redirectUri,
      grant_type: 'authorization_code'
    }

    return new Promise((resolve, reject) => {
      axios
        .post(oauth.tokenUrl, payload)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const authCode = queryParams.get('code')

    if (!accessToken && !authCode) {
      setCookie('returnUrl', window.location.href)
      loginWithRedirect()
    } else if (authCode) {
      exchangeCodeForToken(authCode)
        .then((oauthToken) => {
          setAccessToken(oauthToken.access_token)
          setConfig((prevState) => ({ ...prevState, token: oauthToken }))
          clearUrlParams()
          const returnUrl = getCookie('returnUrl')
          if (handleRedirectBack && returnUrl) {
            handleRedirectBack(returnUrl)
          }
        })
        .catch((error) => console.log(error))
        .then(() => {
          setIsLoading(false)
        })
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen /> ?? <></>
  }

  return <KiqrContext.Provider value={config}>{children}</KiqrContext.Provider>
}
