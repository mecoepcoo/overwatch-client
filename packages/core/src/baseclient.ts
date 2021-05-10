import { Config, Client, Plugin } from '@tz-overwatch/type'

export abstract class BaseClient<C extends Config> implements Client<C> {
  readonly _config: C
  readonly _plugins: Plugin[] = []

  constructor(config: C) {
    this._config = config
  }

  abstract use(plugin: Plugin, ...args: any[]): any

  get config(): C

  get plugins(): Plugin[]
}
