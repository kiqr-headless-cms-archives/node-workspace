import { Project } from '@kiqr/management-api-sdk';
export declare const useProject: (projectId: string) => {
    project: Project;
    projectsError: any;
    token: import("..").Oauth2Token;
};
