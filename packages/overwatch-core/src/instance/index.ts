import type { GlobalConfig, BaseOverwatch, Plugin } from '../type'

import { noop } from '../utils/helper'
import { installPlugin } from '../core-api'

const defaultConfig: Partial<GlobalConfig> = {
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

class Overwatch implements BaseOverwatch {
  readonly _config: GlobalConfig
  readonly _plugins: [] = []

  constructor(config: GlobalConfig) {
    this._config = Object.assign({}, defaultConfig, config)
  }

  use(plugin: Plugin, ...args: any[]): any {
    return installPlugin(this, plugin, ...args)
  }
}

export default Overwatch
