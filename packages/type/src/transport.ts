import { Event } from './event'

/** 传输器，用于向收集系统发送事件、行为等数据 */
export type Transport = {
  /**
   * 向事件收集系统发送事件
   * @param event 监控事件
   */
  sendEvent(event: Event): any
}

export type TransportOptions = {
  [propName: string]: any
}

export type TransportClass<T extends Transport> = new (options: TransportOptions) => T
