# Installation

Gatsby Docs Kit was designed from the ground up to be easily installed and used to get your website up and running quickly. We have created a starter that contains example docs. To start:

1. Ensure you have the latest version of [Node](https://nodejs.org/en/download/) installed. We also recommend you install [Yarn](https://yarnpkg.com/en/docs/install) as well.

    > While we recommend using latest Node version, your Node version must be at least 8.x.

1. Ensure you have Git installed.
1. Go into the root of your GitHub repo directory where you will be creating the docs.
1. Run

    `git clone <TODO STARTER GIT>`

1. Go to `docs/www` and run

    `yarn install`

## Verifying Installation

Along with previously existing files and directories, your root directory will now contain a structure similar to:

```bash
.
├── docs
│   ├── getting-started
│   │   ├── creating-site.md
│   │   ├── installation.md
│   │   ├── introduction.md
│   │   └── publishing.md
│   ├── ...
│   └── www
│       ├── src
│       │   ├── pages
│       │   │   └── ...
│       │   ├── layouts
│       │   │   └── ...
│       │   ├── templates
│       │   │   └── ...
│       │   └── globalReferences.js
│       ├── gatsby-docs-kit.yml
│       ├── gatsby-docs-kit-temp.json
│       └── package.json
```

If you are still in `www` directory, then

1. Run the local webserver via `yarn develop` or `npm develop`.
1. Load the example site at http://localhost:8000. You should see the example site loaded in your web browser.
1. Visit http://localhost:8000/___graphql to explore your site's GraphiQL data and schema.
