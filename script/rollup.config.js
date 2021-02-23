import path from 'path'
import babel from '@rollup/plugin-babel'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'
import { merge } from 'lodash'

const jobs = [
  // esm
  {
    output: {
      format: 'esm',
    },
  },
  {
    output: {
      format: 'cjs',
    }
  },
  {
    output: {
      format: 'umd'
    }
  },
]

function createConfig(job, plugins = []) {
  return merge({
    plugins: []
  })
}
