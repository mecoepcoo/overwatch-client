const fs = require('fs-extra')
const path = require('path')
const argv = require('yargs').argv
const { getArgs } = require('./utils')

const resolve = function(...args) {
  return path.resolve(__dirname, ...args)
}

const args = getArgs(argv._)
const target = args.target
const env = 'production'

const targets = fs
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
  .map((dirname) => dirname.replace('overwatch-', ''))

console.log(targets)

function build(target) {
  const pkgName = `overwatch-${target}`
  const pkgDir = resolve('../packages', pkgName)
  // 清空输出目录
  fs.removeSync(`${pkgDir}/dist`)
  // TODO: 执行rollup命令

}
