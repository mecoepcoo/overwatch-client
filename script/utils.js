const resolve = require('path').resolve

function getArgs(argsList) {
  let args = {}
  function parseArgs (arg) {
    let splitArg = arg.split('=')
    let [k, v] = [splitArg[0], splitArg[1]]
    if (k && v && v !== 'undefined') {
      args[k] = v
    }
  }
  if (typeof argsList === 'string') {
    parseArgs(argsList)
    return args
  }
  argsList.forEach((arg) => {
    parseArgs(arg)
  })
  return args
}

const BIN_DIR = resolve(__dirname, '../node_modules/.bin')
const bin = (command) => {
  return resolve(BIN_DIR, command)
}

module.exports = {
  bin,
  getArgs,
}
