const { fileExists } = require('../../utils/fs');

/**
 * Add imports to source code
 * @param {String} source source code
 * @param {String} importPath path to import
 * @return {String} extended source code
 */
function compile(source, importPath) {
  return `import * as GlobalScope from '${importPath}';
          export const Scope = GlobalScope;
          ${source}`;
}

/**
 * Webpack loader to import user defined scope
 * @param {String} source source code
 * @return {String} import path
 */
module.exports = function(source) {
  const importPath = this.query ? this.query.importPath : null;

  if (!importPath || !fileExists(importPath)) {
    return source;
  }

  return compile(source, importPath);
};
