const path = require('path')
const shell = require('shelljs')
const argv = require('yargs').argv
const { getArgs } = require('./utils')

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const ENV = 'development'

const args = getArgs(argv._)
const target = args.target || 'core'
const rollupConfig = resolve('rollup.config.js')

let cmd = `cross-env target=${target} NODE_ENV=${ENV} rollup -w -c ${rollupConfig}`
shell.exec(cmd)
