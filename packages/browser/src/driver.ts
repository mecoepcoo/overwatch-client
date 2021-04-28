import { BaseDriver } from '@tz-overwatch/core'
import { Config, Detail, Event, EventType } from '@tz-overwatch/type'
import { eventFromError } from './eventbuilder'
import { report } from './report'

export interface BrowserConfig extends Config {
  allowUrls?: Array<string | RegExp>
}

export class BrowserDriver extends BaseDriver<BrowserConfig> {
  public eventFromError<D extends Detail>(eventType: EventType, detail: D): Event {
    return eventFromError(eventType, detail)
  }

  sendEvent(event: Event): any {
    report({
      url: this._config.reportUrl,
      data: event,
    })
  }
}
