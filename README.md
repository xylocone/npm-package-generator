![Logo](https://xylocone.files.wordpress.com/2022/08/npm-package-generator.png)

# npm-package-generator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

- Scaffolds a Wordpress FSE theme with a single command
- Exposes some helper binaries

## Installation

Install npm-package-generator with npm

```sh
npm install -g npm-package-generator
```

Or with Yarn, if you prefer that:

```sh
yarn global add npm-package-generator
```

## Usage

To scaffold a package:

```sh
npg <package-name>
```

Once the package has been scaffolded, you need to create two Github repo secrets to complete the configuration:

1.  `GH_TOKEN` &ndash; This is supposed to contain a Github Personal Access Token. [Here's](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) how you can make one. Make sure to make it permissive enough (might as well check all the boxes if you are unsure).
2.  `NPM_TOKEN` &ndash; This one is supposed to contain an npm automation token. Check out [this guide](https://docs.npmjs.com/creating-and-viewing-access-tokens/) to know how to make one.

## License

[MIT](https://choosealicense.com/licenses/mit/)
