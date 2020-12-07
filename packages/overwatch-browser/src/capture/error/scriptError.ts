import { errorEventDispatch } from '../../dispatcher/errorEventDispatcher'

function listener(e: ErrorEvent) {
  errorEventDispatch(e)
}

export function captureScriptError() {
  window.addEventListener('error', listener, true)
}
