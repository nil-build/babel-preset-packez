"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _lodash = require("lodash");

var _plugins = _interopRequireDefault(require("./plugins"));

module.exports = function (api, opts) {
  return {
    plugins: (0, _plugins.default)(api, opts)
  };
};