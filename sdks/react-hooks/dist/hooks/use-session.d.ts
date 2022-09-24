import { User } from '@kiqr/management-api-sdk';
export declare const useSession: () => {
    user: User;
    userError: any;
    token: import("..").Oauth2Token;
};
