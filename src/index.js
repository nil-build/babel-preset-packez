import { omit, defaultsDeep } from "lodash";
import plugins from "./plugins";

module.exports = function(api, opts) {
    const defaultOpts = {
        modules: "commonjs",
        strictMode: true,
        useFlow: true,
        useTypeScript: false,
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
                    "useFlow",
                    "useTypeScript",
                    "runtimeOptions",
                    "strictMode",
                    "decoratorsBeforeExport"
                ])
            ],
            require.resolve("@babel/preset-react"),
            opts.useTypeScript && [require.resolve("@babel/preset-typescript")]
        ].filter(Boolean),
        plugins: plugins(api, opts),
        overrides: [
            opts.useFlow && {
                exclude: /\.tsx?$/,
                plugins: [
                    require.resolve("@babel/plugin-transform-flow-strip-types")
                ]
            },
            opts.useTypeScript && {
                test: /\.tsx?$/,
                plugins: [
                    [
                        require.resolve("@babel/plugin-proposal-decorators"),
                        { legacy: true }
                    ]
                ]
            }
        ].filter(Boolean)
    };
};
