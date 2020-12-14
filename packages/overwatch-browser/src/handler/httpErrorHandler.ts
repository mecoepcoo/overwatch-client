import { TimeRecord, HttpErrorDetail } from '../type'

export function httpErrorHandler(timeRecordArray: TimeRecord[]) {
  console.log(timeRecordArray)
  for (let i in timeRecordArray) {
    let timeRecord = timeRecordArray[i]
    const { timestamp, event } = timeRecord
    const { detail } = event
    if ((detail.status >= 200 && detail.status < 400) || detail.status <= 0) {
      // return
    }
    const currentTime = new Date().getTime()
    const { responseURL, status, statusText } = detail
    const loadTime = currentTime - timestamp
    let response = ''
    try {
      response = JSON.stringify(detail.response)
    } catch (err) {
      response = ''
    }
    let httpError: HttpErrorDetail = {
      type: 'httpError',
      timestamp: currentTime,
      pageUrl: window.location.href,
      title: document.title,
      url: responseURL,
      status,
      statusText,
      loadTime,
      response,
    }
    console.log(httpError)
  }
}
