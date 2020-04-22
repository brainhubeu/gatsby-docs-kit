# Gatsby Docs Kit

[![CircleCI](https://circleci.com/gh/brainhubeu/gatsby-docs-kit.svg?style=svg)](https://circleci.com/gh/brainhubeu/gatsby-docs-kit)
[![Last commit](https://img.shields.io/github/last-commit/brainhubeu/gatsby-docs-kit.svg)](https://github.com/brainhubeu/gatsby-docs-kit/commits/master)
[![license](https://img.shields.io/npm/l/@brainhubeu/gatsby-docs-kit.svg)](https://github.com/brainhubeu/gatsby-docs-kit/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

[![Downloads](https://img.shields.io/npm/dm/@brainhubeu/gatsby-docs-kit?color=blue)](https://www.npmjs.com/package/@brainhubeu/gatsby-docs-kit)
[![Activity](https://img.shields.io/github/commit-activity/m/brainhubeu/gatsby-docs-kit.svg)](https://github.com/brainhubeu/gatsby-docs-kit/commits/master)
[![Minified](https://img.shields.io/bundlephobia/min/@brainhubeu/gatsby-docs-kit?label=minified)](https://www.npmjs.com/package/@brainhubeu/gatsby-docs-kit)
[![npm](https://img.shields.io/npm/v/@brainhubeu/gatsby-docs-kit.svg)](https://www.npmjs.com/package/@brainhubeu/gatsby-docs-kit)
[![Contributors](https://img.shields.io/github/contributors/brainhubeu/gatsby-docs-kit?color=blue)](https://github.com/brainhubeu/gatsby-docs-kit/graphs/contributors)
### Easy to Maintain Markdown/React Documentation Static Websites 

Gatsby Docs Kit is a set of tools, extending [Gatsby](https://www.gatsbyjs.org/) to generate **gorgeous** documentation static website. Documentation source files are written in Markdown or as React components and configured with a single YAML/JSON5 configuration file.

## Features

* **Write in Markdown** - Save time and focus on your project's documentation content. Simply write docs with Markdown and Gatsby will generate a set of static html files ready to serve.
* **Customize with Gatsby and React** - Need something extra? Just create React component and *voilà*. You can do anything. Meanwhile Gatsby’s rich data plugin ecosystem will let you bring data from one or many other sources.
* **Preview as you work** - As you edit content, you see the resulting UI change in your local development environment browser without refreshing the page.
* **Static Progressive Web Apps** - Gatsby.js builds the fastest possible website. You get code and data splitting out-of-the-box. Gatsby loads only the critical HTML, CSS, data, and JavaScript so your site loads as fast as possible. Once loaded, Gatsby prefetches resources for other pages so clicking around the site feels incredibly fast.
* **Host anywhere** - Gatsby Docs Kit builds completely static HTML sites that you can host on GitHub pages, Netlify, or anywhere else you choose

## Try it out

Ensure you have the latest version of [Node](https://nodejs.org/en/download/) installed. We also recommend you install [Yarn](https://yarnpkg.com/en/docs/install) as well.

Clone repository:

```bash
git clone git@github.com:brainhubeu/gatsby-docs-kit.git && cd example
```

Then run:

```bash
yarn install
```

Seed documentation (if you do not have any yet): 

```bash
yarn seed
```

Run the local webserver via `yarn develop`;

The example site is available at http://localhost:8000. You should see the example site loaded in your web browser.
Also visit http://localhost:8000/___graphql to explore your site's GraphQL data and schema.

Then go to `./docs` to edit and write awesome docs!.

## Deploy

Ready to go? Want to deploy documentation to github pages? Run following command inside `docs-www` directory:

```bash
yarn deploy:gh
```
