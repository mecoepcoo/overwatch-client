import path from 'path'
import ts from 'rollup-plugin-typescript2'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { merge } from 'lodash'

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const env = process.env.NODE_ENV || 'production'
const target = process.env.target || 'core'
const pkgName = target
const pkgsDir = resolve('../packages')
const pkgDir = resolve(pkgsDir, pkgName)
const pkg = require(resolve(`${pkgDir}/package.json`))
const buildOptions = pkg.buildOptions || {}
const buildFormats = buildOptions.formats || ['esm', 'cjs', 'umd']
const version = pkg.version

const banner = `/**
* ${pkg.name} v${version}
* (c) ${new Date().getFullYear()} Tianzhen <mecoepcoo@vip.qq.com>
*/`

const extensions = ['.js', '.ts']

const formatConfig = {
  esm: {
    output: {
      format: 'esm',
      file: resolve(`${pkgDir}/${pkg.module}`),
    },
  },
  cjs: {
    output: {
      format: 'cjs',
      file: resolve(`${pkgDir}/${pkg.main}`),
    },
  },
  umd: {
    output: {
      format: 'umd',
      name: buildOptions.name,
      file: resolve(`${pkgDir}/${pkg.unpkg}`),
    },
  }
}

function createConfig(input, output, plugins = [], override) {
  return merge({
    input,
    output,
    plugins: [
      eslint(),
      replace({
        exclude: 'node_modules/**',
        __TARGET__: JSON.stringify(target || ''),
        __VERSION__: JSON.stringify(version),
      }),
      commonjs(),
      nodeResolve({
        extensions,
      }),
      json(),
      ts({
        tsconfig: resolve(pkgDir, 'tsconfig.json')
      }),
      ...plugins,
    ],
  }, override)
}

const config = []

let plugins = []
if (env === 'production') {
  plugins.push(terser({
    format: {
      comments: RegExp(`${pkg.name}`)
    }
  }))
}
buildFormats.forEach((format) => {
  let configItem = createConfig(
    resolve(pkgDir, 'src/index.ts'),
    {
      sourcemap: true,
      banner,
    },
    plugins,
    {...formatConfig[format]},
  )
  config.push(configItem)
})
export default config
