export interface GlobalConfig {
  /** 应用id */
  appId: string
  /** 应用版本 */
  appVersion: string
  /** 环境、渠道 */
  releaseStage?: string
  /** 上报url */
  reportUrl: string
  /** 其他自定义信息，将自动组装到上报信息中 */
  metaData?: Record<string, any>
  /** 延迟多少毫秒，合并缓冲区中内容上报 */
  delay?: number
  /** 抽样率，0-1，为1时表示100%上报 */
  random?: number
  /** 对于同一个错误重复上报的次数，0表示不限制 */
  repeat?: number
  /** 本地存储的有效期(天) */
  localExp?: number
  /** 语言，用于分类 */
  language?: 'javascript' | 'typescript'
  /** 每当错误上报，会执行回调函数 */
  callback?: () => void
  /** 是否在开发环境开启上报，开启后将根据url是否包含localhost或ip地址判断是否为开发环境 */
  devEnable?: boolean
}
