import { captureScriptError, captureUnhandledrejection } from './error/scriptError'
import { captureHttpError } from './error/httpError'

export function captureScript() {
  captureScriptError()
  captureUnhandledrejection()
}

export function captureHttp() {
  captureHttpError()
}

export function executeCapture() {
  captureScript()
  captureHttp()
}
