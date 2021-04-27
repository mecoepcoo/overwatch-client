import { Config, Driver, Event, EventType, Detail, Transport } from '@tz-overwatch/type'
import { logger } from '@tz-overwatch/util'
import { DefaultTransport } from './transport'

/**
 * 驱动
 *
 * 驱动为底层操作提供特定平台的实现，驱动可以持久化和加载信息，发送事件，为环境提供hook
 *
 * 驱动在构造函数中接收Client的句柄，当驱动生成事件时，必须先传递给Client验证和处理
 *
 * 驱动一般针对特定的平台开发，比如浏览器有BrowserDriver，高级SDK可以实例化多个驱动来处* 理不同的任务
 */
export abstract class BaseDriver<C extends Config> implements Driver {
  protected _config: C

  protected _transport: Transport

  constructor(config: C) {
    this._config = config
    this._transport = this._setTransport()
  }

  getTransport(): Transport {
    return this._transport
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  eventFromError<D extends Detail>(eventType: EventType, detail: D): Event {
    logger.warn('driver必须实现eventFromError方法')
    return false as any
  }

  sendEvent(event: Event): any {
    this._transport.sendEvent(event)
  }

  protected _setTransport(): Transport {
    return new DefaultTransport()
  }
}
