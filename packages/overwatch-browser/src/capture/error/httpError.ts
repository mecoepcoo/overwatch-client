import { httpErrorHandler } from '../../handler/httpErrorHandler'
import { TimeRecord } from '../../type'

function rewiredXhr(): void {
  function ajaxEventTrigger(this: XMLHttpRequest, event: string): void {
    const ajaxEvent = new CustomEvent(event, { detail: this })
    window.dispatchEvent(ajaxEvent)
  }

  const oldXhr = window.XMLHttpRequest

  function newXhr(): XMLHttpRequest {
    const realXhr = new oldXhr()
    realXhr.addEventListener(
      'loadstart',
      function () {
        ajaxEventTrigger.call(this, 'ajaxLoadStart')
      },
      false
    )
    realXhr.addEventListener(
      'loadend',
      function () {
        ajaxEventTrigger.call(this, 'ajaxLoadEnd')
      },
      false
    )
    return realXhr
  }

  const timeRecordArray: TimeRecord[] = []
  window.XMLHttpRequest = newXhr as any
  window.addEventListener('ajaxLoadStart', function (e) {
    const tempObj = {
      timestamp: new Date().getTime(),
      event: e as CustomEvent<XMLHttpRequest>,
    }
    timeRecordArray.push(tempObj)
  })
  window.addEventListener('ajaxLoadEnd', function () {
    httpErrorHandler(timeRecordArray)
  })
}

export function captureHttpError() {
  rewiredXhr()
}
