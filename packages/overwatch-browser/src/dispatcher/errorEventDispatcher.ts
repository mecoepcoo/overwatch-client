import { uncaughtErrorHandler } from '../handler/uncaughtErrorHandler'

export function errorEventDispatch(e: ErrorEvent | PromiseRejectionEvent) {
  const { type } = e
  if (type === 'error') {
    const evt = e as ErrorEvent
    const { message, error } = evt
    const target = evt.target || evt.srcElement
    if (message && error) {
      // 忽略跨域错误
      if (message === 'Script error.') {
        return
      }
      uncaughtErrorHandler(evt)
    } else if (target) {
      // resourceErrorHandler(e)
    }
  } else if (type === 'unhandledrejection') {
    // unhandledrejectionHandler()
  } else {
    // unknownErrorHandler()
  }
}
