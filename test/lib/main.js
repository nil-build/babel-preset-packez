var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var x = Object.create(null);
x.toString();
var s = {
  get name() {
    return 1;
  }

};

var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    (0, _classCallCheck2.default)(this, Animal);
    this.name = name;
  }

  (0, _createClass2.default)(Animal, [{
    key: "move",
    value: function move() {
      var distanceInMeters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    }
  }]);
  return Animal;
}();

var Snake = /*#__PURE__*/function (_Animal) {
  (0, _inherits2.default)(Snake, _Animal);

  var _super = _createSuper(Snake);

  function Snake(name) {
    (0, _classCallCheck2.default)(this, Snake);
    return _super.call(this, name);
  }

  (0, _createClass2.default)(Snake, [{
    key: "move",
    value: function move() {
      var distanceInMeters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var z = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = 1;
      s.value = 3;
      console.log("Slithering...");
      (0, _get2.default)((0, _getPrototypeOf2.default)(Snake.prototype), "move", this).call(this, distanceInMeters);
    }
  }]);
  return Snake;
}(Animal);

var Horse = /*#__PURE__*/function (_Animal2) {
  (0, _inherits2.default)(Horse, _Animal2);

  var _super2 = _createSuper(Horse);

  function Horse(name) {
    (0, _classCallCheck2.default)(this, Horse);
    return _super2.call(this, name);
  }

  (0, _createClass2.default)(Horse, [{
    key: "move",
    value: function move() {
      var distanceInMeters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 45;
      console.log("Galloping...");
      (0, _get2.default)((0, _getPrototypeOf2.default)(Horse.prototype), "move", this).call(this, distanceInMeters);
    }
  }]);
  return Horse;
}(Animal);

var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);