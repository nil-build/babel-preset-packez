
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = _default;

var _lodash = require("lodash");

var _plugins = _interopRequireDefault(require("./plugins"));

function _default(api, opts) {
  const runtimeOptions = {
    corejs: false,
    helpers: true,
    regenerator: true,
    useESModules: false,
    absoluteRuntime: false
  };
  return {
    "presets": [[require.resolve('@babel/preset-env'), (0, _lodash.omit)(opts, ["runtimeOptions", "strictMode"]) // {
    //     "targets": {
    //         //"ie": 9,
    //         "browsers": opts.browsers || browserslist
    //     },
    //     modules,
    //     useBuiltIns: false,
    // }
    ], require.resolve('@babel/preset-react'), require.resolve('@babel/preset-flow')],
    plugins: (0, _plugins.default)(api, (0, _lodash.defaultsDeep)(opts, {
      modules: "auto",
      strictMode: true,
      runtimeOptions
    }))
  };
}