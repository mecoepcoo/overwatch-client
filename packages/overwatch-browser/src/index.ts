import { captureScriptError, captureUnhandledrejection } from './capture/error/scriptError'
import { captureHttpError } from './capture/error/httpError'

captureScriptError()
captureUnhandledrejection()
captureHttpError()

export default 'test'
