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
- [Storybook](https://storybook.js.org/) for isolated component previews and documentation
- [Vite](https://vite.dev/) for Storybook’s development server and static builds
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

Install the project dependencies, copy the example environment configuration,
and start the Next.js development server:

```sh
yarn install
cp .env.example .env.local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). The example environment
file uses Cloudflare Turnstile's official sandbox credentials, so the contact
form can complete bot verification on localhost:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

This sitekey and secret key combination always returns a successful test
verification. It must only be used locally or in automated tests. To test the
failure path, Cloudflare also provides the always-fail sitekey
`2x00000000000000000000AB` and secret key
`2x0000000000000000000000000000000AA`.

The application does not trust the browser result by itself. `/api/contact`
sends every token to Cloudflare's Siteverify endpoint and continues to Resend
only when Cloudflare returns the boolean response `success: true`. Invalid,
expired, reused, malformed, and unverifiable tokens stop before an email is
sent.

Sending an actual email locally still requires a valid `RESEND_API_KEY`,
`RESEND_FROM_EMAIL`, and `CONTACT_EMAIL` in `.env.local`. Restart `yarn dev`
after changing environment variables.

## Contact form setup

The About me form uses Cloudflare Turnstile for bot verification, a Next.js
Route Handler for server-side validation, and the Resend API to deliver messages
to the configured recipient. The route at `/api/contact` is deployed
automatically as an on-demand Vercel Function, so no separate backend or
always-running server is required. A Vercel Firewall rate-limit rule protects
the endpoint before excessive requests reach the Function.

Create an API key in the Resend dashboard under **API Keys**. A key with
**Sending access** is sufficient. Copy `.env.example` to `.env.local` for local
development and configure these values:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_public_site_key
TURNSTILE_SECRET_KEY=your_private_secret_key
RESEND_API_KEY=re_your_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your-address@gmail.com
```

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` identifies the Turnstile widget in the
  browser. It is intentionally public.
- `TURNSTILE_SECRET_KEY` stays inside the Vercel Function and authenticates
  server-side token verification with Cloudflare.
- `RESEND_API_KEY` authenticates the server when it calls Resend. Keep it secret
  and never expose it through a `NEXT_PUBLIC_` variable or commit it to Git.
- `RESEND_FROM_EMAIL` is the technical sender required for every email. Use
  `onboarding@resend.dev` while testing without a custom domain. If a domain is
  added and verified later, replace it with an address such as
  `Portfolio <hello@example.com>`.
- `CONTACT_EMAIL` is the inbox that receives contact-form messages and can be a
  Gmail address. The visitor's submitted email is used as the reply-to address,
  so replying in Gmail sends the response to the visitor.

Create a Managed Turnstile widget in the Cloudflare dashboard and add the stable
Vercel hostname as an allowed hostname. For local development and automated
tests, `.env.example` contains Cloudflare's official always-pass test keys. Do
not use those test keys in production.

For deployment, open **Vercel → Project → Settings → Environment Variables**,
add all five variables, and enable them for Production and Preview as needed.
Redeploy after saving them because new environment variables do not affect an
existing deployment. The Function validates each temporary Turnstile token with
Cloudflare before it calls Resend. Tokens are single-use and expire after five
minutes. Rate limiting is configured in Vercel rather than in application code,
so rejected requests are stopped before the Function executes.

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

Shared navigation content lives in `config/siteContent.ts`, its component lives
in `components/ProfileSidebar.tsx`, and global styles live in `app/globals.css`.
The contact form is the final section of `/about`, and its server endpoint is
`/api/contact`.

## Production

```sh
yarn build
yarn start
```


## Storybook and Vite

[Storybook](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite) is a
workshop for developing UI components on their own. Each story renders one
component with a specific set of props or interaction state, such as an empty
list, a payment badge, or a project card with a demo link. It provides a browser
catalog, editable controls, generated documentation, and interaction checks.

[Vite](https://vite.dev/guide/) is a frontend development server and build tool.
The `@storybook/nextjs-vite` integration uses it to serve stories with fast updates
while developing and bundle them into a static website for deployment. Next.js
continues to build and serve the portfolio itself.

Run `yarn storybook` and open http://localhost:6006 to browse isolated portfolio
components. Stories reuse content from `config/`, load the site's Tailwind styles,
and serve images from `public/`. Use the toolbar to change the light/dark theme
and accent palette. Controls let you edit component props; Docs shows the generated
component documentation. Keep one `*.stories.tsx` file beside each covered
component, with named stories for its different scenarios—for example, `components/MetricBadge.stories.tsx` beside
`components/MetricBadge.tsx`.

Stories focus on simple presentational components: badges, tags, brand icons and
text, project and work cards, certifications, skill groups, book lists, and the
home introduction. `SidebarIcons` includes a labeled gallery and individual icon
stories. Examples reuse configured content and need no network or service mocks.
Forms, verification widgets, navigation, theme controls, scroll behavior, and
larger project groups are outside this Storybook's scope.

Build the standalone static site with:

```sh
yarn build-storybook
```

The deployable output is `storybook-static/`. This directory is generated and
ignored by Git. It can be hosted by any static web host.

### Deploy stories on Vercel

Create a **separate Vercel project** and import this same Git repository. Set:

| Setting | Value |
| --- | --- |
| Root Directory | Repository root |
| Framework Preset | Other |
| Install Command | `yarn install --frozen-lockfile` |
| Build Command | `yarn build-storybook` |
| Output Directory | `storybook-static` |

Click **Deploy** to get a shareable Storybook URL. Future pushes to that project's
production branch rebuild the stories, and pull requests can receive preview
URLs. Configure these overrides on the new Storybook project; the portfolio's
existing Vercel project continues to use `yarn build` and the Next.js preset.
Storybook does not require the contact form's email or Turnstile secrets.

See [Storybook's Next.js/Vite guide](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite)
and [Vercel's build settings](https://vercel.com/docs/builds/configure-a-build).
