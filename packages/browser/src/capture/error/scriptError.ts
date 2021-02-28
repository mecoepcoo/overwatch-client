import { errorEventDispatch } from '../../dispatcher/errorEventDispatcher'

function listener(e: ErrorEvent | PromiseRejectionEvent) {
  errorEventDispatch(e)
}

export function captureScriptError() {
  window.addEventListener('error', listener, true)
}

export function captureUnhandledrejection() {
  window.addEventListener('unhandledrejection', listener, true)
}
