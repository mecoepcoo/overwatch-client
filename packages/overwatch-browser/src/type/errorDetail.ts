export interface BaseErrorDetail {
  /** 错误类型 */
  type: string
  /** 发生错误的时间 */
  timestamp: number
  /** 发生错误的url */
  pageUrl: string
  /** 页面标题 */
  title: string
  /** 信息 */
  message?: string
}

export interface ScriptErrorDetail extends BaseErrorDetail {
  type: 'scriptError'
  /** 异常名称 */
  name: string
  /** 发生异常的文件路径 */
  filePath: string
  /** 行号 */
  lineno: number
  /** 列号 */
  colno: number
  /** 错误堆栈 */
  stack: string
}

export interface ResourceErrorDetail extends BaseErrorDetail {
  type: 'resourceError'
  src: string
  tagName: string
  outerHTML: string
  xPath: string
}

export interface HttpErrorDetail extends BaseErrorDetail {
  type: 'httpError'
  url: string
  method: string
  status: number
  statusText: string
  loadTime: number
  response?: string
  headers?: Record<string, string>
}

export interface CustomErrorInfo extends BaseErrorDetail {
  type: 'customError'
  customInfo: {
    [propName: string]: unknown
  }
}

export interface ExtendInfo {
  id: string
  ua: string
  [propName: string]: any
}
