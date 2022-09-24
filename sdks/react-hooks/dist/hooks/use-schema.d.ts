import { SchemaExtended } from '@kiqr/management-api-sdk';
export declare const useSchema: (projectId?: string | undefined, id?: string | undefined) => {
    schema: SchemaExtended;
    schemaError: any;
    token: import("..").Oauth2Token;
};
