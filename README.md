# npm-pkg-gen

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

- Scaffolds an npm package with a single command

<p align="center">
    <img src="https://xylocone.files.wordpress.com/2022/08/npg.gif" alt="terminalizer demo" />
</p>

## Installation

Install npm-pkg-gen with npm

```sh
npm install -g npm-pkg-gen
```

Or with Yarn, if you prefer that:

```sh
yarn global add npm-pkg-gen
```

## Usage

To scaffold a package:

```sh
npg <package-name>
```

**NOTE**: You must make sure that the package name you've provided is available on the [npm registry](https://npmjs.com). If the package name you've provided is taken, you won't immediately get an error, but your CI job will fail later.

Once the package has been scaffolded, you need add a Github remote repo. Then, you need to create two Github repo secrets to complete the configuration:

1.  `GH_TOKEN` &ndash; This is supposed to contain a Github Personal Access Token. [Here's](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) how you can make one. Make sure to make it permissive enough (might as well check all the boxes if you are unsure).
2.  `NPM_TOKEN` &ndash; This one is supposed to contain an npm automation token. Check out [this guide](https://docs.npmjs.com/creating-and-viewing-access-tokens/) to know how to make one.

**NOTE**: Whenever you make a commit, you must use `git cz` instead of `git commit`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
