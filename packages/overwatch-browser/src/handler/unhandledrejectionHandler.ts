import { UnhandledrejectionDetail } from '../type/errorDetail'
export function unhandledrejectionHandler(e: PromiseRejectionEvent) {
  console.log(e)
  const { reason } = e
  const unhandledrejectionDetail: UnhandledrejectionDetail = {
    type: 'unhandledrejection',
    timestamp: new Date().getTime(),
    pageUrl: window.location.href,
    title: document.title,
    message: reason.message || reason,
    stack: reason.stack || '',
  }
  console.log(unhandledrejectionDetail)
  return unhandledrejectionDetail
}
