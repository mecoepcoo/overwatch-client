import { BaseClient, installPlugin } from '@tz-overwatch/core'
import type { Config, Plugin } from '@tz-overwatch/type'
import { BrowserDriver } from './driver'

export class BrowserClient extends BaseClient<Config> {
  readonly _config: Config
  readonly _plugins: Plugin[] = []
  readonly _driver: BrowserDriver

  constructor(config: Config) {
    super(config)
    this._config = config
    this._driver = new BrowserDriver(config)
  }

  public use(plugin: Plugin, ...args: any[]): any {
    return installPlugin(this, plugin, ...args)
  }

  get config(): Config {
    return this._config
  }

  get plugins(): Plugin[] {
    return this._plugins
  }
}
