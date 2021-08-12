import { omit, defaultsDeep } from "lodash";
import plugins from "./plugins";

module.exports = function (api, opts) {
  const defaultOpts = {
    modules: "commonjs",
    // 无效
    strictMode: true,
    // useFlow: false,
    decoratorsBeforeExport: true,
    allowDeclareFields: true,
    // corejs: 3,
    // useBuiltIns: "usage",
    // targets: {
    //     node: "current"
    // },
    runtimeOptions: {
      version: require("@babel/runtime/package.json").version,
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false,
      absoluteRuntime: false,
    },
    exclude: ["transform-typeof-symbol"],
  };

  opts = defaultsDeep(opts, defaultOpts);

  return {
    presets: [
      [
        require.resolve("@babel/preset-env"),
        omit(opts, [
          "useFlow",
          "runtimeOptions",
          "strictMode",
          "decoratorsBeforeExport",
          "allowDeclareFields",
        ]),
      ],
      require.resolve("@babel/preset-react"),
      [
        require.resolve("@babel/preset-typescript"),
        {
          allowDeclareFields: opts.allowDeclareFields,
        },
      ],
    ].filter(Boolean),
    plugins: plugins(api, opts),
    // overrides: [
    // 	opts.useFlow && {
    // 		exclude: /\.tsx?$/,
    // 		plugins: [
    // 			require.resolve("@babel/plugin-transform-flow-strip-types"),
    // 		],
    // 	},
    // ].filter(Boolean),
  };
};
