import { Driver, Event, Transport } from '@tz-overwatch/type'
import { DefaultTransport } from './transport'

export abstract class BaseDriver implements Driver {
  protected _transport: Transport

  constructor() {
    this._transport = new DefaultTransport()
  }

  getTransport(): Transport {
    return this._transport
  }

  sendEvent(event: Event): any {
    this._transport.sendEvent(event)
  }
}
