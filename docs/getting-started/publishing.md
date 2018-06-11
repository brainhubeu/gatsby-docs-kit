# Publishing

You should now have a [site up and running locally](installation.md). Now it's time to publish it. Gatsby generates a static HTML website that is ready to be served by your favorite web server or online hosting solution.

## Building Static HTML Pages

To create a static build, run the following script from the `www` directory:

```bash
yarn run build # or `npm run build`
```

This will generate a `public` folder inside the `www` directory containing the `.html` files from all of your pages.

## Hosting Static HTML Pages

At this point, you can take all of the files inside the `www/public` folder and serve the by your favorite web server.

> It’s common for sites to be hosted somewhere other than the root of their domain. Say we have a Gatsby site at example.com/blog/. In this case, we would need a prefix (/blog) added to all paths on the site. To do so, please set `pathPrefix` correctly in `gatsby-config.js`. For more information, see documentation of [Gatsby](https://www.gatsbyjs.org/docs/path-prefix/).

### Using GitHub Pages

Deploying your Gatsby site to GitHub Pages is straightforward if you are already using GitHub to host your project. Your code repository does not even need to be public.

To deploy site to github pages, just run following script inside `www` directory:

```bash
npm run deploy:gh
```

> Even if your repo is private, anything published to a `gh-pages` branch will be [public](https://help.github.com/articles/user-organization-and-project-pages/).

Looking for more information? See documentation of [GitHub Pages](https://pages.github.com/).
