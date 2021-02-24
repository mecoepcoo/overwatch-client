const resolve = require('path').resolve
const shell = require('shelljs')
const argv = require('yargs').argv
const utils = require('./utils')
const _ = require('lodash')
const { getArgs } = utils

const ENV = 'development'
const BIN_DIR = resolve(__dirname, '../node_modules/.bin')
let args = getArgs(argv._)
const rollupConfig = resolve(__dirname, '../build/rollup.config.js')

let environments = {
  target: args.target,
  format: args.format,
  formats: args.formats,
}
environments = _.omitBy(environments, _.isNil)
let envOptions = ''
for (let key in environments) {
  envOptions += `--environment ${key}=${environments[key]} `
}
let cmd = `${resolve(BIN_DIR, 'cross-env')} NODE_ENV=${ENV} ${resolve(BIN_DIR, 'rollup')} -c ${rollupConfig} -w ${envOptions}`
shell.exec(cmd)
