import type { type } from '@tz-overwatch/core'

import { executeCapture } from './capture'

export const plugin: type.Plugin = {
  name: 'OverwatchBrowser',
  install(Client: type.BaseClient, options: Record<string, any>) {
    executeCapture()
  },
}
