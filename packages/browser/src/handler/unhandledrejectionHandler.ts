import { UnhandledrejectionError } from '@tz-overwatch/type'

export function unhandledrejectionHandler(e: PromiseRejectionEvent) {
  console.log(e)
  const { reason } = e
  const unhandledrejectionDetail: UnhandledrejectionError = {
    // TODO: reason是否需要给message？
    // message: reason.message || reason,
    stack: reason.stack || '',
  }
  console.log(unhandledrejectionDetail)
  return unhandledrejectionDetail
}
