
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _lodash = require("lodash");

var _plugins = _interopRequireDefault(require("./plugins"));

module.exports = function (api, opts) {
  const defaultOpts = {
    modules: "cjs",
    strictMode: true,
    runtimeOptions: {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false,
      absoluteRuntime: false
    },
    exclude: ['transform-typeof-symbol']
  };
  opts = (0, _lodash.defaultsDeep)(opts, defaultOpts);
  return {
    "presets": [[require.resolve('@babel/preset-env'), (0, _lodash.omit)(opts, ["runtimeOptions", "strictMode"])], require.resolve('@babel/preset-react'), require.resolve('@babel/preset-flow')],
    "plugins": (0, _plugins.default)(api, opts)
  };
};