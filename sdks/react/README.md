KIQR React component library
-----------------
[![release-please](https://github.com/kiqr/react/actions/workflows/release-please.yaml/badge.svg)](https://github.com/kiqr/react/actions/workflows/release-please.yaml)
[![lint](https://github.com/kiqr/react/actions/workflows/lint.yaml/badge.svg)](https://github.com/kiqr/react/actions/workflows/lint.yaml)

This is the React component library for [KIQR Headless CMS](https://kiqr.dev).

Installation
------------

Run the following command using npm:

```console
npm install @kiqr/react --save
```

or with **yarn**:

```console
yarn add @kiqr/react
```

This will download and add `@kiqr/react` to your projects `package.json`-file.

Getting started
---------------

KIQR is using the [Google Font Poppins](https://fonts.google.com/specimen/Poppins) globally and in all components. To embed the "Poppins" font into your project, copy the following code into the ```<head>``` of your html:

```html
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
```

License
-------
The application is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

Contributing
------------
New contributors are very welcome and needed. KIQR Headless CMS is an open-source, community project that anyone can contribute to. Reviewing and testing is highly valued and the most effective way you can contribute as a new contributor. It also will teach you much more about the code and process than opening pull requests.

Except for testing, there are several ways you can contribute to the betterment of the project:
- **Report an issue?** - If the issue isn’t reported, we can’t fix it. Please report any bugs, feature, and/or improvement requests on the [GitHub Issues tracker](https://github.com/kiqr/cli/issues).
- **Submit patches** - Do you have a new feature or a fix you'd like to share? [Submit a pull request](https://github.com/kiqr/cli/pulls)!
- **Write blog articles** - Are you using KIQR? We'd love to hear how you're using it in your projects. Write a tutorial and post it on your blog!

### Development process
The `main` branch is regularly built and tested, but it is not guaranteed to be completely stable. Tags are created regularly from release branches to indicate new official, stable release versions of the KIQR React component library.

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
