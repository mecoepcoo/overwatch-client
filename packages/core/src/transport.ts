import { Transport, Event } from '@tz-overwatch/type'
import { logger } from '@tz-overwatch/util'

/**
 * 默认的transport，当transport未配置时给出提示
 */
export class DefaultTransport implements Transport {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendEvent(event: Event): any {
    logger.warn('transport未配置，无法发送事件')
  }
}
