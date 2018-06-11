# gatsby-config.js

This is a file where You can configure few thing
1. Meta and OG tags
    * find `siteMetadata`
    * fill with your data
        * title
        * description
        * image
        * url
        * type
        * siteName

        ``` js
            siteMetadata: {
                title: 'Brainhub template',
                description: 'Default template for open-source libraries',
                image: 'https://cdn-images-1.medium.com/max/1200/1*CLUFZFaXF6NG27NA3d_JkQ.jpeg',
                url: 'https://screencloud.dev.brainhub.pl/',
                type: 'article',
                siteName: 'Brainhub template',
            }
        ```
    > DON'T REMOVE ANY FIELD FROM CONFIG, IF YOU DON'T WONT IT - LEAVE IT EMPTY

    * [more about tags](http://ogp.me/)
    * don't worry if your chrome extension is not showing preview, for [react](https://reactjs.org/) it is also not working
    * check later on [open graph checker](https://opengraphcheck.com/)
2. Add github url
    * find `siteMetadata`
    * edit `githubUrl`
3. You can change default path to all your markdown files. It's necessary to provide path to all markdowns and assets, to enable hot reloading.
    * find `gatsby-source-filesystem` in `plugins`
    * change `path` in `options`

    > Note that it's temporary solution. In future version this option will be removed.

4. You can change default path for your `gatsby-docs-kit.yml`
    * find `gatsby-transformer-remark` in `plugins`
    * find `gatsby-docs-kit` and change path in `config`

    ``` js{7}
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
            {
                resolve: 'gatsby-docs-kit',
                options: {
                config: `${__dirname}/gatsby-docs-kit.yml`,
    ```
5. Change default favicon path
    * find `gatsby-plugin-catch-links` in `plugins`
    * edit `logo` in `options`

    ``` js{5}
        'gatsby-plugin-catch-links',
        {
        resolve: `gatsby-plugin-favicon`,
        options: {
            logo: './src/static/favicon.png',
    ```

