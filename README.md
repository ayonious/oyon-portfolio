# Oyon's Portfolio

[![CI](https://github.com/ayonious/oyon-portfolio/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/ci.yml)
[![Coverage Tests](https://github.com/ayonious/oyon-portfolio/actions/workflows/codecov.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/codecov.yml)
[![Cypress Tests](https://github.com/ayonious/oyon-portfolio/actions/workflows/cypress.yml/badge.svg?branch=master)](https://github.com/ayonious/oyon-portfolio/actions/workflows/cypress.yml)
[![codecov](https://codecov.io/gh/ayonious/oyon-portfolio/graph/badge.svg?token=vLJAmyTSkC)](https://codecov.io/gh/ayonious/oyon-portfolio)

## Purpose

Create my personal profile and portfolio website using Next.js, TypeScript, and Tailwind CSS to showcase my background, skills, and projects.

## Built with

- [Next.js](https://nextjs.org/) and [React](https://react.dev/) for the website
- [TypeScript](https://www.typescriptlang.org/) for type-safe development
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for component tests
- [Cypress](https://www.cypress.io/) for browser tests
- [Netlify](https://www.netlify.com/) for deployment
- [Yarn](https://yarnpkg.com/) for package management

## Why Tailwind CSS

Tailwind CSS is a better fit than styled-components for this portfolio because most of the styling is presentational and closely tied to individual React components. Its utility classes make responsive layouts and visual changes quick to understand without introducing a runtime CSS-in-JS layer. It also keeps spacing, colors, and typography consistent while allowing the design to evolve one component at a time.

For a small, mostly static site, this means fewer styling abstractions, no client-side style generation, and less maintenance as new sections are added.

## Design inspiration

The layout and design direction are inspired by [Tania Rascia's personal website](https://www.taniarascia.com/), particularly its persistent profile navigation and scrollable content area. This project adapts those ideas for my own profile, experience, and projects.

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
