"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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

  var _super = (0, _createSuper2.default)(Snake);

  function Snake(name) {
    var _this;

    (0, _classCallCheck2.default)(this, Snake);
    _this = _super.call(this, name);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "up", function () {
      console.log((0, _assertThisInitialized2.default)(_this));
    });
    return _this;
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

  var _super2 = (0, _createSuper2.default)(Horse);

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