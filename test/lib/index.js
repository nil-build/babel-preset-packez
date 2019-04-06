var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _cjst = _interopRequireDefault(require("./cjst"));

var _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var path = require('path');

var fs = require("fs-extra");

var glob = require('fast-glob');

var t = require('./cjst');

var MyApp = ta(_class = (_temp = _class2 =
/*#__PURE__*/
function () {
  function MyApp() {
    _classCallCheck(this, MyApp);

    this.title = 'test';

    this.a = function () {};
  }

  _createClass(MyApp, [{
    key: "say",
    value: function say() {}
  }]);

  return MyApp;
}(), _class2.a = 3, _temp)) || _class; //cst a = 4;


function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var a;
    return _regenerator["default"].wrap(function _callee$(_context) {
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
  })["catch"](console.error);
};