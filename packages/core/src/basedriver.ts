import { Driver, Event, EventType, Detail, Transport } from '@tz-overwatch/type'
import { DefaultTransport } from './transport'

export abstract class BaseDriver implements Driver {
  protected _transport: Transport

  constructor() {
    this._transport = new DefaultTransport()
  }

  getTransport(): Transport {
    return this._transport
  }
  // TODO: 移到browser里去
  createEvent<D extends Detail>(eventType: EventType, detail: D): Event {
    
  }

  sendEvent(event: Event): any {
    this._transport.sendEvent(event)
  }
}
