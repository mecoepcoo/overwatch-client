import type { GlobalConfig } from '../type'

import { noop } from '../utils/helper'

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

class Overwatch {
  config: GlobalConfig

  constructor(config: GlobalConfig) {
    this.config = Object.assign({}, defaultConfig, config)
  }
}

export default Overwatch
