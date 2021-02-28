const fs = require('fs-extra')
const path = require('path')
const argv = require('yargs').argv
const shell = require('shelljs')
const { getArgs } = require('./utils')

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const env = 'production'

const args = getArgs(argv._)
const target = args.target
const rollupConfig = resolve('../build/rollup.config.js')

const targets = target ? [target] : fs
  .readdirSync(resolve('../packages'))
  .filter((dirname) => {
    const pkgDir = resolve('../packages', dirname)
    const pkg = require(resolve(`${pkgDir}/package.json`))
    if (!pkg.buildOptions) {
      console.warn(`[${dirname}]缺少buildOptions属性，跳过编译`)
      return false
    }
    return true
  })
  .sort((a, b) => {
    const pkgsDir = resolve('../packages')
    const pkgA = require(resolve(pkgsDir, `${a}/package.json`))
    const pkgB = require(resolve(pkgsDir, `${b}/package.json`))
    return pkgA.buildOptions.order - pkgB.buildOptions.order
  })

// 编译单个包
function build(target) {
  const pkgName = target
  const pkgDir = resolve('../packages', pkgName)
  // 清空输出目录
  fs.removeSync(`${pkgDir}/dist`)

  let cmd = `cross-env target=${target} NODE_ENV=${env} rollup -c ${rollupConfig}`
  shell.exec(cmd)
}
// 编译全部包
function buildTargets(targets) {
  for (let target of targets) {
    build(target)
  }
}

buildTargets(targets)
