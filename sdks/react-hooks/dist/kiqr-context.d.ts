import React from 'react';
import { Oauth2Token } from './oauth2-config';
export interface KiqrContextConfig {
    token: Oauth2Token | null;
}
export declare const defaultContextValue: KiqrContextConfig;
export declare const KiqrContext: React.Context<KiqrContextConfig>;
