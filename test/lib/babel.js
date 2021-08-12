"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  vxx: true,
  sv21: true,
  v: true,
  x111: true,
  v333: true,
  sv2: true
};
exports.default = f;
Object.defineProperty(exports, "x111", {
  enumerable: true,
  get: function get() {
    return ns.x111;
  }
});
Object.defineProperty(exports, "v333", {
  enumerable: true,
  get: function get() {
    return ns.x222;
  }
});
Object.defineProperty(exports, "sv2", {
  enumerable: true,
  get: function get() {
    return ns.default;
  }
});
exports.v = exports.sv21 = exports.vxx = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _classPrivateMethodGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateMethodGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _skipFirstGeneratorNext2 = _interopRequireDefault(require("@babel/runtime/helpers/skipFirstGeneratorNext"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapAsyncGenerator"));

var ns = _interopRequireWildcard3(require("mod"));

Object.keys(ns).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === ns[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return ns[key];
    }
  });
});
var _excluded = ["x", "y"];
var sv21;
exports.v = exports.sv21 = sv21;
var vxx;
exports.vxx = vxx;

function f() {}

{
  var _at = at(),
      _at2 = (0, _slicedToArray2.default)(_at, 2),
      _a = _at2[0],
      _b = _at2[1];
}
{
  //typeof
  var s = num;
  typeof s === "number";
} //member-expression-literals

{
  obj["foo"] = "isValid";
  obj.const = "isKeyword";
  obj["var"] = "isKeyword";
} //property-literals

{
  var _foo;

  var foo = (_foo = {
    // changed
    bar: function bar() {},
    1: function _() {},
    // not changed
    default: 1
  }, (0, _defineProperty2.default)(_foo, a, 2), (0, _defineProperty2.default)(_foo, "foo", 1), _foo);
} //reserved-words

{
  var abstract = 1;
  var x = abstract + 1;
} //property-mutators

{
  var foo = {
    get bar() {
      return this._bar;
    },

    set bar(value) {
      this._bar = value;
    }

  };
} //arrow-functions

{
  var a1 = function a1() {};

  var a2 = function a2(b) {
    return b;
  };

  var double = [1, 2, 3].map(function (num) {
    return num * 2;
  });
  console.log(double); // [2,4,6]

  var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],
    printFriends: function printFriends() {
      var _this = this;

      this._friends.forEach(function (f) {
        return console.log(_this._name + " knows " + f);
      });
    }
  };
  console.log(bob.printFriends());
} //block-scoped-functions

{
  {
    var _name = function _name(n) {
      return n;
    };
  }
  name("Steve");
} //block - scoping

{
  {
    var _a3 = 3;
  }
  var _a2 = 3;
} //classes

{
  var Test = /*#__PURE__*/function () {
    function Test(name) {
      (0, _classCallCheck2.default)(this, Test);
      this.name = name;
    }

    (0, _createClass2.default)(Test, [{
      key: "logger",
      value: function logger() {
        console.log("Hello", this.name);
      }
    }]);
    return Test;
  }();
} //computed-properties

{
  var _obj;

  var obj = (_obj = {}, (0, _defineProperty2.default)(_obj, "x" + foo, "heh"), (0, _defineProperty2.default)(_obj, "y" + bar, "noo"), (0, _defineProperty2.default)(_obj, "foo", "foo"), (0, _defineProperty2.default)(_obj, "bar", "bar"), _obj);
} //destructuring

{
  var _x = obj.x,
      _y = obj.y;

  var _arr = arr,
      _arr2 = (0, _toArray2.default)(_arr),
      _a4 = _arr2[0],
      _b2 = _arr2[1],
      rest = _arr2.slice(2);
} //duplicate-keys

{
  var x = (0, _defineProperty2.default)({
    a: 5
  }, "a", 6);
  var y = (0, _defineProperty2.default)({
    get a() {},

    set a(x) {}

  }, "a", 3);
} //for-of

{
  var _iterator = (0, _createForOfIteratorHelper2.default)(foo),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
} //function-name

{
  var number = function number(x) {
    return x;
  };
} //instanceof

{
  foo instanceof Bar;
} //literals

{
  var b = 3; // binary integer literal

  var o = 7; // octal integer literal

  var u = "Hello\n\t!"; // unicode string literals, newline and tab
} //new-target

{
  var Foo = function _target() {
    console.log(this instanceof _target ? this.constructor : void 0);
  };

  Foo(); // => undefined

  new Foo(); // => Foo
} //object-super

{
  var _obj3;

  var _obj2 = {
    say: function say() {
      return "Hello";
    }
  };
  var obj2 = _obj3 = {
    say: function say() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(_obj3), "say", this).call(this) + "World!";
    }
  };
} //parameters

{
  var test = function test() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hello";

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        a = _ref.a,
        b = _ref.b;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    console.log(x, a, b, args);
  };
} //shorthand-properties

{
  var o = {
    a: a,
    b: b,
    c: c
  };
} //spread

{
  var za = ["a", "b", "c"];
  var zb = [].concat(za, ["foo"]);
  var zc = foo.apply(void 0, za);
} //sticky-regex

{
  var _a5 = new RegExp("o+", "y");
} //template-literals

{
  "foo".concat(bar);
} //typeof-symbol

{
  typeof Symbol() === "symbol";
} //unicode-regex

{
  var string = "foo💩bar";
  var match = string.match(/foo((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))bar/);
} //ES2016
//exponentiation-operator

{
  var _x3 = Math.pow(10, 2);

  _x3 = Math.pow(_x3, 3);
} //ES2017
//async-to-generator

{
  var _foo2 = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return bar();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _foo2() {
      return _ref2.apply(this, arguments);
    };
  }();
} //ES2018
//async-generator-functions

{
  var agf = function agf() {
    return _agf3.apply(this, arguments);
  };

  var _agf3 = function _agf2() {
    _agf3 = (0, _wrapAsyncGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _awaitAsyncGenerator2.default)(1);

            case 2:
              _context2.next = 4;
              return 2;

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _agf3.apply(this, arguments);
  };
} //dotall-regex

{
  /[\s\S]/;
} //object-rest-spread

{
  var ui = {
    io: 1
  };

  var _x$y$a$b$ui = Object.assign({
    x: 1,
    y: 2,
    a: 3,
    b: 4
  }, ui),
      _x4 = _x$y$a$b$ui.x,
      _y3 = _x$y$a$b$ui.y,
      z = (0, _objectWithoutProperties2.default)(_x$y$a$b$ui, _excluded);

  console.log(_x4); // 1

  console.log(_y3); // 2

  console.log(z); // { a: 3, b: 4 }
} //optional-catch-binding

{
  try {
    throw 0;
  } catch (_unused) {
    doSomethingWhichDoesntCareAboutTheValueThrown();
  }
} //Experimental
//class-properties

{
  var Bork = /*#__PURE__*/function () {
    function Bork() {
      var _this2 = this;

      (0, _classCallCheck2.default)(this, Bork);
      (0, _defineProperty2.default)(this, "instanceProperty", "bork");
      (0, _defineProperty2.default)(this, "boundFunction", function () {
        return _this2.instanceProperty;
      });
    }

    (0, _createClass2.default)(Bork, [{
      key: "input",
      value: function input() {
        1;
      }
    }]);
    return Bork;
  }();

  (0, _defineProperty2.default)(Bork, "staticProperty", "babelIsCool");
  (0, _defineProperty2.default)(Bork, "staticFunction", function () {
    return Bork.staticProperty;
  });
  var myBork = new Bork(); //Property initializers are not on the prototype.

  console.log(myBork.__proto__.boundFunction); // > undefined
  //Bound functions are bound to the class instance.

  console.log(myBork.boundFunction.call(undefined)); // > "bork"
  //Static function exists on the class.

  console.log(Bork.staticFunction()); // > "babelIsCool"
} //decorators

{
  var annotation = function annotation(target) {
    target.annotated = true;
  };

  // @annotation
  var MyClass = function MyClass() {
    (0, _classCallCheck2.default)(this, MyClass);
  };
} //do-expressions
// {
//     let za = do {
//         if (x > 10) {
//             ("big");
//         } else {
//             ("small");
//         }
//     };
//     // is equivalent to:
//     let zza = x > 10 ? "big" : "small";
// }
//function-bind
// {
//     obj::func;
//     // is equivalent to:
//     func.bind(obj)::obj.func;
//     // is equivalent to:
//     obj.func.bind(obj);
//     obj::func(val);
//     // is equivalent to:
//     func.call(obj, val)::obj.func(val);
//     // is equivalent to:
//     obj.func.call(obj, val);
// }
//function-sent

{
  var generator = function () {
    var _ref3 = (0, _skipFirstGeneratorNext2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _functionSent;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return;

            case 2:
              _functionSent = _context3.sent;
              console.log("Sent", _functionSent);
              _context3.t0 = console;
              _context3.next = 7;
              return;

            case 7:
              _context3.t1 = _functionSent = _context3.sent;

              _context3.t0.log.call(_context3.t0, "Yield", _context3.t1);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function generator() {
      return _ref3.apply(this, arguments);
    };
  }();

  var iterator = generator();
  iterator.next(1); // Logs "Sent 1"

  iterator.next(2); // Logs "Yield 2"
} //logical-assignment-operators
// {
// 	a ||= b;
// 	obj.a.b ||= c;
// 	a &&= b;
// 	obj.a.b &&= c;
// }
//nullish-coalescing-operator

{
  var _object$foo;

  var foo = (_object$foo = object.foo) !== null && _object$foo !== void 0 ? _object$foo : "default";
} //numeric-separator

{
  var budget = 1000000000000; // What is the value of `budget`? It's 1 trillion!
  //
  // Let's confirm:

  console.log(budget === Math.pow(10, 12)); // true
} //optional-chaining

{
  var _obj4$foo, _obj4$foo$bar, _obj4$qux, _obj4$foo$bar2;

  var _obj4 = {
    foo: {
      bar: {
        baz: 42
      }
    }
  };
  var baz = _obj4 === null || _obj4 === void 0 ? void 0 : (_obj4$foo = _obj4.foo) === null || _obj4$foo === void 0 ? void 0 : (_obj4$foo$bar = _obj4$foo.bar) === null || _obj4$foo$bar === void 0 ? void 0 : _obj4$foo$bar.baz; // 42

  var safe = _obj4 === null || _obj4 === void 0 ? void 0 : (_obj4$qux = _obj4.qux) === null || _obj4$qux === void 0 ? void 0 : _obj4$qux.baz; // undefined
  // Optional chaining and normal chaining can be intermixed

  _obj4 === null || _obj4 === void 0 ? void 0 : (_obj4$foo$bar2 = _obj4.foo.bar) === null || _obj4$foo$bar2 === void 0 ? void 0 : _obj4$foo$bar2.baz; // Only access `foo` if `obj` exists, and `baz` if
  // `bar` exists
} //pipeline-operator
// {
//     const sum = (nos) => nos.reduce((p, c) => p + +c, 0);
//     const avg = (nos) => sum(nos) / nos.length;
//     const tail = ([_, ...tail]) => tail;
//     const tailAndAverage = tail |> avg; // valid?
//     function double(x) {
//         return x + x;
//     }
//     function add(x, y) {
//         return x + y;
//     }
//     function boundScore(min, max, score) {
//         return Math.max(min, Math.min(max, score));
//     }
//     let person = { score: 25 };
//     let newScore =
//         person.score
//         |> double
//         |> ((_) => add(7, _))
//         |> ((_) => boundScore(0, 100, _));
//     newScore; //=> 57
// }
//throw-expressions
// {
//     function test(param = throw new Error("required!")) {
//         const test = param === true || throw new Error("Falsey!");
//     }
// }
//react-jsx

{
  var Hr = function Hr() {
    return /*#__PURE__*/React.createElement("hr", {
      className: "hr"
    });
  };

  var profile = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "avatar.png",
    className: "profile"
  }), /*#__PURE__*/React.createElement("h3", null, [user.firstName, user.lastName].join(" ")));

  /*#__PURE__*/
  React.createElement(Sometag, null);
} //flow-strip-types
// {
//     function foo(one: any, two: number, three?): string { }
// }
//object-assign

{
  Object.assign(a, b);
} //object-set-prototype-of-to-assign

{
  Object.setPrototypeOf(bar, foo);
} //proto-to-assign

{
  var foo = {
    a: 1
  };
  var bar = {
    b: 2
  };
  bar.__proto__ = foo;
  bar.a; // 1

  bar.b; // 2
} //regenerator

{
  var _a6 = /*#__PURE__*/_regenerator.default.mark(function _a6() {
    return _regenerator.default.wrap(function _a6$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return 1;

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _a6);
  });
} //private-methods

{
  var _xValue = /*#__PURE__*/new WeakMap();

  var _x5 = /*#__PURE__*/new WeakMap();

  var _render = /*#__PURE__*/new WeakSet();

  var _clicked = /*#__PURE__*/new WeakSet();

  var Counter = /*#__PURE__*/function (_HTMLElement) {
    (0, _inherits2.default)(Counter, _HTMLElement);

    var _super = (0, _createSuper2.default)(Counter);

    function Counter() {
      var _this3;

      (0, _classCallCheck2.default)(this, Counter);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3 = _super.call.apply(_super, [this].concat(args));

      _clicked.add((0, _assertThisInitialized2.default)(_this3));

      _render.add((0, _assertThisInitialized2.default)(_this3));

      _x5.set((0, _assertThisInitialized2.default)(_this3), {
        get: _get_x,
        set: _set_x
      });

      _xValue.set((0, _assertThisInitialized2.default)(_this3), {
        writable: true,
        value: 0
      });

      return _this3;
    }

    return Counter;
  }( /*#__PURE__*/(0, _wrapNativeSuper2.default)(HTMLElement));

  function _get_x() {
    return (0, _classPrivateFieldGet2.default)(this, _xValue);
  }

  function _set_x(value) {
    (0, _classPrivateFieldSet2.default)(this, _xValue, value);
    window.requestAnimationFrame((0, _classPrivateMethodGet2.default)(this, _render, _render2).bind(this));
  }

  function _render2() {}

  function _clicked2() {
    var _this$x;

    (0, _classPrivateFieldSet2.default)(this, _x5, (_this$x = +(0, _classPrivateFieldGet2.default)(this, _x5)) + 1), _this$x;
  }
} //partial-application
// {
//     function add(x, y) {
//         return x + y;
//     }
//     const addOne = add(1, ?); // apply from the left
//     addOne(2); // 3
//     const addTen = add(?, 10); // apply from the right
//     addTen(2); // 12
//     let newScore = player.score |> add(7, ?) |> clamp(0, 100, ?); // shallow stack, the pipe to `clamp` is the same frame as the pipe to `add`.
// }
//proposal-throw-expressions
// {
//     function test(param = throw new Error("required!")) {
//         const test = param === true || throw new Error("Falsy!");
//     }
// }
//proposal-top-level-await

{
  var dynamic = await Promise.resolve("".concat(computedModuleSpecifier)).then(function (s) {
    return (0, _interopRequireWildcard2.default)(require(s));
  });
  var data = await fetch(url);
  console.log(dynamic, data);
} //flow
// {
// 	function foo(one: any, two: number, three?): string {}
// }