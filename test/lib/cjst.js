var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(foo);

function cssWithMappingToString(item, useSourceMap) {}

function toComment(sourceMap) {
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

console.log(module); // let a;
// let a;

module.exports = function (useSourceMap) {
  console.log(322);
};

function foo() {
  return _regenerator["default"].wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 1;

        case 4:
          _context.next = 6;
          return 1;

        case 6:
          _context.next = 8;
          return 1;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}