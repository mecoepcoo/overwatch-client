import { noop } from './helper'

type LoggerOptions = {
  info: Function
  warn: Function
}

export const logger: LoggerOptions = {
  info: noop,
  warn: noop,
}

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== undefined
  if (hasConsole) {
    logger.info = (msg: string) => {
      console.log(`[Overwatch info]: ${msg}`)
    }
    logger.warn = (msg: string) => {
      console.warn(`[Overwatch warn]: ${msg}`)
    }
  }
}
