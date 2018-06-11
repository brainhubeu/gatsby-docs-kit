# gatsby-docks-kit.(yml|json)

You can decide what will be in your main and side menu
1. title - value in main menu
2. url - main menu url path fragment
3. dir - path to markdown files
    * optional
    * default - './ '
4. layout - name of layout page js file (main menu, side menu), if You would like to create a custom layout page take one from `gatsby-docs-kit/src/layouts`, modify and put to `www/src/layouts`
    * optional
    * default - 'index'
5. template - name of template js file (to render your markdown), if You would like to create a custom template take one from `gatsby-docs-kit/src/templates`, modify and put to `www/src/templates`
    * optional
    * default - 'docs'
6. file - name of markdown/javascript file, use it if you have only one file
    * optional
7. depthOfMenu - quantity of nesting levels of side menu for single markdown site, based on headers (h2, h3....)
    * optional
    * default - 6
8. sidemenu - create nested elements in menu
    * title - header in side menu
    * dir - like above
    * url - like above
    * template
    * items - list of sub pages
        * title - name of menu item
        * file - name of markdown file
        * url - like above
        * template - like above

> One element must have `url` property set to `/`

### Example of landing page
```yaml
- title: Home
  dir: ../src
  url: /
  file: pages/name-of-your-landing-page.js
```

### Example of single-markdown-page
```yaml
- title: Document
  template: docs
  layout: index
  dir: docs
  url: docs
  file: documentation.md
  depthOfMenu: 2
```

### Example of multi markdown page
```yaml
- title: DOCS
  url: docs
  sidemenu:
    - title: Getting Started
      dir: getting-started
      items:
        - title: Introduction
          file: introduction.md
        - title: Installation
          file: installation.md
        - title: Creating your site
          file: creating-site.md
        - title: Publishing your site
          file: publishing.md
    - title: Guides
      dir: guides
      items:
        - title: Navigation and sidebars
          file: navigation.md
        - title: Custom markdown pages
          file: custom-markdown-pages.md
        - title: Markdown features
          file: markdown-features.md
        - title: Custom Gatsby page
          file: custom-gatsby-page.md
    - title: API
      dir: api
      items:
        - title: CLI commands
          file: cli-commands.md
        - title: Navigation config
          file: pages-config.md
        - title: Gatsby config
          file: gatsby-config.md
```

