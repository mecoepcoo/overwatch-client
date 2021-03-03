import { Config } from './config'
import { Plugin } from './plugin'

export interface Client<C extends Config = Config> {
  readonly _config: C
  readonly _plugins: Plugin[]
  /** 安装插件 */
  use: (plugin: Plugin, ...args: any[]) => any
  /** 获取配置 */
  getConfig(): C
  /** 获取已安装的插件列表 */
  getPlugins(): Plugin[]
}
