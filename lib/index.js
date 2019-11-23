
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _lodash = require("lodash");

var _plugins = _interopRequireDefault(require("./plugins"));

module.exports = function (api, opts) {
  var defaultOpts = {
    modules: "commonjs",
    strictMode: true,
    useFlow: true,
    useTypeScript: false,
    decoratorsBeforeExport: true,
    // corejs: 3,
    // useBuiltIns: "usage",
    // targets: {
    //     node: "current"
    // },
    runtimeOptions: {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false,
      absoluteRuntime: false
    },
    exclude: ["transform-typeof-symbol"]
  };
  opts = (0, _lodash.defaultsDeep)(opts, defaultOpts);
  return {
    presets: [[require.resolve("@babel/preset-env"), (0, _lodash.omit)(opts, ["useFlow", "useTypeScript", "runtimeOptions", "strictMode", "decoratorsBeforeExport"])], require.resolve("@babel/preset-react"), opts.useTypeScript && [require.resolve("@babel/preset-typescript")]].filter(Boolean),
    plugins: (0, _plugins.default)(api, opts),
    overrides: [opts.useFlow && {
      exclude: /\.tsx?$/,
      plugins: [require.resolve("@babel/plugin-transform-flow-strip-types")]
    }, opts.useTypeScript && {
      test: /\.tsx?$/,
      plugins: [[require.resolve("@babel/plugin-proposal-decorators"), {
        legacy: true
      }]]
    }].filter(Boolean)
  };
};