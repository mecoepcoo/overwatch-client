/** 脚本异常 */
export interface ScriptError {
  /** 异常名称 */
  name: string
  /** error message */
  message: string
  /** 发生异常的文件路径 */
  filePath: string
  /** 行号 */
  lineno: number
  /** 列号 */
  colno: number
  /** 错误堆栈 */
  stack: string
}

/** 未捕获的promise异常 */
export interface UnhandledrejectionError {
  stack?: string
}

/** 资源加载异常 */
export interface ResourceError {
  src: string
  tagName: string
  outerHTML: string
  xPath: string
}

/** 网络请求异常 */
export interface HttpError {
  url: string
  method?: string
  status: number
  statusText: string
  loadTime: number
  response?: string
  headers?: Record<string, string>
}

/** 自定义异常 */
export interface CustomError {
  [propName: string]: unknown
}

export type Detail = ScriptError | UnhandledrejectionError | ResourceError | HttpError | CustomError
