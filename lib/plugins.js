
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(api, opts) {
  var modules = opts.modules,
      strictMode = opts.strictMode,
      runtimeOptions = opts.runtimeOptions,
      _opts$decoratorsBefor = opts.decoratorsBeforeExport,
      decoratorsBeforeExport = _opts$decoratorsBefor === void 0 ? true : _opts$decoratorsBefor;
  var modulesMap = {
    commonjs: require.resolve("@babel/plugin-transform-modules-commonjs"),
    cjs: require.resolve("@babel/plugin-transform-modules-commonjs"),
    umd: require.resolve("@babel/plugin-transform-modules-umd"),
    amd: require.resolve("@babel/plugin-transform-modules-amd"),
    systemjs: require.resolve("@babel/plugin-transform-modules-systemjs")
  };
  var modulePlugin = modulesMap[modules] ? [modulesMap[modules], {
    strictMode: strictMode
  }] : null; // class-properties 开启 `loose` 后 private-methods 也要同时开启

  return [// 注：
  // modules: false =>  import(path)
  // modules: cjs => Promise.resolve.then( () => require(path) )
  // modules: amd => Promise.resolve.then( () => require([path], callback) )
  // ...
  require.resolve("@babel/plugin-syntax-dynamic-import"), // require.resolve("@babel/plugin-syntax-top-level-await"),
  require.resolve("@babel/plugin-proposal-async-generator-functions"), [require.resolve("@babel/plugin-proposal-decorators"), {
    decoratorsBeforeExport: decoratorsBeforeExport,
    legacy: false
  }], // Enable loose mode to use assignment instead of defineProperty
  [require.resolve("@babel/plugin-proposal-class-properties"), {
    loose: true
  }], [require.resolve("@babel/plugin-proposal-private-methods"), {
    loose: true
  }], require.resolve("@babel/plugin-proposal-do-expressions"), require.resolve("@babel/plugin-proposal-export-default-from"), require.resolve("@babel/plugin-proposal-export-namespace-from"), require.resolve("@babel/plugin-proposal-function-bind"), require.resolve("@babel/plugin-proposal-function-sent"), require.resolve("@babel/plugin-proposal-logical-assignment-operators"), require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"), require.resolve("@babel/plugin-proposal-numeric-separator"), require.resolve("@babel/plugin-proposal-optional-chaining"), require.resolve("@babel/plugin-proposal-partial-application"), require.resolve("@babel/plugin-proposal-throw-expressions"), require.resolve("@babel/plugin-proposal-optional-catch-binding"), // require.resolve("@babel/plugin-proposal-object-rest-spread"),
  // require.resolve("@babel/plugin-transform-react-jsx"),
  // require.resolve("@babel/plugin-transform-proto-to-assign"), //Internet Explorer(10 and below)
  [require.resolve("@babel/plugin-proposal-pipeline-operator"), {
    proposal: "minimal"
  }], runtimeOptions ? [require.resolve("@babel/plugin-transform-runtime"), runtimeOptions] : null, require.resolve("babel-plugin-dev-expression"), //Replaces __DEV__ with process.env.NODE_ENV !== 'production'
  modulePlugin].filter(function (v) {
    return v;
  });
}