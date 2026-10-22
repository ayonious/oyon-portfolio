# Oyon's Portfolio

[![CI](https://github.com/ayonious/oyon-portfolio/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/ci.yml)
[![Coverage Tests](https://github.com/ayonious/oyon-portfolio/actions/workflows/codecov.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/codecov.yml)
[![Cypress Tests](https://github.com/ayonious/oyon-portfolio/actions/workflows/cypress.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/cypress.yml)
[![codecov](https://codecov.io/gh/ayonious/oyon-portfolio/graph/badge.svg?token=vLJAmyTSkC)](https://codecov.io/gh/ayonious/oyon-portfolio)

## Purpose

Create my personal profile and portfolio website using Next.js, TypeScript, and Tailwind CSS to showcase my background, skills, and projects.

## Run locally

```sh
yarn install
yarn dev
```

Open http://localhost:3000.

## Test

```sh
yarn test
```

Use `yarn test:watch` while developing to rerun affected tests after changes.
Run `yarn test:coverage` to generate a local coverage report.
Run `yarn cypress:open` while the development server is running to use the Cypress test runner.

## Pages

- `/` — Home (`app/page.tsx`)
- `/about` — About (`app/about/page.tsx`)
- `/contact` — Contact (`app/contact/page.tsx`)

Shared navigation lives in `app/layout.tsx` and styles in `app/globals.css`.
Replace the example email address in the Contact page with your own.

## Production

```sh
yarn build
yarn start
```
