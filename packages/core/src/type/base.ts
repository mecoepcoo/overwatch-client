import type { GlobalConfig, Plugin } from '../type'

export interface BaseClient {
  readonly _config: GlobalConfig
  readonly _plugins: Plugin[]

  use: (plugin: Plugin, ...args: any[]) => any
}
