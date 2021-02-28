const path = require('path')
const shell = require('shelljs')
const argv = require('yargs').argv
const { getArgs } = require('./utils')

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const env = 'development'

const args = getArgs(argv._)
const target = args.target || 'core'
const rollupConfig = resolve('../build/rollup.config.js')

let cmd = `cross-env target=${target} NODE_ENV=${env} rollup -w -c ${rollupConfig}`
shell.exec(cmd)
