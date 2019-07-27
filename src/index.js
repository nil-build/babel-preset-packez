import { omit, defaultsDeep } from "lodash";
import plugins from "./plugins";

module.exports = function(api, opts) {
    const defaultOpts = {
        modules: "cjs",
        strictMode: true,
        decoratorsBeforeExport: true,
        // corejs: 3,
        // useBuiltIns: "usage",
        // targets: {
        //     node: "current"
        // },
        runtimeOptions: {
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
            absoluteRuntime: false
        },
        exclude: ["transform-typeof-symbol"]
    };

    opts = defaultsDeep(opts, defaultOpts);

    return {
        presets: [
            [
                require.resolve("@babel/preset-env"),
                omit(opts, [
                    "runtimeOptions",
                    "strictMode",
                    "decoratorsBeforeExport"
                ])
            ],
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-flow")
        ],
        plugins: plugins(api, opts)
    };
};
