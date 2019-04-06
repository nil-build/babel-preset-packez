function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(process.env.NODE_ENV);
console.log("process.env.NODE_ENV");
console.log("typeof window");
(typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
console.log(typeof window === "undefined" ? "undefined" : _typeof(window));