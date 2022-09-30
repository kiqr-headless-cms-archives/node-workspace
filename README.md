KIQR - Node Workspace
---------------------

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://rasmuskjellberg.se/"><img src="https://avatars.githubusercontent.com/u/2277443?v=4?s=100" width="100px;" alt="Rasmus Kjellberg"/><br /><sub><b>Rasmus Kjellberg</b></sub></a><br /><a href="https://github.com/kiqr/node-workspace/commits?author=kjellberg" title="Code">💻</a> <a href="#design-kjellberg" title="Design">🎨</a> <a href="#ideas-kjellberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-kjellberg" title="Project Management">📆</a> <a href="#infra-kjellberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kiqr/node-workspace/commits?author=kjellberg" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/jeliasson"><img src="https://avatars.githubusercontent.com/u/865493?v=4?s=100" width="100px;" alt="Johan Eliasson"/><br /><sub><b>Johan Eliasson</b></sub></a><br /><a href="#infra-jeliasson" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
