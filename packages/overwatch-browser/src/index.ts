import { captureScriptError, captureUnhandledrejection } from './capture/error/scriptError'

captureScriptError()
captureUnhandledrejection()

export default 'test'
