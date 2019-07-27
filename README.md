# babel-preset-packez

## Install & Usage

```sh
npm install --save-dev babel-preset-packez
```

```
{
  "presets": ["babel-preset-packez"]
}
```

## Options

### `modules`

`"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false`, defaults to `"cjs"`.

Enable transformation of ES6 module syntax to another module type.

Setting this to `false` will not transform modules.

Also note that `cjs` is just an alias for `commonjs`.

### `strictMode`

`boolean`, defaults to `true`

详细： [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

### `runtimeOptions`

`object`

defaults to

```
{
corejs: false,
helpers: true,
regenerator: true,
useESModules: false,
absoluteRuntime: false,
}
```

详细：[transform-runtime](https://babeljs.io/docs/en/next/babel-plugin-transform-runtime)
