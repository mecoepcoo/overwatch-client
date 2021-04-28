import { sendRequest } from './lib/xhr'

export function report({
  url,
  type,
  withCredentials,
  headers,
  data,
}: {
  url: string
  type?: 'GET' | 'POST' | string
  withCredentials?: boolean
  headers?: Record<string, any>
  data?: any
}): Promise<any> {
  return new Promise((resolve, reject) => {
    sendRequest({
      url,
      type: type || 'GET',
      data,
      withCredentials: !!withCredentials,
      headers,
      success: (responseText: any) => {
        resolve(responseText)
      },
      fail: (err: string) => {
        reject(new Error(err || 'Request failed'))
      },
    })
  })
}
