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

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _skipFirstGeneratorNext(fn) { return function () { var it = fn.apply(this, arguments); it.next(); return it; }; }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  var ui = {
    io: 1
  };

  var _x$y$a$b$ui = _objectSpread({
    x: 1,
    y: 2,
    a: 3,
    b: 4
  }, ui),
      _x4 = _x$y$a$b$ui.x,
      _y3 = _x$y$a$b$ui.y,
      z = _objectWithoutProperties(_x$y$a$b$ui, ["x", "y"]);

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

    _defineProperty(this, "instanceProperty", "bork");

    _defineProperty(this, "boundFunction", function () {
      return _this2.instanceProperty;
    });
  };

  _defineProperty(Bork, "staticProperty", "babelIsCool");

  _defineProperty(Bork, "staticFunction", function () {
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

  var MyClass = _decorate([annotation], function (_initialize) {
    var MyClass = function MyClass() {
      _classCallCheck(this, MyClass);

      _initialize(this);
    };

    return {
      F: MyClass,
      d: []
    };
  });
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
  bar.__proto__ = foo;
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

      _clicked.add(_assertThisInitialized(_this3));

      _render.add(_assertThisInitialized(_this3));

      _x5.set(_assertThisInitialized(_this3), {
        get: _get_x,
        set: _set_x
      });

      _xValue.set(_assertThisInitialized(_this3), {
        writable: true,
        value: 0
      });

      return _this3;
    }

    return Counter;
  }(_wrapNativeSuper(HTMLElement));

  var _xValue = new WeakMap();

  var _x5 = new WeakMap();

  var _render = new WeakSet();

  var _clicked = new WeakSet();

  var _get_x = function _get_x() {
    return _classPrivateFieldGet(this, _xValue);
  };

  var _set_x = function _set_x(value) {
    _classPrivateFieldSet(this, _xValue, value);

    window.requestAnimationFrame(_classPrivateMethodGet(this, _render, _render2).bind(this));
  };

  var _render2 = function _render2() {};

  var _clicked2 = function _clicked2() {
    var _this$x;

    _classPrivateFieldSet(this, _x5, (_this$x = +_classPrivateFieldGet(this, _x5)) + 1), _this$x;
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