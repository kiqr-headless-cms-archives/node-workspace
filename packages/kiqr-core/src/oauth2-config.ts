export interface Oauth2Token {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
  created_at: number
}

export class Oauth2Config {
  public authServerHost: string
  public clientId: string
  public redirectUri: string
  public scope: string
  public authorizationUrl: string
  public tokenUrl: string

  constructor(redirectUri: string) {
    this.authServerHost = 'https://kiqr.cloud'
    this.clientId = 'Xz_UctYAmDMGq6uLJ053sj6wkdC0oRwRS5HOj8Gvbnc'
    this.redirectUri = redirectUri
    this.scope = 'profile+projects'
    this.tokenUrl = `${this.authServerHost}/oauth/token`
    this.authorizationUrl = `${this.authServerHost}/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&scope=${this.scope}`
  }
}
