import {
  ScriptError,
  UnhandledrejectionError,
  ResourceError,
  HttpError,
  CustomError,
} from './eventdetail'
import { SdkInfo } from './sdkinfo'

export type EventType =
  | 'scriptError'
  | 'unhandledrejection'
  | 'resourceError'
  | 'httpError'
  | 'customError'

/**
 * 发送给overwatch的事件
 */
export interface Event {
  id: string
  /** 发生错误的时间，客户端记录 */
  timestamp: number
  /** 应用版本 */
  version: string
  /** 错误类型 */
  type: string
  /** 信息 */
  message?: string
  /** 页面标题 */
  title?: string
  /** 发生错误的url */
  pageUrl?: string
  ua?: string
  /** 发生异常前的用户行为 */
  breadcrumbs?: any
  /** 脚本异常 */
  scriptError?: ScriptError
  /** 未捕获的promise异常 */
  unhandledrejectionError?: UnhandledrejectionError
  /** 资源加载异常 */
  resourceError?: ResourceError
  /** 网络请求异常 */
  httpError?: HttpError
  /** 自定义异常 */
  customError?: CustomError
  sdk?: SdkInfo
  otherSdk?: SdkInfo[]
  [propName: string]: any
}
