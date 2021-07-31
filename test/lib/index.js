"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _cjst = _interopRequireDefault(require("./cjst"));

var path = require('path');

var fs = require("fs-extra");

var glob = require('fast-glob');

var t = require('./cjst');

var MyApp = (0, _decorate2.default)([ta], function (_initialize) {
  var MyApp = function MyApp() {
    (0, _classCallCheck2.default)(this, MyApp);

    _initialize(this);
  };

  return {
    F: MyApp,
    d: [{
      kind: "field",
      static: true,
      key: "a",
      value: function value() {
        return 3;
      }
    }, {
      kind: "field",
      key: "title",
      value: function value() {
        return 'test';
      }
    }, {
      kind: "method",
      key: "say",
      value: function say() {}
    }, {
      kind: "field",
      key: "a",
      value: function value() {
        return function () {};
      }
    }]
  };
}); //cst a = 4;

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var a;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return '23';

          case 2:
            a = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _test.apply(this, arguments);
}

test();
new Promise(function (r) {
  return r(1);
});
var x = new Set();

module.exports = function () {
  var appSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'src';
  var appDist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dest';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var defaults = {
    cwd: process.cwd(),
    cleanDist: true,
    globOptions: {}
  };
  appSrc = appSrc || '.';
  options = Object.assign({}, defaults, options);

  if (options.cleanDist) {
    fs.emptyDirSync(path.resolve(options.cwd, appDist));
  }

  glob(["**/?(*).*", "**/*"], Object.assign({
    onlyFiles: false //absolute: true,

  }, options.globOptions, {
    cwd: path.resolve(options.cwd, appSrc)
  })).then(function (files) {
    files.forEach(function (file) {
      var absSrcFile = path.resolve(options.cwd, appSrc, file);
      var absDestFile = path.resolve(options.cwd, appDist, file);
      fs.copySync(absSrcFile, absDestFile);
    });
  }).catch(console.error);
};