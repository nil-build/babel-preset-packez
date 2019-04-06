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
exports["default"] = f;
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
    return ns["default"];
  }
});
exports.v = exports.sv21 = exports.vxx = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var ns = _interopRequireWildcard(require("mod"));

Object.keys(ns).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return ns[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { _defaults(o, p); return o; }; return _setPrototypeOf(o, p); }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _skipFirstGeneratorNext(fn) { return function () { var it = fn.apply(this, arguments); it.next(); return it; }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var sv21;
exports.v = exports.sv21 = sv21;
var vxx;
exports.vxx = vxx;

function f() {}

;
{
  //typeof
  var s = num;
  typeof s === 'number';
} //member-expression-literals

{
  obj["foo"] = "isValid";
  obj["const"] = "isKeyword";
  obj["var"] = "isKeyword";
} //property-literals

{
  var _foo;

  var foo = (_foo = {
    // changed
    "bar": function bar() {},
    "1": function _() {},
    // not changed
    "default": 1
  }, _defineProperty(_foo, a, 2), _defineProperty(_foo, "foo", 1), _foo);
} //reserved-words

{
  var _abstract = 1;
  var x = _abstract + 1;
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

  var _double = [1, 2, 3].map(function (num) {
    return num * 2;
  });

  console.log(_double); // [2,4,6]

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
    var _a2 = 3;
  }
  var _a = 3;
} //classes

{
  var Test =
  /*#__PURE__*/
  function () {
    function Test(name) {
      _classCallCheck(this, Test);

      this.name = name;
    }

    _createClass(Test, [{
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

  var obj = (_obj = {}, _defineProperty(_obj, "x" + foo, "heh"), _defineProperty(_obj, "y" + bar, "noo"), _defineProperty(_obj, "foo", "foo"), _defineProperty(_obj, "bar", "bar"), _obj);
} //destructuring

{
  var _x = obj.x,
      _y = obj.y;

  var _arr = arr,
      _arr2 = _toArray(_arr),
      _a3 = _arr2[0],
      _b = _arr2[1],
      rest = _arr2.slice(2);
} //duplicate-keys

{
  var x = _defineProperty({
    a: 5
  }, "a", 6);

  var y = _defineProperty({
    get a() {},

    set a(x) {}

  }, "a", 3);
} //for-of

{
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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
      return _get(_getPrototypeOf(_obj3), "say", this).call(this) + "World!";
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
  var za = ['a', 'b', 'c'];
  var zb = [].concat(za, ['foo']);
  var zc = foo.apply(void 0, za);
} //sticky-regex

{
  var _a4 = new RegExp("o+", "y");
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
  var _foo2 =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
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
    return _agf.apply(this, arguments);
  };

  var _agf = function (_agf2) {
    function _agf() {
      return _agf2.apply(this, arguments);
    }

    _agf.toString = function () {
      return _agf2.toString();
    };

    return _agf;
  }(function () {
    _agf = _wrapAsyncGenerator(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _awaitAsyncGenerator(1);

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
    return _agf.apply(this, arguments);
  });
} //dotall-regex

{
  /[\0-\uFFFF]/;
} //object-rest-spread

{
  var _x$y$a$b = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
  },
      _x4 = _x$y$a$b.x,
      _y3 = _x$y$a$b.y,
      z = _objectWithoutProperties(_x$y$a$b, ["x", "y"]);

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
  var Bork = function Bork() {
    var _this2 = this;

    _classCallCheck(this, Bork);

    this.instanceProperty = "bork";

    this.boundFunction = function () {
      return _this2.instanceProperty;
    };
  };

  Bork.staticProperty = "babelIsCool";

  Bork.staticFunction = function () {
    return Bork.staticProperty;
  };

  var myBork = new Bork(); //Property initializers are not on the prototype.

  console.log(myBork.__proto__.boundFunction); // > undefined
  //Bound functions are bound to the class instance.

  console.log(myBork.boundFunction.call(undefined)); // > "bork"
  //Static function exists on the class.

  console.log(Bork.staticFunction()); // > "babelIsCool"
} //decorators

{
  var _class;

  var annotation = function annotation(target) {
    target.annotated = true;
  };

  var MyClass = annotation(_class = function MyClass() {
    _classCallCheck(this, MyClass);
  }) || _class;
} //do-expressions

{
  var _za = x > 10 ? 'big' : 'small'; // is equivalent to:


  var zza = x > 10 ? 'big' : 'small';
} //function-bind

{
  var _context3;

  func.bind(obj); // is equivalent to:

  (_context3 = func.bind(obj), obj.func).bind(_context3); // is equivalent to:

  obj.func.bind(obj);
  func.call(obj, val); // is equivalent to:

  (_context3 = func.call(obj, val), obj.func).call(_context3, val); // is equivalent to:

  obj.func.call(obj, val);
} //function-sent

{
  var generator = function () {
    var _ref3 = _skipFirstGeneratorNext(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      var _functionSent;

      return _regenerator["default"].wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return;

            case 2:
              _functionSent = _context4.sent;
              console.log("Sent", _functionSent);
              _context4.t0 = console;
              _context4.next = 7;
              return;

            case 7:
              _context4.t1 = _functionSent = _context4.sent;

              _context4.t0.log.call(_context4.t0, "Yield", _context4.t1);

            case 9:
            case "end":
              return _context4.stop();
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

{
  var _obj$a, _obj$a2;

  a || (a = b);
  (_obj$a = obj.a).b || (_obj$a.b = c);
  a && (a = b);
  (_obj$a2 = obj.a).b && (_obj$a2.b = c);
} //nullish-coalescing-operator

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

{
  var _tail, _ref6, _ref7, _person$score;

  // valid?
  var _double2 = function _double2(x) {
    return x + x;
  };

  var add = function add(x, y) {
    return x + y;
  };

  var boundScore = function boundScore(min, max, score) {
    return Math.max(min, Math.min(max, score));
  };

  var sum = function sum(nos) {
    return nos.reduce(function (p, c) {
      return p + +c;
    }, 0);
  };

  var avg = function avg(nos) {
    return sum(nos) / nos.length;
  };

  var tail = function tail(_ref4) {
    var _ref5 = _toArray(_ref4),
        _ = _ref5[0],
        tail = _ref5.slice(1);

    return tail;
  };

  var tailAndAverage = (_tail = tail, avg(_tail));
  var person = {
    score: 25
  };
  var newScore = (_ref6 = (_ref7 = (_person$score = person.score, _double2(_person$score)), add(7, _ref7)), boundScore(0, 100, _ref6));
  newScore; //=> 57
} //throw-expressions

{
  var _test = function _test() {
    var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
      throw e;
    }(new Error('required!'));

    var test = param === true || function (e) {
      throw e;
    }(new Error('Falsey!'));
  };
} //react-jsx

{
  var Hr = function Hr() {
    return React.createElement("hr", {
      className: "hr"
    });
  };

  var profile = React.createElement("div", null, React.createElement("img", {
    src: "avatar.png",
    className: "profile"
  }), React.createElement("h3", null, [user.firstName, user.lastName].join(' ')));
  React.createElement(Sometag, null);
} //flow-strip-types

{
  var _foo3 = function _foo3(one, two, three) {};
} //object-assign

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

  _defaults(bar, foo);

  bar.a; // 1

  bar.b; // 2
} //regenerator

{
  var _a5 =
  /*#__PURE__*/
  _regenerator["default"].mark(function _a5() {
    return _regenerator["default"].wrap(function _a5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return 1;

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _a5);
  });
} //private-methods

{
  var Counter =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(Counter, _HTMLElement);

    function Counter() {
      var _getPrototypeOf2;

      var _this3;

      _classCallCheck(this, Counter);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Counter)).call.apply(_getPrototypeOf2, [this].concat(args)));
      Object.defineProperty(_assertThisInitialized(_this3), _clicked, {
        value: _clicked2
      });
      Object.defineProperty(_assertThisInitialized(_this3), _render, {
        value: _render2
      });
      Object.defineProperty(_assertThisInitialized(_this3), _x5, {
        get: _get_x,
        set: _set_x
      });
      Object.defineProperty(_assertThisInitialized(_this3), _xValue, {
        writable: true,
        value: 0
      });
      return _this3;
    }

    return Counter;
  }(_wrapNativeSuper(HTMLElement));

  var _xValue = _classPrivateFieldLooseKey("xValue");

  var _x5 = _classPrivateFieldLooseKey("x");

  var _render = _classPrivateFieldLooseKey("render");

  var _clicked = _classPrivateFieldLooseKey("clicked");

  var _get_x = function _get_x() {
    return _classPrivateFieldLooseBase(this, _xValue)[_xValue];
  };

  var _set_x = function _set_x(value) {
    _classPrivateFieldLooseBase(this, _xValue)[_xValue] = value;
    window.requestAnimationFrame(_classPrivateFieldLooseBase(this, _render)[_render].bind(this));
  };

  var _render2 = function _render2() {};

  var _clicked2 = function _clicked2() {
    _classPrivateFieldLooseBase(this, _x5)[_x5]++;
  };
} //partial-application

{
  var _add2, _add3, _ref8, _player$score, _add4, _clamp;

  var _add = function _add(x, y) {
    return x + y;
  };

  var addOne = (_add2 = _add, function _add(_argPlaceholder) {
    return _add2(1, _argPlaceholder);
  }); // apply from the left

  addOne(2); // 3

  var addTen = (_add3 = _add, function _add(_argPlaceholder2) {
    return _add3(_argPlaceholder2, 10);
  }); // apply from the right

  addTen(2); // 12

  var _newScore = (_ref8 = (_player$score = player.score, (_add4 = _add, function _add(_argPlaceholder3) {
    return _add4(7, _argPlaceholder3);
  })(_player$score)), (_clamp = clamp, function clamp(_argPlaceholder4) {
    return _clamp(0, 100, _argPlaceholder4);
  })(_ref8)); // shallow stack, the pipe to `clamp` is the same frame as the pipe to `add`.

}