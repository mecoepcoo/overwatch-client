import type { Client, Plugin } from '@tz-overwatch/type'
import { logger } from '@tz-overwatch/util'

export function installPlugin(Client: Client, plugin: Plugin, ...args: any[]) {
  const installedPlugins = Client._plugins
  if (installedPlugins.indexOf(plugin) > -1) {
    return Client
  }
  if (typeof plugin.install !== 'function') {
    logger.warn('Plugin must contain a member method named install.')
    return Client
  }
  plugin.install.apply(plugin, [Client, args])
  installedPlugins.push(plugin)
  return Client
}
