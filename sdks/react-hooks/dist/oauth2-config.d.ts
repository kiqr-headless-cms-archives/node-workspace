export interface Oauth2Token {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    created_at: number;
}
export declare class Oauth2Config {
    authServerHost: string;
    clientId: string;
    redirectUri: string;
    scope: string;
    authorizationUrl: string;
    tokenUrl: string;
    constructor(redirectUri: string);
}
