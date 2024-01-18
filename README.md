# CAS-2 End to End tests

A suite of end to end tests for the [CAS-2 project](https://github.com/ministryofjustice/hmpps-community-accommodation-tier-2-ui) using [Playwright](https://playwright.dev/).

## Getting started

We strongly recommend using the [VS Code Playwright plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) and use the plugin's commands.

### Prerequisites

- Node.JS
- NPM

### Setup

Install the dependencies with:

```bash
npm install
npm run install-playwright
```

Add a `.env` file to the root of the project with the following variables:

```text
CAS2_HMPPS_AUTH_USERNAME= # A valid HMPPS Auth Username
CAS2_HMPPS_AUTH_PASSWORD= # A valid HMPPS Auth Password
CAS2_ADMIN_USERNAME= # A valid HMPPS Auth Username for a user wil role CAS2_ADMIN
CAS2_ADMIN_PASSWORD= # A valid HMPPS Auth Password for a user wil role CAS2_ADMIN
CAS2_ASSESSOR_USERNAME= # A valid HMPPS Auth Username for a user wil role CAS2_ASSESSOR
CAS2_ASSESSOR_PASSWORD= # A valid HMPPS Auth Password for a user wil role CAS2_ASSESSOR
```

When running locally, these can be found in the `playwright.config.ts` file.
For remote environments, ask a developer on your team to share the test credentials (currently stored in the HMPPS 1Password Vault).

## Running the tests

### Against the Development environment

To run the tests locally against the MoJ Cloud Platform Development
environment, run the following command:

```bash
npm run test
```

or;

```bash
npm run test:ui
```

To run using the Playwright user interface

### Against your local enviroment

Assuming you have the UI, API and all other required systems running
using the [ap-tools project](https://github.com/ministryofjustice/hmpps-approved-premises-tools),
you can run the tests against your local environment with the following command:

```bash
npm run test:local
```

or;

```bash
npm run test:local:ui
```

To run using the Playwright user interface.

Local variables are contained in the `local` project in [playwright.config.ts](https://github.com/ministryofjustice/hmpps-approved-premises-e2e/blob/main/playwright.config.ts).
