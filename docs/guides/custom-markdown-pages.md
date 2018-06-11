# Custom markdown pages

You can make a page from single markdown file or multiple markdown files.
If You have would like to create page from single file then:

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
file

### Example of single-markdown-page
```yaml
- title: Document
  file: documentation.md
```
Side menu will generate automagically

If You have more then one
1. create new folder in main directory`
2. put all Your markdown files there
3. open `www/gatsby-docs-kit.yml`
4. configure sidemenu navigation to Your files

### Example of multi markdown page
```yaml
- title: Documenta
  url: docs
  sidemenu:
    - title: Getting Started
      dir: name-of-your-folder
      items:
        - title: file-1-title
          file: file1.md
        - title: file-2-title
          file: file2.md
        ...
```

[Read more about menu configuration](../api/pages-config.md)

