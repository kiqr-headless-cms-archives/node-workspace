KIQR - Node Workspace
---------------------

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is the monorepo for KIQR.CLOUD, CLI, React and Node SDKs.

#### What's included?

<table>
  <thead>
    <tr>
      <th>Source</th>
      <th>Version</th>
      <th>NPM package</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>packages/eslint-config</td>
      <td><a href="https://www.npmjs.com/package/eslint-config-kiqr" target="_blank"><img src="https://badge.fury.io/js/eslint-config-kiqr.svg" /></a></td>
      <td>eslint-config-kiqr</td>
      <td></td>
    </tr>
    <tr>
      <td>packages/eslint-config-typescript</td>
      <td><a href="https://www.npmjs.com/package/eslint-config-kiqr-typescript" target="_blank"><img src="https://badge.fury.io/js/eslint-config-kiqr-typescript.svg" /></a></td>
      <td>eslint-config-kiqr</td>
      <td></td>
    </tr>
    <tr>
      <td>packages/kiqr-cli</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fcli" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fcli.svg" /></a></td>
      <td>@kiqr/cli</td>
      <td></td>
    </tr>
    <tr>
      <td>packages/kiqr-cloud</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fcloud" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fcloud.svg" /></a></td>
      <td>@kiqr/cloud</td>
      <td></td>
    </tr>
    <tr>
      <td>sdks/management-api-sdk</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fmanagement-api-sdk" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fmanagement-api-sdk.svg" /></a></td>
      <td>@kiqr/management-api-sdk</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Old projects

These projects must be removed or moved to the `packages/`-directory.
| Project            | Version | Npm package | Description |
|--------------------|---------|-------------|---|
| packages/react-components  | [![npm version](https://badge.fury.io/js/@kiqr%2Freact-components.svg)](https://badge.fury.io/js/@kiqr%2Freact-components) | @kiqr/react-components  |   |
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
      <td align="center"><a href="https://github.com/Frexuz"><img src="https://avatars.githubusercontent.com/u/49692?v=4?s=100" width="100px;" alt="Kristian Gerardsson"/><br /><sub><b>Kristian Gerardsson</b></sub></a><br /><a href="#mentoring-frexuz" title="Mentoring">🧑‍🏫</a></td>
      <td align="center"><a href="https://github.com/Nocoderbaby"><img src="https://avatars.githubusercontent.com/u/101124448?v=4?s=100" width="100px;" alt="nocoderbaby"/><br /><sub><b>nocoderbaby</b></sub></a><br /><a href="#mentoring-nocoderbaby" title="Mentoring">🧑‍🏫</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
