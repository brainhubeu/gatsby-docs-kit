# Creating your site

After cloning starter you now have a skeleton to work from for your specific website. The following discusses the rest of the Docusaurus structure in order for you to prepare your site.

## Directory structure

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
│       │   │   └── landing.js
│       │   ├── layouts
│       │   ├── templates
│       │   └── globalReferences.js
│       ├── gatsby-docs-kit.yml
│       ├── gatsby-docs-kit-temp.json
│       └── package.json
```


* `www/src/pages/landing.js` - is an example Gatsby page written as a React component,
* `www/src/layouts` - if you want to create Gatsby layout then put it here. You will be able to reference it in `gatsby-docs-kit.yml`.
* `www/src/templates` - here you place custom templates for rendering Markdown pages. You will be able to reference it in `gatsby-docs-kit.yml`.
* `www/src/globalReferences.js` - if you want to use live editing of React components feature, then in that file you should export all necessary variables.
* `www/gatsby-docs-kit.(yml|json)` - contains configuration of gatsby-docs-kit.
* `www/static` - if you want to serve some other static content, then put it there. During Gatsby build time, it will be copied to `public` directory

## Creating custom Markdown page

To create a new page, you only need to do a few steps:

1. Add your documentation to markdown file, for example create file `awesome.md` containing:
    ```markdown
    # Test title

    This is awesome
    ```

1. Reference that file in gatsby-docs-kit config. For instance:
    ```yaml
    - title: Great
      dir: ../
      file: awesome.md
      url: custom-url
    ```

    > Note that you have to reference markdown file relatively to `gatsby-docs-kit.(yml|json)` config. If current position of `gatsby-docs-kit.(yml|json)` config is inconvenient for you, then you can change it in `gatsby-config.js`.

1. Now go to browser and you should see the `Greate` page.
