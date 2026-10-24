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
- [Vercel](https://vercel.com/) for deployment
- [Yarn](https://yarnpkg.com/) for package management
- [Simple Icons](https://simpleicons.org/) for brand and technology marks

## Why Tailwind CSS

Tailwind CSS is a better fit than styled-components for this portfolio because most of the styling is presentational and closely tied to individual React components. Its utility classes make responsive layouts and visual changes quick to understand without introducing a runtime CSS-in-JS layer. It also keeps spacing, colors, and typography consistent while allowing the design to evolve one component at a time.

For a small, mostly static site, this means fewer styling abstractions, no client-side style generation, and less maintenance as new sections are added.

## Design inspiration

The layout and design direction are inspired by [Tania Rascia's personal website](https://www.taniarascia.com/), particularly its persistent profile navigation and scrollable content area. This project adapts those ideas for my own profile, experience, and projects.

## Asset credits and licenses

The navigation, interface, and sailboat assets were sourced from
[Icons For Free](https://iconsforfree.com/). Brand and technology marks are supplied
by [Simple Icons](https://simpleicons.org/), whose project is released under
[CC0 1.0](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md).
Individual logos can still be protected by their owners' licenses, trademarks, and
brand guidelines; see the [Simple Icons disclaimer](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md)
and this project's [third-party notices](THIRD_PARTY_NOTICES.md).

## Run locally

```sh
yarn install
yarn dev
```

Open http://localhost:3000.

## Contact form setup

The About me form uses a Next.js Route Handler for server-side validation and
rate limiting, and the Resend API to deliver messages to the configured
recipient. The route at `/api/contact` is deployed automatically as an on-demand
Vercel Function, so no separate backend or always-running server is required.

Create an API key in the Resend dashboard under **API Keys**. A key with
**Sending access** is sufficient. Copy `.env.example` to `.env.local` for local
development and configure these values:

```env
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your-address@gmail.com
```

- `RESEND_API_KEY` authenticates the server when it calls Resend. Keep it secret
  and never expose it through a `NEXT_PUBLIC_` variable or commit it to Git.
- `RESEND_FROM_EMAIL` is the technical sender required for every email. Use
  `onboarding@resend.dev` while testing without a custom domain. If a domain is
  added and verified later, replace it with an address such as
  `Portfolio <hello@example.com>`.
- `CONTACT_EMAIL` is the inbox that receives contact-form messages and can be a
  Gmail address. The visitor's submitted email is used as the reply-to address,
  so replying in Gmail sends the response to the visitor.

For deployment, open **Vercel → Project → Settings → Environment Variables**,
add all three variables, and enable them for Production and Preview as needed.
Redeploy after saving them because new environment variables do not affect an
existing deployment.

The Vercel Function starts when someone submits the form and stops after the
request finishes. Warm requests are usually immediate; a cold start can add a
short delay. Resend's testing sender may restrict delivery to the email address
associated with the Resend account. A verified custom domain is required later
for unrestricted production sending.

## Content management

Editable text, links, navigation labels, theme options, and structured profile
data live in `config/`. Shared copy and metadata are in
`config/siteContent.ts`; focused content such as books, projects, skills,
certifications, and work history stays in its corresponding config file.

Files in `app/` and `components/` focus on layout, rendering, and interaction.
Repository guidance for future changes is documented in `AGENTS.md`.

## Test

```sh
yarn test
```

Use `yarn test:watch` while developing to rerun affected tests after changes.
Run `yarn test:coverage` to generate a local coverage report.
Run `yarn cypress:open` while the development server is running to use the Cypress test runner.

## Pages

- `/` — Home (`app/page.tsx`)
- `/work` — Work history (`app/work/page.tsx`)
- `/projects` — Open-source projects (`app/projects/page.tsx`)
- `/skills` — Skills (`app/skills/page.tsx`)
- `/ai` — AI tools, capabilities, and production work (`app/ai/page.tsx`)
- `/reading` — Favorite books and Goodreads profile (`app/reading/page.tsx`)
- `/certifications` — Certifications and credentials (`app/certifications/page.tsx`)
- `/about` — About me (`app/about/page.tsx`)
- `/about-this-site` — Packages and project acknowledgements (`app/about-this-site/page.tsx`)
- `/blog` — Blog (`app/blog/page.tsx`)
- `/contact` — Contact (`app/contact/page.tsx`)

Shared navigation content lives in `config/siteContent.ts`, its component lives
in `components/ProfileSidebar.tsx`, and global styles live in `app/globals.css`.
Replace the example Contact page email in `config/siteContent.ts` with your own.

## Production

```sh
yarn build
yarn start
```
