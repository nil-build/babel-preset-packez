"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _lodash = require("lodash");

var _plugins = _interopRequireDefault(require("./plugins"));

module.exports = function (api, opts) {
  const defaultOpts = {
    modules: "commonjs",
    // 无效
    strictMode: true,
    // useFlow: false,
    decoratorsBeforeExport: true,
    // corejs: 3,
    // useBuiltIns: "usage",
    // targets: {
    //     node: "current"
    // },
    runtimeOptions: {
      version: require("@babel/runtime/package.json").version,
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
    presets: [[require.resolve("@babel/preset-env"), (0, _lodash.omit)(opts, ["useFlow", "runtimeOptions", "strictMode", "decoratorsBeforeExport"])], require.resolve("@babel/preset-react"), [require.resolve("@babel/preset-typescript"), {
      allowDeclareFields: true
    }]].filter(Boolean),
    plugins: (0, _plugins.default)(api, opts) // overrides: [
    // 	opts.useFlow && {
    // 		exclude: /\.tsx?$/,
    // 		plugins: [
    // 			require.resolve("@babel/plugin-transform-flow-strip-types"),
    // 		],
    // 	},
    // ].filter(Boolean),

  };
};