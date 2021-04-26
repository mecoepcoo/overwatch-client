// import type { GlobalConfig, Plugin } from './type'
import { Config, Client, Plugin } from '@tz-overwatch/type'

import { noop } from '@tz-overwatch/util'
import { installPlugin } from './core-api'

export abstract class BaseClient<C extends Config> implements Client<C> {
  readonly _config: C
  readonly _plugins: Plugin[] = []

  constructor(config: C) {
    this._config = config
  }

  abstract use(plugin: Plugin, ...args: any[]): any

  abstract getConfig(): C

  abstract getPlugins(): Plugin[]
}

/* const defaultConfig: Partial<GlobalConfig> = {
  releaseStage: '',
  metaData: {},
  delay: 0,
  sampleRate: 1,
  repeat: 0,
  localExp: 30,
  devEnable: false,
  beforeReport: noop,
  afterReport: noop,
  language: 'javascript',
}

export class Client implements BaseClient {
  readonly _config: GlobalConfig
  readonly _plugins: [] = []

  constructor(config: GlobalConfig) {
    this._config = { ...defaultConfig, ...config }
  }

  use(plugin: Plugin, ...args: any[]): any {
    return installPlugin(this, plugin, ...args)
  }
} */
