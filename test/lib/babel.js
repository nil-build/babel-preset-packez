"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _skipFirstGeneratorNext2 = _interopRequireDefault(require("@babel/runtime/helpers/skipFirstGeneratorNext"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapAsyncGenerator"));

var ns = _interopRequireWildcard3(require("mod"));

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

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  var foo = {
    // changed
    bar: function bar() {},
    "1": function _() {},
    // not changed
    default: 1,
    [a]: 2,
    foo: 1
  };
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
  var a1 = () => {};

  var a2 = b => b;

  var double = [1, 2, 3].map(num => num * 2);
  console.log(double); // [2,4,6]

  var bob = {
    _name: "Bob",
    _friends: ["Sally", "Tom"],

    printFriends() {
      this._friends.forEach(f => console.log(this._name + " knows " + f));
    }

  };
  console.log(bob.printFriends());
} //block-scoped-functions

{
  {
    function _name(n) {
      return n;
    }
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
  class Test {
    constructor(name) {
      this.name = name;
    }

    logger() {
      console.log("Hello", this.name);
    }

  }
} //computed-properties

{
  var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
  };
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
  var x = {
    a: 5,
    a: 6
  };
  var y = {
    get a() {},

    set a(x) {},

    a: 3
  };
} //for-of

{
  var _iterator = _createForOfIteratorHelper(foo),
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
  var number = x => x;
} //instanceof

{
  foo instanceof Bar;
} //literals

{
  var b = 0b11; // binary integer literal

  var o = 0o7; // octal integer literal

  var u = "Hello\u{000A}\u{0009}!"; // unicode string literals, newline and tab
} //new-target

{
  function Foo() {
    console.log(new.target);
  }

  Foo(); // => undefined

  new Foo(); // => Foo
} //object-super

{
  var _obj = {
    say() {
      return "Hello";
    }

  };
  var obj2 = {
    say() {
      return super.say() + "World!";
    }

  };
} //parameters

{
  function test(x = "hello", {
    a,
    b
  }, ...args) {
    console.log(x, a, b, args);
  }
} //shorthand-properties

{
  var o = {
    a,
    b,
    c
  };
} //spread

{
  var za = ["a", "b", "c"];
  var zb = [...za, "foo"];
  var zc = foo(...za);
} //sticky-regex

{
  var _a5 = /o+/y;
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
  var _x2 = Math.pow(10, 2);

  _x2 = Math.pow(_x2, 3);
} //ES2017
//async-to-generator

{
  function _foo() {
    return _foo2.apply(this, arguments);
  }

  function _foo2() {
    _foo2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
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
    return _foo2.apply(this, arguments);
  }
} //ES2018
//async-generator-functions

{
  function agf() {
    return _agf.apply(this, arguments);
  }

  function _agf() {
    _agf = (0, _wrapAsyncGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
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
    return _agf.apply(this, arguments);
  }
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
      _x3 = _x$y$a$b$ui.x,
      _y2 = _x$y$a$b$ui.y,
      z = (0, _objectWithoutProperties2.default)(_x$y$a$b$ui, ["x", "y"]);

  console.log(_x3); // 1

  console.log(_y2); // 2

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
  class Bork {
    constructor() {
      (0, _defineProperty2.default)(this, "instanceProperty", "bork");
      (0, _defineProperty2.default)(this, "boundFunction", () => {
        return this.instanceProperty;
      });
    }

  }

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
  var MyClass = _decorate([annotation], function (_initialize) {
    class MyClass {
      constructor() {
        _initialize(this);
      }

    }

    return {
      F: MyClass,
      d: []
    };
  });

  function annotation(target) {
    target.annotated = true;
  }
} //do-expressions

{
  var _za = x > 10 ? "big" : "small"; // is equivalent to:


  var zza = x > 10 ? "big" : "small";
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
  function generator() {
    return _generator.apply(this, arguments);
  }

  function _generator() {
    _generator = (0, _skipFirstGeneratorNext2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _functionSent;

      return _regenerator.default.wrap(function _callee3$(_context4) {
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
    return _generator.apply(this, arguments);
  }

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
  var _obj2$foo, _obj2$foo$bar, _obj2$qux, _obj2$foo$bar2;

  var _obj2 = {
    foo: {
      bar: {
        baz: 42
      }
    }
  };
  var baz = _obj2 === null || _obj2 === void 0 ? void 0 : (_obj2$foo = _obj2.foo) === null || _obj2$foo === void 0 ? void 0 : (_obj2$foo$bar = _obj2$foo.bar) === null || _obj2$foo$bar === void 0 ? void 0 : _obj2$foo$bar.baz; // 42

  var safe = _obj2 === null || _obj2 === void 0 ? void 0 : (_obj2$qux = _obj2.qux) === null || _obj2$qux === void 0 ? void 0 : _obj2$qux.baz; // undefined
  // Optional chaining and normal chaining can be intermixed

  _obj2 === null || _obj2 === void 0 ? void 0 : (_obj2$foo$bar2 = _obj2.foo.bar) === null || _obj2$foo$bar2 === void 0 ? void 0 : _obj2$foo$bar2.baz; // Only access `foo` if `obj` exists, and `baz` if
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
  var Hr = () => {
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
  var _marked = /*#__PURE__*/_regenerator.default.mark(_a6);

  function _a6() {
    return _regenerator.default.wrap(function _a6$(_context5) {
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
    }, _marked);
  }
} //private-methods

{
  var _xValue = new WeakMap();

  var _x4 = new WeakMap();

  var _render = new WeakSet();

  var _clicked = new WeakSet();

  class Counter extends HTMLElement {
    constructor(...args) {
      super(...args);

      _clicked.add(this);

      _render.add(this);

      _x4.set(this, {
        get: _get_x,
        set: _set_x
      });

      _xValue.set(this, {
        writable: true,
        value: 0
      });
    }

  }

  var _get_x = function _get_x() {
    return (0, _classPrivateFieldGet2.default)(this, _xValue);
  };

  var _set_x = function _set_x(value) {
    (0, _classPrivateFieldSet2.default)(this, _xValue, value);
    window.requestAnimationFrame(_classPrivateMethodGet(this, _render, _render2).bind(this));
  };

  var _render2 = function _render2() {};

  var _clicked2 = function _clicked2() {
    var _this$x;

    (0, _classPrivateFieldSet2.default)(this, _x4, (_this$x = +(0, _classPrivateFieldGet2.default)(this, _x4)) + 1), _this$x;
  };
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
  var dynamic = await Promise.resolve("".concat(computedModuleSpecifier)).then(s => (0, _interopRequireWildcard2.default)(require(s)));
  var data = await fetch(url);
  console.log(dynamic, data);
} //flow
// {
// 	function foo(one: any, two: number, three?): string {}
// }