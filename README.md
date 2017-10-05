<h1 align='center'>Somnolence</h1>

[![Build Status](https://img.shields.io/circleci/project/github/levsthings/somnolence.svg?style=flat-square)](https://circleci.com/gh/levsthings/somnolence.svg?style=svg)

## Usage

### Development Mode:

Install dependencies:

```bash
yarn install
```

Run in development mode via `webpack-dev-server`

```bash
yarn dev
```

**`webpack-dev-server` will be serving on: `localhost:3000`**

### Production Mode:

To build assets in production mode:

```bash
yarn build/prod
```

To serve the static assets locally and test things:

```bash
yarn serve
```

The compiled assets will be in the public folder. You can upload them to a CDN and you're done.

### Additional Commands:

- Run `yarn lint` for linting with auto fixing:
- Run `yarn test` for testing. (Right now it just runs linting, you should add your test runner there.)
- Run `yarn cleanup` to manually remove built assets.
