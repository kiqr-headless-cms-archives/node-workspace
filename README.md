## KIQR - Node Workspace

This is the monorepo for KIQR.CLOUD, CLI, React and Node SDKs.

### Development

#### Setup workspace and install dependencies for all projects

```console
rush install
```

#### Build all projects

```console
rush build
```

#### Generate SDKs from OpenAPI specifications

```console
pnpm generate:sdks
```

### Other

#### Git Hooks

This repository uses [`husky`](https://www.npmjs.com/package/husky) and [`@jeliasson/husky-hooks`](https://www.npmjs.com/package/@jeliasson/husky-hooks) to run pre-commit and pre-push hooks.
