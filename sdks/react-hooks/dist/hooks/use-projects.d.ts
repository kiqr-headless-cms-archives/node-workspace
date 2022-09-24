import { Project } from '@kiqr/management-api-sdk';
export declare const getProjects: (accessToken: string) => Promise<Project[]>;
export declare const useProjects: () => {
    projects: Project[];
    projectsError: any;
    token: import("..").Oauth2Token;
};
