import type { GlobalConfig, Plugin } from '../type'

export interface BaseOverwatch {
  readonly _config: GlobalConfig
  readonly _plugins: Plugin[]

  use: (plugin: Plugin, ...args: any[]) => any
}
