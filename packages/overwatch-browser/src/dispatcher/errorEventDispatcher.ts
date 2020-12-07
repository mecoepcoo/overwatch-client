import { uncaughtErrorHandler } from '../handler/uncaughtErrorHandler'

export function errorEventDispatch(e: ErrorEvent) {
  console.log(e)
  uncaughtErrorHandler(e)
}
