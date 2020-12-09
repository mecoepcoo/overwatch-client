import { ScriptErrorDetail } from '../type/errorDetail'

export function uncaughtErrorHandler(e: ErrorEvent) {
  console.log(e)
  const { filename, message, lineno, colno, error } = e
  const { name, stack } = error
  const scriptErrorDetail: ScriptErrorDetail = {
    type: 'scriptError',
    timestamp: new Date().getTime(),
    pageUrl: window.location.href,
    title: document.title,
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
