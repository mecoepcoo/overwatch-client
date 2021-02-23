const path = require('path')
const shell = require('shelljs')
const argv = require('yargs').argv
const utils = require('./utils')

const { bin } = utils

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const TARGET = argv.target || ''
const pkgName = `overwatch-${TARGET}`
const pkgsDir = resolve('../packages')
const pkgDir = resolve(pkgsDir, pkgName)
const pkgCf = require(resolve(`${pkgDir}/package.json`))
const { buildOptions } = pkgCf

let cmd = `${bin('tsc')} -p ${pkgDir}`
shell.exec(cmd)
