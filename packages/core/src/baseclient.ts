import type { GlobalConfig, BaseClient, Plugin } from './type'

import { noop } from './utils/helper'
import { installPlugin } from './core-api'

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
