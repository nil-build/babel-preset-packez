
import { omit, defaultsDeep } from 'lodash';
import plugins from './plugins';

export default function (api, opts) {
    const runtimeOptions = {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
        absoluteRuntime: false,
    }

    return {
        "presets": [
            [
                require.resolve('@babel/preset-env'),
                omit(opts, ["runtimeOptions", "strictMode"])
            ],
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-flow')
        ],
        "plugins": plugins(
            api,
            defaultsDeep(opts, {
                modules: "auto",
                strictMode: true,
                runtimeOptions
            })
        )
    }

}