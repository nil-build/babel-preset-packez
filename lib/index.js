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
    allowDeclareFields: true,
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
    presets: [[require.resolve("@babel/preset-env"), (0, _lodash.omit)(opts, ["useFlow", "runtimeOptions", "strictMode", "allowDeclareFields"])], require.resolve("@babel/preset-react"), {
      plugins: (0, _plugins.default)(api, opts)
    }, [require.resolve("@babel/preset-typescript"), {
      allowDeclareFields: opts.allowDeclareFields
    }]].filter(Boolean) // plugins: plugins(api, opts),
    // TODO: @babel/plugin-transform-strict-mode
    // overrides: [
    // 	opts.useFlow && {
    // 		exclude: /\.tsx?$/,
    // 		plugins: [
    // 			require.resolve("@babel/plugin-transform-flow-strip-types"),
    // 		],
    // 	},
    // ].filter(Boolean),

  };
};