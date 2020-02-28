'use strict';
const path = require('path');

const _ = require('lodash');

const GLOBALS_FILE_PATH = 'src/globalReferences.js';

const SCOPE_LOADER_FILE_PATH = 'webpack-loaders/scope-loader.js';

/**
 * Add custom webpack loader to magically import user defined global references to local globalReferences file
 * @param {Object} options
 * @param {Object} options.actions
 * @param {function} options.getConfig
 * @param {Object} options.loaders
 */
module.exports = ({ actions, getConfig, loaders }) => {
  const config = getConfig();
  /**
   * Modifying local globalReferences.js to import user defined globalReferences.js
   */
  // path to plugin globalReferences file
  const localGlobalsFilePath = path.resolve(path.join(__dirname, '..', GLOBALS_FILE_PATH));
  // path to user defined globalReferences
  const mainGlobalsFilePath = path.resolve(config.context, GLOBALS_FILE_PATH);

  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/),
    ),
    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js()` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),
      test: new RegExp(`${_.escapeRegExp('/gatsby-docs-kit/src/')}.*jsx?$`),
      // eslint-disable-next-line no-undefined
      exclude: undefined,
    },
    {
      loader: path.resolve(__dirname, SCOPE_LOADER_FILE_PATH),
      test: localGlobalsFilePath,
      query: {
        importPath: mainGlobalsFilePath,
      },
    },
  ];

  actions.replaceWebpackConfig(config);
};
