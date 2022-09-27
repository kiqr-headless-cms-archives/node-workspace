KIQR - Node Workspace
---------------------

This is the monorepo for KIQR.CLOUD, CLI, React and Node SDKs.

#### What's included?

| Project            | Version | Npm package | Description |
|--------------------|---------|-------------|---|
| apps/cli           | [![npm version](https://badge.fury.io/js/@kiqr%2Fcli.svg)](https://badge.fury.io/js/@kiqr%2Fcli) | @kiqr/cli   |   |
| apps/cloud-editor  | _n/a_ | _private_  |   |
| packages/react-components  | [![npm version](https://badge.fury.io/js/@kiqr%2Freact-components.svg)](https://badge.fury.io/js/@kiqr%2Freact-components) | @kiqr/react-components  |   |
| packages/eslint-config  | [![npm version](https://badge.fury.io/js/eslint-config-kiqr.svg)](https://badge.fury.io/js/eslint-config-kiqr) | eslint-config-kiqr  |   |
| packages/eslint-config-typescript  | [![npm version](https://badge.fury.io/js/eslint-config-kiqr-typescript.svg)](https://badge.fury.io/js/eslint-config-kiqr-typescript) | eslint-config-kiqr-typescript  |   |
| packages/react-hooks  | [![npm version](https://badge.fury.io/js/@kiqr%2Freact-hooks.svg)](https://badge.fury.io/js/@kiqr%2Freact-hooks) | @kiqr/react-hooks  |   |
| sdks/management-api-sdk  | [![npm version](https://badge.fury.io/js/@kiqr%2Fmanagement-api-sdk.svg)](https://badge.fury.io/js/@kiqr%2Fmanagement-api-sdk) | @kiqr/management-api-sdk  |   |

## Getting started

#### Setup workspace and install dependencies for all projects

```console
lerna bootstrap
```

#### Start local version of KIQR.CLOUD

```console
foreman start
```

#### Run commands on all projects

```console
lerna run build
lerna run lint
lerna run test
```

### Other

#### Generate SDKs from OpenAPI specifications

```console
yarn generate:sdks
```

#### Git Hooks

This repository uses [`husky`](https://www.npmjs.com/package/husky) and [`@jeliasson/husky-hooks`](https://www.npmjs.com/package/@jeliasson/husky-hooks) to run pre-commit and pre-push hooks.
