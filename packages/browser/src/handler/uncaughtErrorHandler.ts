import { ScriptError } from '@tz-overwatch/type'

export function uncaughtErrorHandler(e: ErrorEvent) {
  console.log(e)
  const { filename, message, lineno, colno, error } = e
  const { name, stack } = error
  const scriptErrorDetail: ScriptError = {
    message,
    name,
    filePath: filename,
    lineno,
    colno,
    stack,
  }
  console.log(scriptErrorDetail)
  return scriptErrorDetail
}
