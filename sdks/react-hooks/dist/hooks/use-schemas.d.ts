import { Schema } from '@kiqr/management-api-sdk';
export declare const useSchemas: (projectId?: string | undefined) => {
    schemas: Schema[];
    schemasError: any;
    token: import("..").Oauth2Token;
};
