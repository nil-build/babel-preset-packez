export default function(api, opts) {
    const {
        modules,
        strictMode,
        runtimeOptions,
        useFlow = true,
        decoratorsBeforeExport = true
    } = opts;

    const modulesMap = {
        commonjs: require.resolve("@babel/plugin-transform-modules-commonjs"),
        cjs: require.resolve("@babel/plugin-transform-modules-commonjs"),
        umd: require.resolve("@babel/plugin-transform-modules-umd"),
        amd: require.resolve("@babel/plugin-transform-modules-amd"),
        systemjs: require.resolve("@babel/plugin-transform-modules-systemjs")
    };
    const modulePlugin = modulesMap[modules] && [
        modulesMap[modules],
        {
            strictMode
        }
    ];
    // class-properties 开启 `loose` 后 private-methods 也要同时开启
    return [
        useFlow && [
            require.resolve("@babel/plugin-transform-flow-strip-types"),
            false
        ],
        require.resolve("babel-plugin-macros"),
        [
            require.resolve("@babel/plugin-transform-destructuring"),
            {
                // Use loose mode for performance:
                // https://github.com/facebook/create-react-app/issues/5602
                loose: false,
                selectiveLoose: [
                    "useState",
                    "useEffect",
                    "useContext",
                    "useReducer",
                    "useCallback",
                    "useMemo",
                    "useRef",
                    "useImperativeHandle",
                    "useLayoutEffect",
                    "useDebugValue"
                ]
            }
        ],
        // 注：
        // modules: false =>  import(path)
        // modules: cjs => Promise.resolve.then( () => require(path) )
        // modules: amd => Promise.resolve.then( () => require([path], callback) )
        // ...
        require.resolve("@babel/plugin-syntax-dynamic-import"),
        require.resolve("@babel/plugin-proposal-async-generator-functions"),
        [
            require.resolve("@babel/plugin-proposal-decorators"),
            {
                decoratorsBeforeExport,
                legacy: false
            }
        ],
        // Enable loose mode to use assignment instead of defineProperty
        [
            require.resolve("@babel/plugin-proposal-class-properties"),
            {
                loose: true
            }
        ],
        [
            require.resolve("@babel/plugin-proposal-private-methods"),
            {
                loose: true
            }
        ],
        require.resolve("@babel/plugin-proposal-do-expressions"),
        require.resolve("@babel/plugin-proposal-export-default-from"),
        require.resolve("@babel/plugin-proposal-export-namespace-from"),
        require.resolve("@babel/plugin-proposal-function-bind"),
        require.resolve("@babel/plugin-proposal-function-sent"),
        require.resolve("@babel/plugin-proposal-logical-assignment-operators"),
        require.resolve("@babel/plugin-proposal-nullish-coalescing-operator"),
        require.resolve("@babel/plugin-proposal-numeric-separator"),
        require.resolve("@babel/plugin-proposal-optional-chaining"),
        require.resolve("@babel/plugin-proposal-partial-application"),
        require.resolve("@babel/plugin-proposal-throw-expressions"),
        require.resolve("@babel/plugin-proposal-optional-catch-binding"),
        [
            require.resolve("@babel/plugin-proposal-object-rest-spread"),
            {
                // 使用Object.assign代替babel的helper方法
                loose: true,
                useBuiltIns: true
            }
        ],
        require.resolve("@babel/plugin-syntax-top-level-await"),
        // require.resolve("@babel/plugin-transform-react-jsx"),
        // require.resolve("@babel/plugin-transform-proto-to-assign"), //Internet Explorer(10 and below)
        [
            require.resolve("@babel/plugin-proposal-pipeline-operator"),
            { proposal: "minimal" }
        ],
        runtimeOptions && [
            require.resolve("@babel/plugin-transform-runtime"),
            runtimeOptions
        ],
        require.resolve("babel-plugin-dev-expression"), //Replaces __DEV__ with process.env.NODE_ENV !== 'production'
        modulePlugin
    ].filter(Boolean);
}
