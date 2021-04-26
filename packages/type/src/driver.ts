import { Transport } from './transport'
import { Detail } from './eventdetail'
import { Event, EventType } from './event'

/**
 * Driver用于处理SDK中的具体业务逻辑，例如生成、发送事件等。
 *
 * 当SDK需要和Client通信时，最好借助driver来实现，例如从browser-sdk从浏览器捕获异常，
 * 然后由driver根据异常生成event，再传递给client发送。
 *
 * 不同的平台通常有不同 driver，比如browser-driver, miniprogram-driver.
 */
export interface Driver {
  /**
   * 返回当前的数据传输器，
   * 数据传输器是异步加载的，在一开始可能无法拿到
   * @returns transport
   */
  getTransport(): Transport

  /**
   * 从错误详情创建一个事件
   */
  eventFromError<D extends Detail>(eventType: EventType, detail: D): Event

  /** 发送事件 */
  sendEvent(event: Event): void
}
