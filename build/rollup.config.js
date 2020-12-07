import path from 'path'
import babel from '@rollup/plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import { merge } from 'lodash'
const argv = require('yargs').argv;

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const getArgs = require(resolve('../script/utils.js')).getArgs
const args = getArgs(argv.environment)
const TARGET = args.target
const pkgName = `overwatch-${TARGET}`
const pkgsDir = resolve('../packages')
const pkgDir = resolve(pkgsDir, pkgName)
const pkg = require(resolve(`${pkgsDir}/${pkgName}/package.json`))
const VERSION = pkg.version
const { buildOptions: pkgBuildOptions = {} } = pkg

const banner = `/**
* ${pkg.name} v${VERSION}
* (c) ${new Date().getFullYear()} Tianzhen <mecoepcoo@vip.qq.com>
*/`

const extensions = ['.js', '.ts']

const jobs = {
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
      name: pkgBuildOptions.name,
      file: resolve(`${pkgDir}/${pkg.unpkg}`),
    },
  }
}

function createConfig(job, plugins = []) {
  return merge({
    input: resolve(pkgDir, 'src/index.ts'),
    output: {
      sourcemap: true,
      banner,
    },
    plugins: [
      eslint(),
      replace({
        exclude: 'node_modules/**',
        __TARGET__: JSON.stringify(TARGET || ''),
        __VERSION__: JSON.stringify(VERSION),
      }),
      commonjs(),
      nodeResolve({
        extensions,
        modulesOnly: true,
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        extensions,
        babelHelpers: 'bundled',
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript'
        ]
      }),
      ...plugins,
    ],
  }, job)
}

let formats = args.format || args.formats || 'esm,cjs,umd'
formats = formats.split(',')

let config = formats.map((format) => {
  const job = jobs[format]
  if (process.env.NODE_ENV === 'production') {
    return createConfig(job, [terser()])  
  }
  return createConfig(job)
})

export default config
