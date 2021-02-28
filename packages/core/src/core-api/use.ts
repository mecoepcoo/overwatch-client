import type { BaseClient, Plugin } from '../type'
import { logger } from '../utils'

export function installPlugin(Client: BaseClient, plugin: Plugin, ...args: any[]) {
  const installedPlugins = Client._plugins
  if (installedPlugins.indexOf(plugin) > -1) {
    return Client
  }
  if (typeof plugin.install !== 'function') {
    logger.warn('Plugin must contain a member method named install.')
    return Client
  }
  plugin.install.apply(plugin, [Client, ...args])
  installedPlugins.push(plugin)
  return Client
}
