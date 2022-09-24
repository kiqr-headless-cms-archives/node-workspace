import { Environment } from '@kiqr/management-api-sdk';
export declare const useEnvironments: () => {
    environments: Environment[];
    environmentsError: any;
    token: import("..").Oauth2Token;
};
