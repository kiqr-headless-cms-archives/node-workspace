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
      <td>packages/kiqr-cli</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fcli" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fcli.svg" /></a></td>
      <td>@kiqr/cli</td>
      <td>Command line application</td>
    </tr>
    <tr>
      <td>packages/kiqr-cloud</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fcloud" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fcloud.svg" /></a></td>
      <td>@kiqr/cloud</td>
      <td>Web application @ www.kiqr.cloud</td>
    </tr>
    <tr>
      <td>packages/kiqr-irelia</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fcli" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Firelia.svg" /></a></td>
      <td>@kiqr/irelia</td>
      <td>React components - design kit</td>
    </tr>
    <tr>
      <td>sdks/management-api-sdk</td>
      <td><a href="https://www.npmjs.com/package/@kiqr%2Fmanagement-api-sdk" target="_blank"><img src="https://badge.fury.io/js/@kiqr%2Fmanagement-api-sdk.svg" /></a></td>
      <td>@kiqr/management-api-sdk</td>
      <td>Auto-generated SDK</td>
    </tr>
  </tbody>
</table>

Getting started
---------------

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

License
-------

The application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Contributing
------------

New contributors are very welcome and needed. KIQR Headless CMS is an open-source, community project that anyone can contribute to. Reviewing and testing is highly valued and the most effective way you can contribute as a new contributor. It also will teach you much more about the code and process than opening pull requests.

Except for testing, there are several ways you can contribute to the betterment of the project:

- **Report an issue?** - If the issue isn’t reported, we can’t fix it. Please report any bugs, feature, and/or improvement requests on the [GitHub Issues tracker](https://github.com/kiqr/kiqr/issues).
- **Submit patches** - Do you have a new feature or a fix you'd like to share? [Submit a pull request](https://github.com/kiqr/kiqr/pulls)!
- **Write blog articles** - Are you using KIQR? We'd love to hear how you're using it in your projects. Write a tutorial and post it on your blog!

### Development process

The `main` branch is regularly built and tested, but it is not guaranteed to be completely stable. Tags are created regularly from release branches to indicate new official, stable release versions of the libraries.

#### Git Hooks

This repository uses [`husky`](https://www.npmjs.com/package/husky) and [`@jeliasson/husky-hooks`](https://www.npmjs.com/package/@jeliasson/husky-hooks) to run pre-commit and pre-push hooks.

#### Generate SDKs from OpenAPI specifications

```console
yarn generate:sdks 
```

### Commit message guidline

A good commit message should describe what changed and why. The KIQR-project uses [semantic commit messages](https://www.conventionalcommits.org/en/v1.0.0/) to streamline the release process.

Before a pull request can be merged, it must have a pull request title with a semantic prefix.

### Versioning

This application aims to adhere to [Semantic Versioning](http://semver.org/). Violations
of this scheme should be reported as bugs. Specifically, if a minor or patch
version is released that breaks backward compatibility, that version should be
immediately yanked and/or a new version should be immediately released that
restores compatibility. Breaking changes to the public API will only be
introduced with new major versions.

### Contributors ✨

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
