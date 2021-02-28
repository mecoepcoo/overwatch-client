// TODO: 类型导出需要修正，直接放在core中似乎不合适
import { type, utils, Client } from '@tz-overwatch/core'
import { plugin } from '../plugin'

type BrowserClient = {
  _client: Client | null
  init: (config: type.GlobalConfig) => Client
}

export const BrowserClient: BrowserClient = {
  _client: null,
  init(config: type.GlobalConfig) {
    if (BrowserClient._client) {
      // TODO: logger应该挂在client上
      utils.logger.warn('Client has been initialized.')
      return BrowserClient._client
    }

    const client = new Client(config)
    BrowserClient._client = client
    client.use(plugin)
    return client
  },
}
