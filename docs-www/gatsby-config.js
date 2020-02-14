'use strict';

const path = require('path');

const pluginConfigFactory = require('@brainhubeu/gatsby-docs-kit/plugins');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Docs Kit',
    description: 'Easy to Maintain Markdown/React Documentation Static Websites - starter',
    image: 'https://cdn-images-1.medium.com/max/1200/1*CLUFZFaXF6NG27NA3d_JkQ.jpeg',
    url: 'https://brainhubeu.github.io/gatsby-docs-kit/',
    type: 'article',
    siteName: 'Gatsby Docs Kit',
    githubUrl: 'https://github.com/brainhubeu/gatsby-docs-kit',
  },

  // URL prefix on production environment. For more info see https://www.gatsbyjs.org/docs/path-prefix/
  pathPrefix: process.env.PATH_PREFIX || ' ',

  plugins: pluginConfigFactory({
    config: `${__dirname}/gatsby-docs-kit.yml`,
    resources: path.resolve(__dirname, '../docs'),
  }),
};
