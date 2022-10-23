import {config} from '.'
import {Oauth2Token, isValidToken, buildAuthorizationUrl} from './oauth'

interface SessionProps {
  authorizationUrl: string
  isLoggedIn: boolean
  token: Oauth2Token | undefined
}

export const session = (): SessionProps => {
  const token = config.get<Oauth2Token>('token')
  const isLoggedIn = isValidToken(token)
  const authorizationUrl = buildAuthorizationUrl()

  return {authorizationUrl, isLoggedIn, token}
}
