import type { type } from '@tz-overwatch/core'

import { executeCapture } from './capture'

export const plugin: type.Plugin = {
  name: 'OverwatchBrowser',
  install(Overwatch: type.BaseOverwatch, options: Record<string, any>) {
    executeCapture()
  },
}
