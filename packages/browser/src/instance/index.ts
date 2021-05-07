import { logger } from '@tz-overwatch/util'
import { Config } from '@tz-overwatch/type'
import { BrowserClient as _BrowserClient } from '../client'

type IBrowserClient = _BrowserClient

type BrowserClient = {
  _client: IBrowserClient | null
  init: (config: Config) => IBrowserClient
}

export const BrowserClient: BrowserClient = {
  _client: null,
  init(config: Config) {
    if (BrowserClient._client) {
      logger.warn('Client has been initialized.')
      return BrowserClient._client
    }

    const client = new _BrowserClient(config)
    BrowserClient._client = client
    return client
  },
}
