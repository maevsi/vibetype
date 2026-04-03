[![ci status][ci-image]][ci-url]
[![license status][license-image]][license-url]

[ci-image]: https://img.shields.io/github/actions/workflow/status/maevsi/vibetype/ci.yml
[ci-url]: https://github.com/maevsi/vibetype/actions/workflows/ci.yml
[license-image]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmaevsi%2Fmaevsi.svg?type=shield&issueType=license
[license-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fmaevsi%2Fmaevsi?ref=badge_shield&issueType=license

# Vibetype

Find events, guests and friends: [vibetype.app](https://vibetype.app/).

This project is deployed within the [maevsi/stack](https://github.com/maevsi/stack/) using [dargstack](https://github.com/dargstack/dargstack/).

![Welcome](https://vibetype.app/_og/d/a_VIBETYPE's+logo.,c_Default.takumi,description_~RmluZCBldmVudHMsIGd1ZXN0cyBhbmQgZnJpZW5kcyDwn5KZ4p2k77iP8J-SmiDwn4-b77iP,title_Vibetype.png "Vibetype")

## Table of Contents
1. **[Contributing](#contributing)**
1. **[Development](#development)**
    1. **[Frontend only](#frontend-only)**
    1. **[Fullstack](#fullstack)**
1. **[Security](#security)**
1. **[Technology](#technology)**

## Contributing

Before you start with development, make sure you familiarize yourself with our [guide for contributions](CONTRIBUTING.md) to ensure your development experience stays flawless! 🔧

## Development

The setup for frontend-only development is easy! 💅

For fullstack development, which runs all services containerized, see the [maevsi/stack setup guide](https://github.com/maevsi/stack/blob/main/CONTRIBUTING.md).

You're encouraged to ask questions on [Vibetype's Discord](https://discord.gg/E3hD3wEUQ4) if the setup could go smoother!

### Frontend only

<details>
  <summary><b>click here for instructions</b></summary>

#### Preparation

1. (optional) if you're on Windows, you might want to
  1. [set up WSL](https://docs.microsoft.com/en-us/windows/wsl/install) to be able to use all Linux functionality this project utilizes
  1. [set up Visual Studio Code for WSL](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode) so that it works properly with Linux-specific features such as symbolic links
1. [install Git](https://git-scm.com/) to download this project's modules and participate in version management
1. [install mkcert](https://github.com/FiloSottile/mkcert#installation) for development certificate generation and installation, so that all services are available through https
1. [install nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to be able to switch the currently active [Node.js](https://nodejs.org/en/) version on your machine (useful when working on multiple Node.js projects)

#### Setup

1. create a directory named `vibetype` in a directory of your liking
1. download this repository into that newly created directory:
    ```sh
    cd vibetype
    git clone https://github.com/maevsi/vibetype.git
    ```
1. switch into the `vibetype` subdirectory and setup Node:
    ```sh
    cd vibetype
    nvm install
    ```
1. then install all dependencies using [pnpm](https://pnpm.io/), which should include the **src** directory automatically:
    ```sh
    corepack enable
    pnpm install
    ```
1. finally, start the frontend:

    ```sh
    cd src
    pnpm dev
    ```
1. you should now be able to access Vibetype under https://localhost:3000/! 🎉

</details>

### Fullstack

For fullstack development see the [maevsi/stack setup guide](https://github.com/maevsi/stack/blob/main/CONTRIBUTING.md).


## Security

Head to our [disclosure policy](SECURITY.md) to see how to report security issues and how [we value your report](SECURITY_CONTRIBUTION.md).


## Technology

<a href="https://nuxt.com">
  <picture>
    <source srcset="https://nuxt.com/assets/design-kit/logo-green-black.svg" media="(prefers-color-scheme: light)">
    <source srcset="https://nuxt.com/assets/design-kit/logo-green-white.svg" media="(prefers-color-scheme: dark)">
    <img alt="Nuxt" src="https://nuxt.com/assets/design-kit/logo-green-black.svg" width="1200">
  </picture>
</a>
