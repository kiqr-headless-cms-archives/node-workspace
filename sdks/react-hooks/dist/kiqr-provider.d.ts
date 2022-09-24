import { ReactNode } from 'react';
export interface KiqrProviderProps {
    children?: ReactNode;
    appRootUrl: string;
    handleRedirectBack?: (params: string) => void;
}
export declare const KiqrProvider: ({ children, appRootUrl, handleRedirectBack }: KiqrProviderProps) => JSX.Element;
