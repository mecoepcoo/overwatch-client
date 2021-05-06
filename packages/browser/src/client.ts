import { BaseClient, installPlugin } from '@tz-overwatch/core'
import type { Config, Plugin } from '@tz-overwatch/type'

export class BrowserClient extends BaseClient<Config> {
  readonly _config: Config
  readonly _plugins: Plugin[] = []

  constructor(config: Config) {
    super(config)
    this._config = config
  }

  public use(plugin: Plugin, ...args: any[]): any {
    return installPlugin(this, plugin, ...args)
  }

  public getConfig(): Config {
    return this._config
  }

  public getPlugins(): Plugin[] {
    return this._plugins
  }
}
