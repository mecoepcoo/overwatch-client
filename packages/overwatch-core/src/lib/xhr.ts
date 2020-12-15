interface XHROpts {
  url: string
  type: 'GET' | 'POST' | string
  withCredentials: boolean
  success?: Function
  fail?: Function
  headers?: any
  data?: any
}

export function sendRequest(opts: XHROpts): XMLHttpRequest {
  const req = new XMLHttpRequest()
  req.open(opts.type || 'GET', opts.url, true)
  req.withCredentials = opts.withCredentials
  req.onreadystatechange = () => {
    if (req.readyState === 4) {
      const { status } = req
      if (status >= 200) {
        opts.success && opts.success(req.responseText)
      } else {
        opts.fail &&
          opts.fail(`Request failed, status: ${status}, responseText: ${req.responseText}`)
      }
    }
  }
  if (opts.type === 'POST') {
    if (opts.headers) {
      for (const key in opts.headers) {
        req.setRequestHeader(key, opts.headers[key])
      }
    }
    req.send(opts.data)
  } else {
    req.send()
  }
  return req
}
